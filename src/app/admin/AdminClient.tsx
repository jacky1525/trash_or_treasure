"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, Save, Image as ImageIcon, DollarSign, Info, Eye } from "lucide-react";
import { createItem, deleteItem, updateItem } from "./actions";

interface Item {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  displayedValue: number;
  realValue: number;
  intelGood: string;
  intelBad: string;
  intelSecret: string;
}

const formatPrice = (val: number) => {
  return val.toLocaleString('tr-TR');
};

export default function AdminClient({ initialItems }: { initialItems: Item[] }) {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (editingItem) {
      await updateItem(editingItem.id, formData);
    } else {
      await createItem(formData);
    }

    // Since revalidatePath is server-side, we manually refresh or let Next.js handle it
    // For local UI feel, we can just reload or fetch again. 
    // Simplified: refresh page
    window.location.reload();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Bu eşyayı silmek istediğinizden emin misiniz?")) {
      await deleteItem(id);
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => {
            setEditingItem(null);
            setIsModalOpen(true);
          }}
          className="bg-white text-slate-950 px-6 py-3 rounded-2xl font-black flex items-center gap-2 hover:bg-pink-500 hover:text-white transition-all shadow-lg"
        >
          <Plus className="w-5 h-5" />
          YENİ EŞYA EKLE
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col group hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => {
                      setEditingItem(item);
                      setIsModalOpen(true);
                    }}
                    className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-950 transition-all"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-3 bg-red-600/60 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">{item.name}</h3>
                  <p className="text-slate-500 text-sm line-clamp-1 italic">"{item.description}"</p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex justify-between items-center group/aralik">
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Tahmini Aralık</p>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <p className="text-sm font-black text-white">${formatPrice(Math.round(item.displayedValue * 0.8))}</p>
                        <span className="text-slate-700">-</span>
                        <p className="text-sm font-black text-white">${formatPrice(Math.round(item.displayedValue * 1.2))}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-500/10 p-4 rounded-2xl border border-pink-500/20 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-black text-pink-500 uppercase tracking-widest mb-1">Reveal Değeri</p>
                      <p className="text-xl font-black text-pink-400">${formatPrice(item.realValue)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h2 className="text-2xl font-black italic uppercase tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  {editingItem ? "EŞYAYI DÜZENLE" : "YENİ EŞYA OLUŞTUR"}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-all text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-2">Eşya Adı</label>
                    <input name="name" defaultValue={editingItem?.name} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-pink-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-2">Görsel URL</label>
                    <input name="imageUrl" defaultValue={editingItem?.imageUrl} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-pink-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-2">Açıklama</label>
                  <textarea name="description" defaultValue={editingItem?.description} required rows={2} className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-pink-500 outline-none transition-all resize-none" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-2">Tahmini Baz Fiyat ($)</label>
                    <input 
                      type="number" 
                      name="displayedValue" 
                      defaultValue={editingItem?.displayedValue} 
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        const min = Math.round(val * 0.8);
                        const max = Math.round(val * 1.2);
                        const preview = document.getElementById('range-preview');
                        if (preview) preview.innerText = `$${formatPrice(min)} - $${formatPrice(max)}`;
                      }}
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-pink-500 outline-none transition-all" 
                    />
                    <p className="text-[10px] text-slate-600 font-bold px-2">
                      OYUNCU GÖRÜNÜMÜ: <span id="range-preview" className="text-pink-500">
                        ${formatPrice(Math.round((editingItem?.displayedValue || 0) * 0.8))} - ${formatPrice(Math.round((editingItem?.displayedValue || 0) * 1.2))}
                      </span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-2">Reveal Değeri (Gerçek) ($)</label>
                    <input type="number" name="realValue" defaultValue={editingItem?.realValue} required className="w-full bg-slate-950 border border-pink-500/30 rounded-2xl px-4 py-3 focus:border-pink-500 outline-none transition-all text-pink-400 font-bold" />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                   <p className="text-sm font-black text-pink-500 uppercase tracking-widest mb-2 px-2">İSTİHBARAT BİLGİLERİ</p>
                   
                   <div className="space-y-2">
                    <label className="text-xs font-bold text-green-500 uppercase tracking-widest px-2 flex items-center gap-1">
                       <Plus className="w-3 h-3" /> Olumlu İpucu
                    </label>
                    <input name="intelGood" defaultValue={editingItem?.intelGood} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-pink-500 outline-none transition-all text-sm" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-red-500 uppercase tracking-widest px-2 flex items-center gap-1">
                       <X className="w-3 h-3" /> Olumsuz İpucu
                    </label>
                    <input name="intelBad" defaultValue={editingItem?.intelBad} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-pink-500 outline-none transition-all text-sm" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-purple-500 uppercase tracking-widest px-2 flex items-center gap-1">
                       <Eye className="w-3 h-3" /> Gizli Gerçek
                    </label>
                    <input name="intelSecret" defaultValue={editingItem?.intelSecret} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-pink-500 outline-none transition-all text-sm" />
                  </div>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-5 rounded-[2rem] font-black text-xl hover:from-pink-500 hover:to-purple-500 transition-all shadow-xl shadow-pink-500/20 active:scale-[0.98]">
                    {editingItem ? "GÜNCELLEMEYİ KAYDET" : "EŞYAYI KATALOĞA EKLE"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
