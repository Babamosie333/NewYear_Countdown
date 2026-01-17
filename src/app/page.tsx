'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Timer, Zap, Github } from 'lucide-react';  // ✅ Added Github icon

const TimeUnit = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-cyan-500/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-8 w-20 md:w-32 h-24 md:h-40 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
          
          <AnimatePresence mode="popLayout">
            <motion.span
              key={value}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl md:text-7xl font-mono font-bold text-white tracking-tighter"
            >
              {value.toString().padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
          
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-500/50"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-500/50"></div>
        </div>
      </div>
      <span className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.3em] text-cyan-500/70 font-semibold">
        {label}
      </span>
    </div>
  );
};

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const nextYear = now.getFullYear() + 1;
      const target = new Date(`January 1, ${nextYear} 00:00:00`).getTime();
      const distance = target - now.getTime();

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-cyan-500"></div>
          <span className="text-cyan-500 text-xs font-mono tracking-[0.5em] uppercase">System Protocol</span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-cyan-500"></div>
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          NEW YEAR <span className="text-cyan-500">COUNTDOWN</span>
        </h1>
        <p className="text-white/40 font-mono text-sm tracking-widest uppercase">
          Initializing temporal sequence for {new Date().getFullYear() + 1}
        </p>
      </motion.div>

      {/* Timer Display */}
      <div className="z-10 flex flex-wrap justify-center items-center gap-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      {/* Footer Info */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="z-10 mt-16 flex flex-col items-center gap-8"
      >
        <div className="grid grid-cols-3 gap-8 md:gap-24 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-500/50" />
            <span className="text-[10px] text-white/30 font-mono uppercase tracking-tighter">Core Status: Active</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Timer className="w-4 h-4 text-cyan-500/50" />
            <span className="text-[10px] text-white/30 font-mono uppercase tracking-tighter">Sync: Atomic</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-500/50" />
            <span className="text-[10px] text-white/30 font-mono uppercase tracking-tighter">Power: Optimized</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-2"></div>
          <p className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase">
            Made by <span className="text-cyan-500/60">Vikram Singh</span>
          </p>
          {/* ✅ GITHUB LINK ADDED */}
          <motion.a
            href="https://github.com/babamosie333"  // ← CHANGE THIS
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="mt-3 group flex items-center gap-1 text-white/40 hover:text-cyan-400 transition-all duration-300"
          >
            <Github className="w-3 h-3 group-hover:animate-pulse" />
            <span className="text-[8px] font-mono tracking-tight uppercase">View Source</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
        />
      </div>
    </main>
  );
}
