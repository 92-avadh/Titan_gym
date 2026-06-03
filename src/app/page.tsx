"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { 
  STATS, 
  PROGRAMS, 
  TRAINERS, 
  PRICING_PLANS, 
  TESTIMONIALS, 
  FAQS, 
  GALLERY_ITEMS 
} from '@/data/mockData';
import Button from '@/components/ui/Button';
import StatsCounter from '@/components/ui/StatsCounter';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { InstagramIcon, TwitterIcon } from '@/components/ui/SocialIcons';

// Helper to render dynamic Lucide Icons
const LucideIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Dumbbell className={className} />;
  return <IconComponent className={className} />;
};

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-20">
        {/* Parallax/Full-bleed Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920"
            alt="Premium Gym Interior"
            fill
            priority
            className="object-cover opacity-45 transform scale-105"
          />
          {/* Radial Dark Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-dark-radial" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start gap-6">
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-titan-red/10 border border-titan-red/30 px-4 py-1.5 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-titan-red animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-titan-red uppercase">THE ULTIMATE TRAINING SANCTUARY</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white uppercase"
            >
              FORGE YOUR <br className="hidden md:inline" />
              <span className="text-gradient-red-blue">LEGENDARY</span> PHYSIQUE
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed"
            >
              Titan Fitness Club is a luxury athletic environment designed for high-performance builders, athletes, and professionals. Elite equipment, personalized recovery, and master level trainers.
            </motion.p>

            {/* Price tag & CTA row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-4"
            >
              <div className="flex gap-4">
                <Button href="/pricing" variant="primary">Join Now</Button>
                <Button href="/contact" variant="outline">Book Free Trial</Button>
              </div>
              <div className="text-sm font-semibold text-zinc-400">
                Memberships starting at <span className="text-titan-blue font-bold">$29/mo</span>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mt-8 border-t border-white/10 pt-8 w-full"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-titan-red">
                  <Icons.Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">5,000+</div>
                  <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Members</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-titan-blue">
                  <Icons.Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">Certified</div>
                  <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Master Trainers</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-white">
                  <Icons.Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">Open 24/7</div>
                  <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Full Access</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Featured Stats Section */}
      <section className="relative bg-zinc-950 border-y border-white/5 py-12 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/5">
            {STATS.map((stat, index) => (
              <div key={stat.label} className={`flex flex-col justify-center ${index > 1 ? 'pt-6 lg:pt-0' : 'pt-0'} ${index === 1 ? 'pt-6 sm:pt-0' : ''}`}>
                <div className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
                  <StatsCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm font-bold tracking-widest text-zinc-500 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Programs Section */}
      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-titan-red/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-titan-red font-black tracking-widest uppercase text-xs">WHAT WE OFFER</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">ELITE TRAINING PROGRAMS</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Unlock your maximum capability. Our signature classes are specifically designed to yield absolute aesthetic results and peak operational capacity.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROGRAMS.map((program) => (
              <motion.div
                key={program.id}
                variants={fadeInUp}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/5 p-6 flex flex-col justify-between hover:border-titan-red/30 transition-all duration-500 glass hover:-translate-y-1"
              >
                {/* Background image hover */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-6">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-titan-red/10 border border-titan-red/20 flex items-center justify-center text-titan-red group-hover:bg-titan-red group-hover:text-white transition-all duration-500">
                      <LucideIcon name={program.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-zinc-500 tracking-wider glass px-2.5 py-1 rounded-md border border-white/5">
                      {program.difficulty}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-titan-red transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {program.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-zinc-500">
                  <span>Duration: {program.duration}</span>
                  <Link 
                    href="/programs" 
                    className="text-titan-blue font-bold tracking-wider hover:underline flex items-center gap-1 group-hover:text-white transition-colors duration-300"
                  >
                    Details <Icons.ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Before/After Transformation Slider Section */}
      <section className="py-24 bg-zinc-950 border-y border-white/5 relative">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-titan-blue/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
            <span className="text-titan-blue font-black tracking-widest uppercase text-xs">PROVEN RESULTS</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
              REAL RESULTS. <br />
              REAL STORIES.
            </h2>
            <p className="text-zinc-400 leading-relaxed font-light">
              Watch what dedication yields. Our members work systematically alongside expert coaches to rewrite their physical blueprints. Take control of your habits and witness the evolution.
            </p>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 glass">
              <div className="text-titan-red font-black text-2xl uppercase tracking-tighter mb-1">
                -24 lbs & +8% Muscle
              </div>
              <p className="text-zinc-400 text-sm italic">
                &ldquo;Combining precision macro coaching with compound strength training at Titan completely overhauled my body recomposition in just 12 weeks.&rdquo;
              </p>
              <div className="mt-4 font-bold text-sm text-white">- Johnathan Miller, Member</div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            {/* Transforming Slider */}
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800"
              afterImage="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800"
              beforeLabel="WEEK 01"
              afterLabel="WEEK 12"
            />
          </div>
        </div>
      </section>

      {/* 5. Trainers Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col gap-4 max-w-xl">
              <span className="text-titan-red font-black tracking-widest uppercase text-xs">ELITE TEAM</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">MEET THE MASTER COACHES</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                Learn from certified specialists who have guided Olympians, professional builders, and casual gym-goers to peak parameters.
              </p>
            </div>
            <Button href="/trainers" variant="outline">View All Trainers</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRAINERS.map((trainer) => (
              <div 
                key={trainer.id}
                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/40 p-4 transition-all duration-500 hover:border-titan-blue/30 glass flex flex-col"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl mb-4">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 glass px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border border-white/10 text-white">
                    <Icons.Star className="w-3.5 h-3.5 fill-titan-red text-titan-red" />
                    <span>{trainer.rating}</span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-xs font-bold text-titan-blue uppercase tracking-widest">
                      {trainer.specialty}
                    </span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight mt-1 mb-2">
                      {trainer.name}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                      {trainer.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-zinc-500 font-medium">Exp: {trainer.experience}</span>
                    <div className="flex gap-3">
                      {trainer.socials.instagram && (
                        <a href={trainer.socials.instagram} className="text-zinc-400 hover:text-white transition-colors duration-300">
                          <InstagramIcon className="w-4 h-4" />
                        </a>
                      )}
                      {trainer.socials.twitter && (
                        <a href={trainer.socials.twitter} className="text-zinc-400 hover:text-white transition-colors duration-300">
                          <TwitterIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Membership Plans (Pricing) */}
      <section className="py-24 bg-zinc-950 border-y border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-titan-red/5 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
            <span className="text-titan-blue font-black tracking-widest uppercase text-xs">MEMBERSHIP PLANS</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">TRANSPARENT PRICING</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              No hidden fees, no lock-in contracts. Choose the subscription model that works for your long-term roadmap.
            </p>

            {/* Toggle Button */}
            <div className="inline-flex items-center bg-zinc-900 border border-white/5 rounded-full p-1.5 mt-4">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  billingCycle === 'monthly' ? 'bg-titan-red text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  billingCycle === 'yearly' ? 'bg-titan-red text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Yearly (-20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const price = billingCycle === 'monthly' ? plan.priceMonthly : Math.floor(plan.priceYearly / 12);
              return (
                <div
                  key={plan.id}
                  className={`group relative rounded-2xl flex flex-col justify-between p-8 border transition-all duration-500 hover:-translate-y-1 ${
                    plan.isPopular 
                      ? 'border-titan-red bg-zinc-900/60 shadow-[0_0_30px_rgba(255,0,60,0.1)]'
                      : 'border-white/5 bg-zinc-900/30 hover:border-white/15'
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-titan-red text-white font-black tracking-widest text-xxs uppercase px-4 py-1.5 rounded-full border border-black shadow-lg">
                      MOST POPULAR
                    </span>
                  )}

                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-white">{plan.name}</h3>
                      <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed">{plan.description}</p>
                    </div>

                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-sm font-bold text-zinc-400">$</span>
                      <span className="text-5xl font-black text-white tracking-tighter">
                        {price}
                      </span>
                      <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider ml-1">/ Month</span>
                    </div>

                    {billingCycle === 'yearly' && (
                      <div className="text-xs text-titan-blue font-bold tracking-wide">
                        Billed annually (${plan.priceYearly}/yr)
                      </div>
                    )}

                    <ul className="flex flex-col gap-3.5 mt-4 pt-6 border-t border-white/5 text-sm font-medium text-zinc-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Icons.Check className="w-4 h-4 text-titan-blue shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button 
                      href="/pricing"
                      variant={plan.isPopular ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {plan.ctaText}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Mobile App Promo */}
      <section className="py-24 bg-black overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-titan-red/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
            <span className="text-titan-red font-black tracking-widest uppercase text-xs">COMPANION APP</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
              YOUR FITNESS HUB, <br />
              IN YOUR POCKET.
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Download the exclusive Titan Member app to book masterclasses, track workout targets, monitor body fat stats, view dietary blueprints, and unlock the club keycard entry.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm font-semibold text-zinc-200 mt-2">
              <li className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-titan-red/10 border border-titan-red/20 flex items-center justify-center text-titan-red">
                  <Icons.Key className="w-3.5 h-3.5" />
                </div>
                <span>Digital Locker Keycard Access</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-titan-red/10 border border-titan-red/20 flex items-center justify-center text-titan-red">
                  <Icons.Calendar className="w-3.5 h-3.5" />
                </div>
                <span>Book 1-on-1 Trainer Slots</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-titan-red/10 border border-titan-red/20 flex items-center justify-center text-titan-red">
                  <Icons.Apple className="w-3.5 h-3.5" />
                </div>
                <span>Sync Apple Health & FitBit</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-titan-red/10 border border-titan-red/20 flex items-center justify-center text-titan-red">
                  <Icons.TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span>Log Weekly Weight Metrics</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
              <Link href="#" className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=250"
                  alt="App Store download link Mockup"
                  width={150}
                  height={50}
                  className="rounded-lg object-contain border border-white/10"
                />
              </Link>
              <div className="text-zinc-500 self-center text-xs font-semibold uppercase tracking-wider">
                *App Store & Google Play
              </div>
            </div>
          </div>

          {/* Fake Phone Screen Visuals */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="absolute w-72 h-72 rounded-full bg-titan-blue/10 blur-3xl" />
            <div className="relative w-64 h-[500px] bg-zinc-900 border-[8px] border-zinc-800 rounded-[40px] shadow-2xl overflow-hidden glass">
              {/* Speaker & camera dot */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              </div>

              {/* App Screen mock UI */}
              <div className="h-full flex flex-col justify-between p-5 pt-8 text-white relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <div className="text-zinc-500 text-xxs uppercase tracking-widest font-black">Member Profile</div>
                    <div className="text-sm font-black">Alex Rivera</div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-titan-red bg-zinc-800 overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100"
                      alt="avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Dashboard Rings */}
                <div className="bg-black/50 border border-white/5 rounded-2xl p-4 my-2 text-center">
                  <div className="text-xxs uppercase font-black text-zinc-500 tracking-wider">Calories Burned Today</div>
                  <div className="text-3xl font-black text-gradient-red-blue my-1">682 <span className="text-xs font-medium text-zinc-400">kcal</span></div>
                  <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-titan-red to-titan-blue h-full w-[70%]" />
                  </div>
                  <div className="flex justify-between text-xxs text-zinc-500 mt-2 font-bold uppercase">
                    <span>Goal: 900</span>
                    <span>75% Done</span>
                  </div>
                </div>

                {/* Next Class */}
                <div className="bg-black/50 border border-white/5 rounded-2xl p-4 my-1 flex items-center justify-between">
                  <div>
                    <div className="text-xxs uppercase font-black text-titan-blue tracking-wider">Next Class</div>
                    <div className="text-xs font-bold mt-0.5">CrossFit WOD</div>
                    <div className="text-xxs text-zinc-500 font-semibold">Today @ 7:00 PM</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-titan-blue/10 flex items-center justify-center text-titan-blue border border-titan-blue/20">
                    <Icons.Zap className="w-4 h-4" />
                  </div>
                </div>

                {/* Digital Keycard */}
                <div className="bg-gradient-to-r from-titan-red to-titan-red-hover rounded-2xl p-4 text-center mt-2 flex flex-col items-center gap-1 cursor-pointer shadow-lg">
                  <Icons.Key className="w-5 h-5 text-white" />
                  <div className="text-xs font-black uppercase tracking-wider text-white">Tap to Scan Entry</div>
                  <div className="text-xxs text-white/70 font-semibold">Hold near club scanner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-24 bg-zinc-950 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-titan-red font-black tracking-widest uppercase text-xs">MEMBER REVIEW STATUS</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">TESTIMONIALS</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Hear what our elite community has to say about their performance transformation, gym environments, and recovery facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div 
                key={review.id}
                className="group relative rounded-2xl border border-white/5 bg-zinc-900/40 p-6 flex flex-col justify-between glass"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icons.Star key={i} className="w-4 h-4 fill-titan-red text-titan-red" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic">
                    &ldquo;{review.review}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-tight">{review.name}</h4>
                    <span className="text-zinc-500 text-xs font-semibold">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Accordion FAQs */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16 flex flex-col gap-4">
            <span className="text-titan-blue font-black tracking-widest uppercase text-xs">HAVE QUESTIONS?</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Find answer metrics regarding club amenities, trainers, cancelation parameters, and free trial trials.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="rounded-xl border border-white/5 bg-zinc-900/20 overflow-hidden transition-colors duration-300 hover:border-white/10 glass"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-white hover:text-titan-red transition-colors duration-300 uppercase tracking-wide text-sm md:text-base cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <Icons.Minus className="w-5 h-5 text-titan-red shrink-0" />
                    ) : (
                      <Icons.Plus className="w-5 h-5 text-zinc-500 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. CTA Banner */}
      <section className="relative py-28 overflow-hidden bg-black text-center border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920"
            alt="Gym weight lifting bar focus"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-titan-red/10 via-transparent to-titan-blue/10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
          <span className="text-titan-red font-black tracking-widest uppercase text-xs">START YOUR EVOLUTION</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
            REWRITE YOUR <br />
            PHYSICAL LIMITATIONS
          </h2>
          <p className="text-zinc-300 text-base md:text-lg max-w-xl font-light">
            Claim your 1-day complimentary VIP trial. Step inside the absolute peak parameters of modern fitness.
          </p>
          <div className="flex gap-4 mt-2">
            <Button href="/pricing" variant="primary">Claim Trial Pass</Button>
            <Button href="/contact" variant="outline">Contact Club</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
