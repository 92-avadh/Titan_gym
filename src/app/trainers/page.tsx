"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Award, Briefcase, Sparkles } from 'lucide-react';
import { TRAINERS } from '@/data/mockData';
import Button from '@/components/ui/Button';
import { InstagramIcon, TwitterIcon, FacebookIcon } from '@/components/ui/SocialIcons';

const specialtiesList = [
  "All",
  "Bodybuilding & Strength",
  "Fat Loss & HIIT",
  "CrossFit & Athletics",
  "Yoga & Flexibility"
];

export default function TrainersPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filteredTrainers = selectedSpecialty === "All"
    ? TRAINERS
    : TRAINERS.filter(t => t.specialty === selectedSpecialty);

  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1920"
            alt="Gym coaches team"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
          <span className="text-titan-red font-black tracking-widest uppercase text-xs">THE TITAN ATHLETIC DEPT</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            MASTER <span className="text-gradient-red-blue">COACHES</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Our specialists carry top-tier international credentials and are committed to structuring precise physical programming.
          </p>
        </div>
      </section>

      {/* Specialty Filter Buttons & Grid */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
            {specialtiesList.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  selectedSpecialty === specialty
                    ? 'bg-titan-red text-white border-titan-red shadow-glow-red'
                    : 'bg-zinc-900 border-white/5 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>

          {/* Trainer Grid with AnimatePresence */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredTrainers.map((trainer) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={trainer.id}
                  className="group rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/35 hover:border-titan-blue/20 transition-all duration-500 glass grid grid-cols-1 sm:grid-cols-12"
                >
                  {/* Image Column */}
                  <div className="relative aspect-[3/4] sm:aspect-auto sm:col-span-5 w-full overflow-hidden">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    {/* Floating Rating Badge */}
                    <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-white/10 text-white">
                      <Star className="w-3.5 h-3.5 fill-titan-red text-titan-red" />
                      <span>{trainer.rating} Rating</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="p-6 sm:p-8 sm:col-span-7 flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-4">
                      {/* Title & specialty */}
                      <div>
                        <span className="text-xs font-bold text-titan-blue uppercase tracking-widest">
                          {trainer.specialty}
                        </span>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-1">
                          {trainer.name}
                        </h3>
                      </div>

                      {/* Bio */}
                      <p className="text-zinc-400 text-sm leading-relaxed font-light">
                        {trainer.bio}
                      </p>

                      {/* Experience and Certs */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                          <Briefcase className="w-4 h-4 text-titan-red" />
                          <span>Professional Experience: {trainer.experience}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 mb-1.5">
                            <Award className="w-4 h-4 text-titan-blue" />
                            <span>Certifications:</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 pl-6">
                            {trainer.certifications.map((cert, idx) => (
                              <span 
                                key={idx}
                                className="text-xxs font-bold text-zinc-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social links & CTA */}
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex gap-4">
                        {trainer.socials.instagram && (
                          <a href={trainer.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-300">
                            <InstagramIcon className="w-4.5 h-4.5" />
                          </a>
                        )}
                        {trainer.socials.twitter && (
                          <a href={trainer.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-300">
                            <TwitterIcon className="w-4.5 h-4.5" />
                          </a>
                        )}
                        {trainer.socials.facebook && (
                          <a href={trainer.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-300">
                            <FacebookIcon className="w-4.5 h-4.5" />
                          </a>
                        )}
                      </div>
                      <Button href="/contact" variant="outline" className="text-xs px-5 py-2.5">
                        Consult 1-on-1
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
