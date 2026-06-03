"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { PROGRAMS } from '@/data/mockData';
import Button from '@/components/ui/Button';

// Helper to render dynamic Lucide Icons
const LucideIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Dumbbell className={className} />;
  return <IconComponent className={className} />;
};

export default function ProgramsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920"
            alt="Workout gym equipment focus"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
          <span className="text-titan-red font-black tracking-widest uppercase text-xs">WHAT WE PROGRAM</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            TRAINING <span className="text-gradient-red-blue">PROGRAMS</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Scientifically structured workout systems designed to build muscle tissue, optimize cardiovascular thresholds, and restore athletic flexibility.
          </p>
        </div>
      </section>

      {/* Programs List - Alternating Sections */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-28">
          {PROGRAMS.map((program, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={program.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Image Area */}
                <div className={`lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl glass ${
                  !isEven ? 'lg:order-2' : ''
                }`}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover opacity-85 hover:scale-102 transition-transform duration-500"
                  />
                  {/* Badges overlaid */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="glass bg-black/60 text-white border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <Icons.Clock className="w-3.5 h-3.5 text-titan-blue" />
                      {program.duration}
                    </span>
                    <span className="glass bg-black/60 text-white border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <Icons.Flame className="w-3.5 h-3.5 text-titan-red" />
                      {program.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className={`lg:col-span-6 flex flex-col gap-6 ${
                  !isEven ? 'lg:order-1' : ''
                }`}>
                  {/* Header row */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-titan-red/10 border border-titan-red/20 flex items-center justify-center text-titan-red">
                      <LucideIcon name={program.icon} className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                      {program.title}
                    </h2>
                  </div>

                  <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                    {program.longDesc}
                  </p>

                  {/* Benefits grid */}
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Key Training Benefits:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300 font-medium">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icons.CheckCircle2 className="w-4 h-4 text-titan-blue shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trainer & Schedule Card */}
                  <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 glass grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <div className="text-xxs text-zinc-500 font-black uppercase tracking-widest">Head Specialist</div>
                      <div className="text-sm font-bold text-white mt-1 flex items-center gap-1.5">
                        <Icons.UserCheck className="w-4 h-4 text-titan-red" />
                        {program.trainer}
                      </div>
                    </div>
                    <div>
                      <div className="text-xxs text-zinc-500 font-black uppercase tracking-widest">Typical Schedule</div>
                      <div className="text-sm font-bold text-white mt-1 flex items-center gap-1.5">
                        <Icons.Calendar className="w-4 h-4 text-titan-blue" />
                        {program.schedule.split(" - ")[0]}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <Button href="/pricing" variant="primary">Book Class Session</Button>
                    <Button href="/schedule" variant="outline">View Timetable</Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quick FAQ banner */}
      <section className="py-20 bg-zinc-950 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <Icons.HelpCircle className="w-12 h-12 text-titan-blue" />
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            NOT SURE WHICH PROGRAM IS FOR YOU?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
            Get a completely free 1-on-1 movement screening and consult with a master trainer to design a program suited specifically to your joints and targets.
          </p>
          <Button href="/contact" variant="primary">Schedule Consultation</Button>
        </div>
      </section>
    </div>
  );
}
