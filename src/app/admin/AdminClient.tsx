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
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">{item.name}</h3>
                  <p className="text-slate-500 text-sm line-clamp-1">{item.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-2xl">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Görünen</p>
                    <p className="text-lg font-black">${item.displayedValue}</p>
                  </div>
                  <div className="bg-pink-500/10 p-3 rounded-2xl border border-pink-500/20">
                    <p className="text-[10px] font-black text-pink-500 uppercase tracking-widest mb-1">Gerçek</p>
                    <p className="text-lg font-black text-pink-400">${item.realValue}</p>
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
                <h2 className="text-2xl font-black italic uppercase tracking-tighter">
                  {editingItem ? "EŞYAYI DÜZENLE" : "YENİ EŞYA OLUŞTUR"}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-all"
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

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-2">Görünen Fiyat ($)</label>
                    <input type="number" name="displayedValue" defaultValue={editingItem?.displayedValue} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-pink-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-2">Gerçek Değer ($)</label>
                    <input type="number" name="realValue" defaultValue={editingItem?.realValue} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:border-pink-500 outline-none transition-all" />
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
                  <button type="submit" className="w-full bg-white text-slate-950 py-5 rounded-[2rem] font-black text-xl hover:bg-pink-500 hover:text-white transition-all shadow-xl shadow-white/5">
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
