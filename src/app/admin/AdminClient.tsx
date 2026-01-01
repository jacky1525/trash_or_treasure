"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, Search, Image as ImageIcon, DollarSign, Eye, Filter, LogOut, LayoutDashboard, Save, RefreshCw } from "lucide-react";
import { createItem, deleteItem, updateItem, logout } from "./actions";

interface IntelPiece {
  id: number;
  text: string;
  rarity: "common" | "rare" | "legendary";
}

interface Item {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  displayedValue: number;
  realValue: number;
  category: string;
  gameSet: string;
  isTreasure: boolean;
  publicRumor: string;
  intelPool: IntelPiece[] | string; // Can be string coming from DB initially
}

const CATEGORIES = ["HEPSİ", "History", "Pop-Culture", "Luxury", "Art", "Tech"];

const formatPrice = (val: number) => {
  return val.toLocaleString('tr-TR');
};

export default function AdminClient({ initialItems }: { initialItems: Item[] }) {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("HEPSİ");
  const [selectedSet, setSelectedSet] = useState("HEPSİ");

  // New state for intel pool editor
  const [intelPool, setIntelPool] = useState<IntelPiece[]>([]);
  const [newIntelText, setNewIntelText] = useState("");
  const [newIntelRarity, setNewIntelRarity] = useState<"common" | "rare" | "legendary">("common");

  // Reset intel pool when opening modal
  useMemo(() => {
    if (editingItem && editingItem.intelPool) {
      if (typeof editingItem.intelPool === 'string') {
          try {
              setIntelPool(JSON.parse(editingItem.intelPool));
          } catch(e) {
              setIntelPool([]);
          }
      } else {
        setIntelPool(editingItem.intelPool as any);
      }
    } else {
      setIntelPool([]);
    }
  }, [editingItem]);

  const addIntel = () => {
    if (!newIntelText.trim()) return;
    const newPiece: IntelPiece = {
      id: Date.now(),
      text: newIntelText,
      rarity: newIntelRarity
    };
    setIntelPool([...intelPool, newPiece]);
    setNewIntelText("");
  };

  const removeIntel = (id: number) => {
    setIntelPool(intelPool.filter(i => i.id !== id));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Append structured intel pool as JSON string
    formData.set('intelPool', JSON.stringify(intelPool));

    if (editingItem) {
      await updateItem(editingItem.id, formData);
    } else {
      await createItem(formData);
    }

    window.location.reload();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Bu eşyayı silmek istediğinizden emin misiniz?")) {
      await deleteItem(id);
      window.location.reload();
    }
  };

  const filteredItems = useMemo(() => {
    return initialItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "HEPSİ" || 
                             item.category === selectedCategory ||
                             item.category?.toUpperCase() === selectedCategory.toUpperCase();
      const matchesSet = selectedSet === "HEPSİ" || 
                        item.gameSet === selectedSet;
      return matchesSearch && matchesCategory && matchesSet;
    });
  }, [initialItems, searchQuery, selectedCategory, selectedSet]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/20">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-pink-500 tracking-[0.2em] uppercase leading-none mb-1">TRASH OR TREASURE</span>
                <h1 className="text-xl font-black italic tracking-tighter text-white leading-none">ADMIN PANEL</h1>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">SİSTEM DURUMU</span>
                <span className="text-xs font-black text-green-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  ÇEVRİMİÇİ
                </span>
              </div>
              <button 
                onClick={() => logout()}
                className="p-3 bg-white/5 hover:bg-red-500/10 hover:text-red-500 rounded-2xl transition-all border border-white/5 group"
                title="Çıkış Yap"
              >
                <LogOut className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-12">
        {/* Header & Controls */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">EŞYA KATALOĞU</h2>
              <p className="text-slate-500 text-sm">Oyun içeriğini ve ipuçlarını buradan yönetin.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-full sm:w-80 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-pink-500 transition-colors" />
                <input 
                  type="text"
                  placeholder="Eşya ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:border-pink-500 outline-none transition-all placeholder:text-slate-600 ring-0"
                />
              </div>
              <button
                onClick={() => {
                  setEditingItem(null);
                  setIsModalOpen(true);
                  setIntelPool([]);
                }}
                className="w-full sm:w-auto bg-white text-slate-950 px-8 py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-pink-500 hover:text-white transition-all shadow-lg shadow-white/5 active:scale-95"
              >
                <Plus className="w-5 h-5" />
                YENİ EŞYA
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-6">
            {/* Set Filter */}
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  <RefreshCw className="w-3 h-3" />
                  OYNANIŞ SETİ FİLTRESİ
               </div>
               <div className="flex flex-wrap gap-2.5">
                  {["HEPSİ", "SET_A", "SET_B", "SET_C"].map(set => (
                    <button
                      key={set}
                      onClick={() => setSelectedSet(set)}
                      className={`px-5 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all border ${
                        selectedSet === set 
                          ? "bg-green-500 text-white border-green-500 shadow-xl shadow-green-500/20" 
                          : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10 hover:text-white"
                      }`}
                    >
                      {set === "HEPSİ" ? "TÜM SETLER" : set.replace("_", " ")}
                    </button>
                  ))}
               </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                <Filter className="w-3 h-3" />
                KATEGORİ FİLTRESİ
              </div>
              <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all border ${
                    selectedCategory === cat 
                      ? "bg-pink-500 text-white border-pink-500 shadow-xl shadow-pink-500/20" 
                      : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10 hover:text-white"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
               <div className="h-px flex-1 bg-white/5" />
               <p className="text-[10px] font-bold text-slate-600">
                Toplam <span className="text-white">{initialItems.length}</span> / Gösterilen <span className="text-pink-500">{filteredItems.length}</span>
              </p>
            </div>
          </div>
        </div>

        </div>

        {/* Grid */}
        <div className="min-h-[400px]">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-slate-900/40 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col group hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/5"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-white border border-white/10 outline outline-1 outline-white/5">
                          {item.category?.toUpperCase() || "OTHER"}
                        </span>
                         <span className={`px-3 py-1 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-white border border-white/10 outline outline-1 outline-white/5 ${
                            item.gameSet === "SET_A" ? "bg-green-500/60" :
                            item.gameSet === "SET_B" ? "bg-blue-500/60" :
                            "bg-purple-500/60"
                        }`}>
                          {item.gameSet || "SET_A"}
                        </span>
                      </div>
                      
                      {item.isTreasure && (
                         <div className="absolute bottom-4 left-4">
                            <span className="px-3 py-1 bg-yellow-500/20 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-yellow-500 border border-yellow-500/40 shadow-lg shadow-yellow-500/20 flex items-center gap-1.5">
                               ✨ HAZİNE
                            </span>
                         </div>
                      )}

                      <div className="absolute top-4 right-4 flex gap-2">
                        <button
                          onClick={() => {
                            setEditingItem(item);
                            setIsModalOpen(true);
                          }}
                          className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-950 transition-all active:scale-90"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-3 bg-red-600/60 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-all active:scale-90"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-8 space-y-6 flex-1 flex flex-col">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold uppercase tracking-tight text-white leading-tight">{item.name}</h3>
                        <p className="text-slate-500 text-sm line-clamp-2 italic font-medium leading-relaxed">"{item.description}"</p>
                      </div>

                      <div className="flex flex-col gap-3 mt-auto pt-4">
                        <div className="bg-white/5 p-5 rounded-3xl border border-white/5 group/range">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 flex justify-between">
                            Tahmini Aralık
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-lg font-black text-white tracking-tighter">${formatPrice(Math.round(item.displayedValue * 0.8))}</p>
                            <span className="text-slate-700 font-bold">-</span>
                            <p className="text-lg font-black text-white tracking-tighter">${formatPrice(Math.round(item.displayedValue * 1.2))}</p>
                          </div>
                        </div>
                        <div className="bg-pink-500/5 p-5 rounded-3xl border border-pink-500/20">
                          <p className="text-[10px] font-black text-pink-500 uppercase tracking-widest mb-1">Gerçek Değeri</p>
                          <p className="text-2xl font-black text-pink-400 font-mono tracking-tighter">${formatPrice(item.realValue)}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 bg-slate-900/20 border border-white/5 rounded-[3rem] text-center border-dashed">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/5">
                <Search className="w-10 h-10 text-slate-700" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2 italic uppercase tracking-tighter underline underline-offset-8 decoration-pink-500/50">Eşya Bulunamadı</h3>
              <p className="text-slate-500 mb-8 max-w-sm font-medium">Arama kriterlerinize uygun eşya bulunmuyor. Lütfen filtrelerinizi kontrol edin.</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("HEPSİ");
                }}
                className="px-8 py-3 bg-white/5 hover:bg-white text-white hover:text-slate-950 font-black text-xs uppercase tracking-widest transition-all rounded-full border border-white/10"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>
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
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[3rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-slate-900/50">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-pink-500/10 rounded-xl flex items-center justify-center border border-pink-500/20">
                      <Plus className="w-5 h-5 text-pink-500" />
                   </div>
                   <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">
                    EŞYAYI <span className="text-pink-500">{editingItem ? "DÜZENLE" : "OLUŞTUR"}</span>
                  </h2>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 hover:bg-white/10 rounded-full transition-all text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-10 space-y-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Eşya Adı</label>
                    <input name="name" defaultValue={editingItem?.name} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-pink-500 outline-none transition-all placeholder:text-slate-700 text-sm font-medium" placeholder="Örn: Antika Vazo" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Kategori</label>
                        <div className="relative">
                        <select 
                            name="category" 
                            defaultValue={editingItem?.category || "History"} 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-pink-500 outline-none transition-all appearance-none cursor-pointer text-sm font-black tracking-widest"
                        >
                            {CATEGORIES.filter(c => c !== "HEPSİ").map(c => (
                            <option key={c} value={c} className="bg-slate-950 text-white pt-4">{c.toUpperCase()}</option>
                            ))}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <Filter className="w-4 h-4" />
                        </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Oynanış Seti</label>
                        <div className="relative">
                        <select 
                            name="gameSet" 
                            defaultValue={editingItem?.gameSet || "SET_A"} 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-pink-500 outline-none transition-all appearance-none cursor-pointer text-sm font-black tracking-widest"
                        >
                            <option value="SET_A" className="bg-slate-950 text-white pt-4">SET A</option>
                            <option value="SET_B" className="bg-slate-950 text-white pt-4">SET B</option>
                            <option value="SET_C" className="bg-slate-950 text-white pt-4">SET C</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <LayoutDashboard className="w-4 h-4" />
                        </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1 space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Görsel URL</label>
                        <input name="imageUrl" defaultValue={editingItem?.imageUrl} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-pink-500 outline-none transition-all placeholder:text-slate-700 text-sm" placeholder="https://..." />
                    </div>
                     <div className="w-1/4 space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Hazine Mi?</label>
                        <label className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors">
                            <span className="text-xs font-bold text-white">HAZİNE</span>
                            <input type="checkbox" name="isTreasure" defaultChecked={editingItem?.isTreasure} className="w-5 h-5 accent-pink-500" />
                        </label>
                    </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Açıklama</label>
                  <textarea 
                    name="description" 
                    defaultValue={editingItem?.description} 
                    required 
                    rows={3} 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-pink-500 outline-none transition-all resize-none custom-scrollbar placeholder:text-slate-700 text-sm font-medium leading-relaxed" 
                    placeholder="Eşyanın kısa hikayesi..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Tahmini Baz Fiyat ($)</label>
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
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-pink-500 outline-none transition-all placeholder:text-slate-700 font-bold"
                      placeholder="30000"
                    />
                    <p className="text-[9px] text-slate-600 font-black px-2 tracking-widest">
                      GÖRÜNEN ARALIK: <span id="range-preview" className="text-pink-500">
                        ${editingItem ? formatPrice(Math.round(editingItem.displayedValue * 0.8)) : "0"} - ${editingItem ? formatPrice(Math.round(editingItem.displayedValue * 1.2)) : "0"}
                      </span>
                    </p>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2 text-pink-500">Gerçek Değeri ($)</label>
                    <input 
                      type="number" 
                      name="realValue" 
                      defaultValue={editingItem?.realValue} 
                      required 
                      className="w-full bg-slate-950 border border-pink-500/30 rounded-2xl px-5 py-4 focus:border-pink-500 outline-none transition-all text-pink-400 font-bold text-lg" 
                      placeholder="45000"
                    />
                  </div>
                </div>

                <div className="space-y-6 pt-10 border-t border-white/5">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="h-px flex-1 bg-white/5" />
                      <p className="text-[10px] font-black text-pink-500 uppercase tracking-[0.3em] whitespace-nowrap">İSTİHBARAT SİSTEMİ</p>
                      <div className="h-px flex-1 bg-white/5" />
                   </div>
                   
                   <div className="space-y-3">
                    <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest px-2 flex items-center gap-2">
                       <span className="w-5 h-5 rounded-lg bg-blue-500/10 flex items-center justify-center text-[10px] border border-blue-500/20">i</span>
                       Kamuoyu Fısıltısı (Public Rumor)
                    </label>
                    <textarea 
                      name="publicRumor" 
                      defaultValue={editingItem?.publicRumor} 
                      required 
                      rows={2}
                      placeholder="Herkesin bildiği o dedikodu..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-pink-500 outline-none transition-all text-sm italic font-medium resize-none custom-scrollbar leading-relaxed" 
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black text-purple-500 uppercase tracking-widest px-2 flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            İstihbarat Havuzu ({intelPool.length})
                        </label>
                    </div>

                    <div className="bg-slate-950/50 rounded-3xl border border-white/5 p-4 space-y-4">
                        <div className="flex gap-2">
                             <select 
                                value={newIntelRarity}
                                onChange={(e) => setNewIntelRarity(e.target.value as any)}
                                className="bg-white/5 border border-white/10 rounded-xl px-3 text-xs font-bold uppercase tracking-wider outline-none focus:border-white/20"
                             >
                                <option className="bg-slate-900 text-slate-400" value="common">Common</option>
                                <option className="bg-slate-900 text-purple-400" value="rare">Rare</option>
                                <option className="bg-slate-900 text-yellow-400" value="legendary">Legend</option>
                             </select>
                             <input 
                                value={newIntelText}
                                onChange={(e) => setNewIntelText(e.target.value)}
                                placeholder="Yeni bir ipucu ekle..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-500 transition-all font-medium"
                                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addIntel())}
                             />
                             <button 
                                type="button"
                                onClick={addIntel}
                                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all"
                             >
                                <Plus className="w-5 h-5" />
                             </button>
                        </div>

                        <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                            {intelPool.map((intel) => (
                                <div key={intel.id} className="flex gap-3 items-start p-3 bg-white/5 rounded-xl border border-white/5 group">
                                     <span className={`text-[9px] font-black px-2 py-1 rounded bg-black/40 uppercase tracking-wider mt-0.5 ${
                                        intel.rarity === 'common' ? 'text-slate-400 border border-slate-700' :
                                        intel.rarity === 'rare' ? 'text-purple-400 border border-purple-500/40' :
                                        'text-yellow-400 border border-yellow-500/40'
                                     }`}>
                                        {intel.rarity.substring(0,3)}
                                     </span>
                                     <p className="text-xs text-slate-300 flex-1 leading-relaxed font-medium">{intel.text}</p>
                                     <button 
                                        type="button" 
                                        onClick={() => removeIntel(intel.id)}
                                        className="text-slate-600 hover:text-red-500 transition-colors"
                                    >
                                        <X className="w-3.5 h-3.5" />
                                     </button>
                                </div>
                            ))}
                            {intelPool.length === 0 && (
                                <p className="text-center text-xs text-slate-600 italic py-4">Henüz hiç ipucu eklenmedi.</p>
                            )}
                        </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex gap-4 sticky bottom-0 bg-slate-900/50 backdrop-blur-xl p-4 -mx-10 border-t border-white/5">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 bg-white/5 text-white py-4.5 rounded-2xl font-black text-xs hover:bg-white/10 transition-all uppercase tracking-widest border border-white/5"
                  >
                    İptal
                  </button>
                  <button 
                    type="submit" 
                    className="flex-[2] bg-gradient-to-r from-pink-600 to-pink-500 text-white py-4.5 rounded-2xl font-black text-xs hover:from-pink-500 hover:to-pink-400 transition-all uppercase tracking-widest shadow-xl shadow-pink-500/20 flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    {editingItem ? "KAYDET" : "EKLE"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
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
        select option {
            background: #020617;
            color: white;
            padding: 10px;
        }
      `}</style>
    </div>
  );
}

