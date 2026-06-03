"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, Filter, CalendarCheck, HelpCircle } from 'lucide-react';
import { SCHEDULE_CLASSES } from '@/data/mockData';
import Button from '@/components/ui/Button';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const categories = ["All", "strength", "cardio", "yoga", "crossfit", "hiit"];
const timeFilters = ["All Day", "Morning", "Evening"];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTime, setSelectedTime] = useState("All Day");

  // Helper to check if a class time is morning (before 12:00 PM) or evening (after 12:00 PM)
  const matchesTimeFilter = (timeStr: string, filterVal: string) => {
    if (filterVal === "All Day") return true;
    const isAM = timeStr.includes("AM");
    const hour = parseInt(timeStr.split(":")[0]);
    
    // Simple logic: AM is morning, PM is evening
    if (filterVal === "Morning") return isAM;
    if (filterVal === "Evening") return !isAM;
    return true;
  };

  // Filter schedules
  const filteredSchedule = SCHEDULE_CLASSES.filter((item) => {
    const dayMatches = item.day === selectedDay;
    const categoryMatches = selectedCategory === "All" || item.category === selectedCategory.toLowerCase();
    const timeMatches = matchesTimeFilter(item.time, selectedTime);
    return dayMatches && categoryMatches && timeMatches;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'strength': return 'text-titan-red bg-titan-red/10 border-titan-red/20';
      case 'cardio': return 'text-titan-blue bg-titan-blue/10 border-titan-blue/20';
      case 'yoga': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'crossfit': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'hiit': return 'text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20';
      default: return 'text-white bg-white/10 border-white/20';
    }
  };

  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?q=80&w=1920"
            alt="Running track treadmill scheduling"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
          <span className="text-titan-red font-black tracking-widest uppercase text-xs">CLASS TIMETABLES</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            WEEKLY <span className="text-gradient-red-blue">SCHEDULE</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Plan your physical roadmap. Filter group training formats, CrossFit sessions, and yoga classes by day and time slot.
          </p>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Timeline Filter Panel */}
          <div className="glass bg-zinc-900/30 border border-white/5 p-6 rounded-2xl mb-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Days Tabs (Horizontal scroll on mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 scrollbar-none border-b border-white/5 lg:border-none">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 transition-all duration-300 cursor-pointer ${
                    selectedDay === day
                      ? 'bg-titan-red text-white shadow-glow-red'
                      : 'bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  {day.slice(0, 3)}
                </button>
              ))}
            </div>

            {/* Sub-Filters */}
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-start lg:justify-end">
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zinc-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-white uppercase tracking-wider focus:outline-none focus:border-titan-red cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-zinc-950 text-white">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time of Day Filter */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-zinc-500" />
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-white uppercase tracking-wider focus:outline-none focus:border-titan-red cursor-pointer"
                >
                  {timeFilters.map((t) => (
                    <option key={t} value={t} className="bg-zinc-950 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </div>

          {/* Timetable Class Grid View */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {filteredSchedule.length > 0 ? (
                <motion.div 
                  key={`${selectedDay}-${selectedCategory}-${selectedTime}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  {filteredSchedule.map((item) => (
                    <div 
                      key={item.id}
                      className="group rounded-2xl border border-white/5 bg-zinc-900/30 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-white/15 transition-all duration-300 glass"
                    >
                      {/* Time Details */}
                      <div className="flex items-center gap-3 md:w-1/4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-titan-blue">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-zinc-500 text-xxs uppercase tracking-widest font-black">Time Slot</div>
                          <div className="text-sm font-black text-white">{item.time}</div>
                        </div>
                      </div>

                      {/* Class Details */}
                      <div className="md:w-1/3">
                        <div className="flex items-center gap-2.5">
                          <span className={`text-xxs font-black uppercase tracking-wider px-2.5 py-0.5 border rounded ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                          <span className="text-xxs font-bold text-zinc-500 glass px-2 py-0.5 rounded border border-white/5">
                            {item.difficulty}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-tight text-white mt-2 group-hover:text-titan-red transition-colors duration-300">
                          {item.className}
                        </h3>
                      </div>

                      {/* Trainer Details */}
                      <div className="flex items-center gap-3 md:w-1/5">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-titan-red">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-zinc-500 text-xxs uppercase tracking-widest font-black">Master Coach</div>
                          <div className="text-sm font-bold text-white">{item.trainerName}</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="md:w-1/6 w-full text-right">
                        <Button href="/contact" variant="outline" className="w-full md:w-auto text-xs px-5 py-2.5">
                          Book Spot
                        </Button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="no-classes"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 border border-dashed border-white/5 rounded-2xl glass"
                >
                  <CalendarCheck className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">No Classes Scheduled</h3>
                  <p className="text-zinc-500 text-xs mt-1.5 max-w-sm mx-auto font-light leading-relaxed">
                    There are no classes matches your selected category or time filter on this day. Please update your filters.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Timetable disclaimer */}
      <section className="py-20 bg-zinc-950 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <HelpCircle className="w-12 h-12 text-titan-red" />
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            WANT TO REGISTER A PERSONAL SESSION?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
            1-on-1 private athlete training operates completely outside this schedule grid. You can coordinate custom timings directly with your assigned personal coach inside the app.
          </p>
          <Button href="/contact" variant="primary">Contact Master Coaches</Button>
        </div>
      </section>
    </div>
  );
}
