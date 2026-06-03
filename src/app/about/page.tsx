"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Target, CheckCircle2, ShieldCheck, Flame, Compass, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';

const timelineMilestones = [
  {
    year: "2018",
    title: "The Inception",
    desc: "Titan Fitness was founded in a small 3,000 sq ft industrial garage by three powerlifters who were tired of commercial gym limitations."
  },
  {
    year: "2020",
    title: "Expanding The Rig",
    desc: "Moved to our current 15,000 sq ft premium headquarters. Integrated custom Eleiko, Hammer Strength, and Rogue cardio equipment."
  },
  {
    year: "2022",
    title: "The Recovery Suite",
    desc: "Launched our full-service recovery lounge, introducing cryotherapy, high-heat dry saunas, and custom cold plunge tanks."
  },
  {
    year: "2024",
    title: "The Digital Era",
    desc: "Released our dedicated mobile companion app, automating digital check-ins, custom macro mapping, and class bookings."
  },
  {
    year: "2026",
    title: "Titan Future",
    desc: "Expanding to secondary metropolitan locations, maintaining our uncompromising commitment to premium athletic training."
  }
];

const values = [
  {
    icon: Target,
    title: "Performance First",
    desc: "Every barbell, program, and meal target is optimized for absolute physiological output. We do not compromise on execution."
  },
  {
    icon: Award,
    title: "Expert Supervision",
    desc: "Our coaches carry elite certifications (NASM, RYT-500, CrossFit L3). We prioritize correct biomechanics and form above all else."
  },
  {
    icon: Flame,
    title: "Unbreakable Community",
    desc: "Titan is a sanctuary built on mutual push, grit, and support. No egos allowed—only dedication to progress."
  }
];

export default function AboutPage() {
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
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920"
            alt="Gym weight rigs"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
          <span className="text-titan-red font-black tracking-widest uppercase text-xs">OUR LEGACY & MISSION</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            WE ARE <span className="text-gradient-red-blue">TITAN</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Founded on the values of grit, science-backed biomechanics, and uncompromised athletic design. We build elite parameters for human performance.
          </p>
        </div>
      </section>

      {/* Gym Story Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-titan-blue font-black tracking-widest uppercase text-xs">THE STORY OF TITAN</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              BUILT BY ATHLETES, <br />
              FOR PERFORMANCE BUILDERS
            </h2>
            <div className="flex flex-col gap-4 text-zinc-400 text-sm md:text-base font-light leading-relaxed">
              <p>
                In 2018, Titan began in a dusty industrial garage. We only had two power racks, a set of rusty plates, and a burning desire to create a training environment that focused strictly on outcomes. We grew frustrated with comercial fitness franchises that prioritized membership volume over equipment quality and member goals.
              </p>
              <p>
                We set out to build an uncompromised playground—a premium athletic club featuring Olympic lifting platforms, specialized compound machines, and custom sports recovery lounges. Today, Titan is the premier destination for regional athletes, physique builders, and high-performance individuals who require excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="border-l-2 border-titan-red pl-4">
                <div className="text-3xl font-black text-white">15K+ SQFT</div>
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-1">Premium Equipment Area</div>
              </div>
              <div className="border-l-2 border-titan-blue pl-4">
                <div className="text-3xl font-black text-white">100% MOCK</div>
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-1">Certified Trainers</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl glass">
            <Image
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800"
              alt="Heavy barbell deadlift"
              fill
              className="object-cover opacity-90 hover:scale-102 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-zinc-950 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-titan-red font-black tracking-widest uppercase text-xs">WHAT WE VALUE</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">THE TITAN BLUEPRINT</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              We operate under a strict code of athletic performance, science-backed guidance, and supportive client-coach parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-titan-red/20 hover:-translate-y-1 transition-all duration-300 glass flex flex-col gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-titan-red/10 border border-titan-red/20 flex items-center justify-center text-titan-red">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase text-white tracking-tight mb-2">{val.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Animated Timeline Milestones */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20 flex flex-col gap-4">
            <span className="text-titan-blue font-black tracking-widest uppercase text-xs">HISTORICAL MILESTONES</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">OUR EVOLUTION TIMELINE</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Witness the key milestones that forged Titan from a small powerlifting garage to the region's top luxury club.
            </p>
          </div>

          {/* Timeline Tree */}
          <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-4 sm:ml-6 flex flex-col gap-12">
            {timelineMilestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="relative"
              >
                {/* Bullet node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-black border-2 border-titan-red shadow-[0_0_10px_rgba(255,0,60,0.8)] z-10" />

                <div className="glass bg-zinc-900/35 border border-white/5 p-6 rounded-xl relative hover:border-white/10 transition-colors duration-300">
                  <div className="text-titan-red font-black text-2xl tracking-tighter mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Accreditation Section */}
      <section className="py-24 bg-zinc-950 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-titan-red font-black tracking-widest uppercase text-xs">ACCREDITATION</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">FULLY CERTIFIED ENVIRONMENT</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Rest assured you are training in a safe, standard-compliant facility overseen by accredited athletic authorities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-titan-blue" />
              <div className="text-white font-bold text-sm uppercase tracking-wider">NSCA & NASM Certified</div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col items-center gap-4">
              <CheckCircle2 className="w-10 h-10 text-titan-red" />
              <div className="text-white font-bold text-sm uppercase tracking-wider">Olympic Rigs Approved</div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col items-center gap-4">
              <Compass className="w-10 h-10 text-titan-blue" />
              <div className="text-white font-bold text-sm uppercase tracking-wider">24/7 Card Guard Access</div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col items-center gap-4">
              <Heart className="w-10 h-10 text-titan-red" />
              <div className="text-white font-bold text-sm uppercase tracking-wider">Red Cross AED Facility</div>
            </div>
          </div>

          <div className="mt-16">
            <Button href="/contact" variant="primary">Visit Our Facility</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
