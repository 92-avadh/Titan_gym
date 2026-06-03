"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Compass } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/mockData';

const categories = ["All", "interior", "workout", "equipment", "trainers"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    // Find index in filteredItems
    const idx = filteredItems.findIndex(f => f.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920"
            alt="Gym interior view"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
          <span className="text-titan-red font-black tracking-widest uppercase text-xs">VISUAL EXPERIENCE</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            TITAN <span className="text-gradient-red-blue">GALLERY</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Step inside our luxury training space. Browse our Olympic setups, cardio zones, and high-heat recovery systems.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Pinterest-style Masonry Grid */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  closeLightbox(); // Close if open to avoid index mismatches
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-titan-blue text-black border-titan-blue shadow-glow-blue font-black'
                    : 'bg-zinc-900 border-white/5 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div 
            layout
            className="masonry-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                let sizeClass = "";
                if (item.size === "tall") sizeClass = "masonry-item-tall";
                if (item.size === "wide") sizeClass = "masonry-item-wide";

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={item.id}
                    onClick={() => openLightbox(item)}
                    className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 aspect-square cursor-pointer glass ${sizeClass}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-xs">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xxs font-black text-titan-blue uppercase tracking-widest bg-titan-blue/10 border border-titan-blue/20 px-2.5 py-1 rounded">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold text-white uppercase tracking-tight mt-3 mb-1">
                          {item.title}
                        </h3>
                        <div className="text-xxs text-zinc-400 font-semibold flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-zinc-500" />
                          <span>Tap to view full scale</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2.5 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:border-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button 
              onClick={showPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-3 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:border-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button 
              onClick={showNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-3 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:border-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Wrapper */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950"
            >
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              
              {/* Overlay Metadata */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-left">
                <span className="text-xxs font-black text-titan-blue uppercase tracking-widest bg-titan-blue/10 border border-titan-blue/20 px-2.5 py-1 rounded">
                  {currentItem.category}
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mt-3">
                  {currentItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Facility Consult */}
      <section className="py-20 bg-zinc-950 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <Compass className="w-12 h-12 text-titan-blue" />
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            WANT TO EXPERIENCE THE SPACE IN PERSON?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
            Photos cannot replicate the energy of Titan Fitness. Stop by during our staffed hours for a full facility tour and guest pass walkthrough.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center font-semibold tracking-wide rounded-full bg-titan-red hover:bg-titan-red-hover text-white shadow-glow-red hover:shadow-[0_0_30px_rgba(255,0,60,0.5)] transform hover:-translate-y-0.5 px-8 py-3.5 text-base cursor-pointer">
            Book Guest Tour
          </a>
        </div>
      </section>
    </div>
  );
}
