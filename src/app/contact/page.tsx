"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';
import { InstagramIcon, TwitterIcon, FacebookIcon } from '@/components/ui/SocialIcons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'weight-training',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: 'weight-training',
      message: ''
    });
    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920"
            alt="Gym weights and machines"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
          <span className="text-titan-red font-black tracking-widest uppercase text-xs">CONNECT WITH US</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            CONTACT <span className="text-gradient-red-blue">TITAN</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Ready to rewrite your limits? Contact our team, book a free guest trial, or schedule a tour.
          </p>
        </div>
      </section>

      {/* Grid Layout Form & Cards */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info Cards & Hours */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-titan-blue font-black tracking-widest uppercase text-xs">CLUB DIRECTORY</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white">GET IN TOUCH</h2>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                Have questions about our recovery lounge, corporate memberships, or trainers? Reach out directly.
              </p>
            </div>

            {/* Quick Cards */}
            <div className="flex flex-col gap-4">
              
              {/* Phone */}
              <div className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5 flex items-center gap-4 glass">
                <div className="w-10 h-10 rounded-xl bg-titan-red/10 border border-titan-red/20 flex items-center justify-center text-titan-red shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xxs text-zinc-500 font-black uppercase tracking-widest">Telephone</div>
                  <a href="tel:+18005558482" className="text-sm font-bold text-white hover:text-titan-red transition-colors duration-300">+1 (800) 555-TITN</a>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5 flex items-center gap-4 glass">
                <div className="w-10 h-10 rounded-xl bg-titan-blue/10 border border-titan-blue/20 flex items-center justify-center text-titan-blue shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xxs text-zinc-500 font-black uppercase tracking-widest">Email Address</div>
                  <a href="mailto:membership@titanfitness.com" className="text-sm font-bold text-white hover:text-titan-blue transition-colors duration-300">membership@titanfitness.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5 flex items-center gap-4 glass">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xxs text-zinc-500 font-black uppercase tracking-widest">Club Location</div>
                  <span className="text-sm font-bold text-white">100 Performance Way, Iron District, CA</span>
                </div>
              </div>

              {/* Staffed Hours */}
              <div className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5 flex items-center gap-4 glass">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="w-full">
                  <div className="text-xxs text-zinc-500 font-black uppercase tracking-widest">Staffed Hours</div>
                  <div className="flex justify-between text-xs font-semibold text-white mt-1">
                    <span>Mon - Fri:</span>
                    <span>06:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-white">
                    <span>Sat - Sun:</span>
                    <span>08:00 AM - 08:00 PM</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Follow Titan Socials</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center hover:border-titan-red hover:text-titan-red transition-all duration-300">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center hover:border-titan-blue hover:text-titan-blue transition-all duration-300">
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center hover:border-titan-red hover:text-titan-red transition-all duration-300">
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact/Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass bg-zinc-900/40 border border-white/5 p-8 rounded-3xl relative">
              
              <div className="flex flex-col gap-2 mb-8">
                <span className="text-titan-red font-black tracking-widest uppercase text-xs">FREE PASS ACTIVATION</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">BOOK FREE VIP TRIAL</h3>
                <p className="text-zinc-400 font-light text-sm">
                  Fill in your details below and immediately receive a digital guest pass valid for a 24-hour training block.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-titan-blue/10 border border-titan-blue/30 text-center flex flex-col items-center gap-4 glass">
                  <div className="w-16 h-16 rounded-full bg-titan-blue/20 border border-titan-blue/30 flex items-center justify-center text-titan-blue">
                    <MessageSquare className="w-8 h-8 animate-pulse" />
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight">GUEST PASS ISSUED!</h4>
                  <p className="text-zinc-300 text-sm max-w-md font-light leading-relaxed">
                    Check your email inbox. We have issued your unique QR check-in entry pass. Present it at the scanner within 7 days. See you on the floor!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Rivera"
                      className="bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-titan-red focus:ring-1 focus:ring-titan-red transition-all duration-300"
                    />
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-titan-red focus:ring-1 focus:ring-titan-red transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834"
                        className="bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-titan-red focus:ring-1 focus:ring-titan-red transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Program Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Preferred Program</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-titan-red transition-all duration-300 cursor-pointer"
                    >
                      <option value="weight-training">Weight Training & Muscle Hypertrophy</option>
                      <option value="fat-loss">Fat Loss & Conditioning Shred</option>
                      <option value="crossfit">CrossFit / Functional Athletics</option>
                      <option value="yoga">Yoga & Balance Restoration</option>
                      <option value="personal">Elite 1-on-1 Trainer Session</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Your Message / Fitness Goals</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your fitness targets..."
                      className="bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-titan-red focus:ring-1 focus:ring-titan-red transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-4 mt-2">
                    Submit Request & Issue QR Pass
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Dark Theme Google Maps Embed */}
      <section className="relative w-full h-[450px] border-t border-white/5 overflow-hidden">
        {/* Absolute mapping container */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d-122.4194155!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807bedb1a64f%3A0x63351ec94fb11ef7!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1565305096582!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen={false}
          loading="lazy"
          title="Titan Fitness Location Map"
          className="border-0 opacity-80"
          style={{ filter: "invert(90%) hue-rotate(180deg) contrast(120%) brightness(85%)" }}
        />
        {/* Glowing glass overlay on top of map borders */}
        <div className="absolute top-4 left-4 glass bg-black/75 px-4 py-3.5 rounded-xl border border-white/10 max-w-xs">
          <div className="text-white font-bold text-sm uppercase">Titan Fitness Club HQ</div>
          <div className="text-zinc-400 text-xs mt-1 leading-relaxed">
            100 Performance Way, Iron District, CA 94103
          </div>
          <div className="text-titan-blue font-bold text-xxs uppercase tracking-widest mt-2">
            Free Dedicated Parking
          </div>
        </div>
      </section>
    </div>
  );
}
