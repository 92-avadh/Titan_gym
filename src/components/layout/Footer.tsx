"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Dumbbell, Mail, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { InstagramIcon, TwitterIcon, FacebookIcon } from '@/components/ui/SocialIcons';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Mock subscription
    setSubmitted(true);
    setEmail('');
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-titan-red/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-titan-blue/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Branding Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-titan-red to-titan-blue flex items-center justify-center shadow-glow-red">
              <Dumbbell className="w-5 h-5 text-white transform -rotate-45" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase">
              TITAN<span className="text-titan-blue">.</span>
            </span>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed">
            The premium training environment for athletes, builders, and professionals. Elite equipment, world-class coaching, and dynamic programming.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 hover:border-titan-red flex items-center justify-center hover:text-titan-red transition-colors duration-300">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 hover:border-titan-blue flex items-center justify-center hover:text-titan-blue transition-colors duration-300">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 hover:border-titan-red flex items-center justify-center hover:text-titan-red transition-colors duration-300">
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6 lg:pl-8">
          <h3 className="text-white font-bold uppercase tracking-wider text-sm">Navigation</h3>
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li>
              <Link href="/about" className="text-zinc-400 hover:text-titan-red transition-colors duration-300">About Us</Link>
            </li>
            <li>
              <Link href="/programs" className="text-zinc-400 hover:text-titan-red transition-colors duration-300">Programs</Link>
            </li>
            <li>
              <Link href="/trainers" className="text-zinc-400 hover:text-titan-red transition-colors duration-300">Our Trainers</Link>
            </li>
            <li>
              <Link href="/schedule" className="text-zinc-400 hover:text-titan-red transition-colors duration-300">Class Schedule</Link>
            </li>
            <li>
              <Link href="/pricing" className="text-zinc-400 hover:text-titan-red transition-colors duration-300">Memberships</Link>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold uppercase tracking-wider text-sm">Operating Hours</h3>
          <ul className="flex flex-col gap-3 text-sm text-zinc-400">
            <li className="flex justify-between border-b border-white/5 pb-1">
              <span>Gym Access:</span>
              <span className="text-white font-semibold">24/7/365</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-1">
              <span>Staffed Hours:</span>
              <span>06:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-1">
              <span>Personal Training:</span>
              <span>By Appointment</span>
            </li>
            <li className="flex justify-between">
              <span> Smoothie Bar:</span>
              <span>07:00 AM - 09:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Form */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold uppercase tracking-wider text-sm">Join The Newsletter</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Get exclusive fitness tips, early masterclass bookings, and promotional rates.
          </p>
          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-full py-3.5 pl-5 pr-12 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-titan-red transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 w-10 h-10 rounded-full bg-titan-red text-white flex items-center justify-center hover:bg-titan-red-hover transition-colors duration-300 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          {submitted && (
            <p className="text-titan-blue text-xs font-bold animate-pulse">
              ✓ Successfully subscribed! Check your inbox soon.
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Titan Fitness Club. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link href="/contact" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
