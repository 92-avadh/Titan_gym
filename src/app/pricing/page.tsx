"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Star, HelpCircle, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS, FAQS } from '@/data/mockData';
import Button from '@/components/ui/Button';

// Features comparison dataset
const comparisonFeatures = [
  { name: "Gym Floor & Cardio Access", basic: "Full Access", pro: "Full Access", elite: "Full Access" },
  { name: "Locker Rooms & Saunas", basic: "Full Access", pro: "Full Access", elite: "Full Access" },
  { name: "Wi-Fi & Club Parking", basic: "Included", pro: "Included", elite: "Included" },
  { name: "Biomechanical Assessment", basic: "1x Upon Joining", pro: "2x Per Year", elite: "Monthly Check" },
  { name: "Unlimited Group Classes", basic: false, pro: "Included", elite: "Included" },
  { name: "1-on-1 Trainer Sessions", basic: false, pro: "2x / Month", elite: "2x / Week" },
  { name: "Custom Nutrition Mapping", basic: false, pro: "Included", elite: "Included" },
  { name: "Fuel Smoothie Bar Benefit", basic: "Standard", pro: "10% Discount", elite: "1x Daily Free" },
  { name: "Guest Pass Allowance", basic: false, pro: "1 Pass / Week", elite: "Unlimited Passes" },
  { name: "Hyperice Recovery Lounge", basic: "Day Pass Charge", pro: "Included", elite: "Included" },
  { name: "Keycard Private Locker & Laundry", basic: false, pro: false, elite: "Included" }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  // Render checkmark or dash/text for features
  const renderFeatureValue = (val: string | boolean) => {
    if (val === true) return <Check className="w-5 h-5 text-titan-blue mx-auto" />;
    if (val === false) return <X className="w-5 h-5 text-zinc-700 mx-auto" />;
    return <span className="text-xs md:text-sm font-semibold text-zinc-300">{val}</span>;
  };

  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920"
            alt="Gym kettlebells layout"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
          <span className="text-titan-red font-black tracking-widest uppercase text-xs">MEMBERSHIP ACCESS</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            MEMBERSHIP <span className="text-gradient-red-blue">PLANS</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Choose a plan tailored to your physical roadmap. Standard access to premium space and recovery facilities.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-center mb-16 gap-4">
            {/* Toggle Button */}
            <div className="inline-flex items-center bg-zinc-900 border border-white/5 rounded-full p-1.5">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  billingCycle === 'monthly' ? 'bg-titan-red text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  billingCycle === 'yearly' ? 'bg-titan-red text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Yearly Billing (-20%)
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
                      RECOMMENDED
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
                      {plan.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-titan-blue shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {plan.features.length > 5 && (
                        <li className="text-xs text-zinc-500 italic font-semibold">
                          + {plan.features.length - 5} more luxury features (see below)
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button 
                      href="/contact"
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

      {/* Comparison Table */}
      <section className="py-24 bg-zinc-950 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-titan-blue font-black tracking-widest uppercase text-xs">FEATURE MATRIX</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">PLAN COMPARISON</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Analyze detail specifications for each plan tier to locate your optimal parameters.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/5 glass">
            <table className="w-full min-w-[700px] border-collapse text-center">
              <thead>
                <tr className="border-b border-white/5 bg-zinc-900/30">
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider text-zinc-400">Amenities & Benefits</th>
                  <th className="px-6 py-5 text-sm font-black uppercase tracking-wider text-white">Basic</th>
                  <th className="px-6 py-5 text-sm font-black uppercase tracking-wider text-titan-red">Pro</th>
                  <th className="px-6 py-5 text-sm font-black uppercase tracking-wider text-titan-blue">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparisonFeatures.map((feat, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-white/1 transition-colors duration-300"
                  >
                    <td className="px-6 py-4.5 text-left font-bold text-white text-xs md:text-sm">{feat.name}</td>
                    <td className="px-6 py-4.5">{renderFeatureValue(feat.basic)}</td>
                    <td className="px-6 py-4.5 bg-titan-red/2 border-x border-white/5">{renderFeatureValue(feat.pro)}</td>
                    <td className="px-6 py-4.5">{renderFeatureValue(feat.elite)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs Accordion */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16 flex flex-col gap-4">
            <span className="text-titan-red font-black tracking-widest uppercase text-xs">TERMS & PRICING</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">PRICING FAQS</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Find answers regarding keycard access, monthly cancelation notices, corporate discounts, and trial guest passes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.slice(2, 5).map((faq) => {
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
                      <X className="w-5 h-5 text-titan-red shrink-0" />
                    ) : (
                      <HelpCircle className="w-5 h-5 text-zinc-500 shrink-0" />
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

      {/* Satisfaction Banner */}
      <section className="py-20 bg-zinc-950 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <ShieldCheck className="w-12 h-12 text-titan-blue animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            100% TRANSPARENCY GUARANTEE
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
            We pledge to never hit you with hidden maintenance fees or exit locker charges. What you see is exactly what you pay. You can pause or cancel your monthly subscriptions directly inside the app with 7-days notice.
          </p>
          <Button href="/contact" variant="primary">Schedule A Club Walkthrough</Button>
        </div>
      </section>
    </div>
  );
}
