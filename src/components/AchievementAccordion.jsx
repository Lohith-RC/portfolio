import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ShieldCheck, ChevronDown, Sparkles, ArrowRight, ExternalLink, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function AchievementAccordion({ onSelectAchievement }) {
  const [hackathonsOpen, setHackathonsOpen] = useState(false);
  const [certsOpen, setCertsOpen] = useState(false);

  return (
    <div className="space-y-8 w-full">
      
      {/* ACCORDION 1: HACKATHONS & STATE COMPETITIONS */}
      <div className="relative">
        {/* Accordion Toggle Header Button */}
        <motion.button
          whileHover={{ scale: 1.01, y: -2 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setHackathonsOpen(!hackathonsOpen)}
          className={`w-full p-5 rounded-3xl liquid-glass border transition-all duration-300 flex items-center justify-between group shadow-xl ${
            hackathonsOpen 
              ? 'border-amber-400/80 bg-amber-500/10 shadow-[0_15px_40px_rgba(245,158,11,0.25)]' 
              : 'border-white/30 hover:border-amber-400/50'
          }`}
          aria-expanded={hackathonsOpen}
        >
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center text-white font-bold shadow-md border border-white/30 shrink-0">
              <Trophy size={22} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                Hackathons & State Competitions
              </h3>
              <div className="text-xs text-white/70 mt-0.5 font-medium">
                National hackathons, state expos & institutional coding challenges
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="liquid-pill px-3 py-1 text-xs font-mono font-bold text-amber-300 border-amber-400/40">
              {resumeData.hackathons.length} Records
            </span>
            <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-transform duration-300 ${
              hackathonsOpen ? 'rotate-180 bg-amber-500/30 text-amber-300' : ''
            }`}>
              <ChevronDown size={18} />
            </div>
          </div>
        </motion.button>

        {/* Vertical Flow / Hanging Cascade Container */}
        <AnimatePresence>
          {hackathonsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 pl-6 sm:pl-8 border-l-2 border-amber-400/40 ml-7 space-y-4">
                {resumeData.hackathons.map((h, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    onClick={() => onSelectAchievement(h, 'hackathon')}
                    className="liquid-glass-interactive p-5 border-l-4 border-l-amber-400 border-white/25 cursor-pointer group hover:border-amber-300 transition-all shadow-lg rounded-2xl relative"
                  >
                    {/* Horizontal Connector Line to Main Stem */}
                    <div className="absolute -left-[25px] sm:-left-[33px] top-1/2 -translate-y-1/2 w-6 h-[2px] bg-amber-400/40" />

                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {h.title}
                      </h4>
                      <span className="text-[11px] font-bold text-amber-200 bg-amber-500/30 border border-amber-400/50 px-2.5 py-0.5 rounded-full shrink-0">
                        {h.award}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-cyan-300 mt-1">
                      {h.role} ({h.location})
                    </div>
                    <p className="text-xs text-white/80 mt-2 leading-relaxed font-normal">
                      {h.desc}
                    </p>

                    <div className="mt-3 text-[11px] font-mono font-bold text-amber-300/80 group-hover:text-amber-300 flex items-center gap-1 transition-colors">
                      <span>Inspect Deep Dive & Tech Specs</span> <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ACCORDION 2: VERIFIED INDUSTRY CERTIFICATIONS */}
      <div className="relative">
        {/* Accordion Toggle Header Button */}
        <motion.button
          whileHover={{ scale: 1.01, y: -2 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setCertsOpen(!certsOpen)}
          className={`w-full p-5 rounded-3xl liquid-glass border transition-all duration-300 flex items-center justify-between group shadow-xl ${
            certsOpen 
              ? 'border-emerald-400/80 bg-emerald-500/10 shadow-[0_15px_40px_rgba(16,185,129,0.25)]' 
              : 'border-white/30 hover:border-emerald-400/50'
          }`}
          aria-expanded={certsOpen}
        >
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold shadow-md border border-white/30 shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                Verified Industry Certifications
              </h3>
              <div className="text-xs text-white/70 mt-0.5 font-medium">
                Cisco Networking Academy, CyberOps Associate & IBM SkillsBuild AI
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="liquid-pill px-3 py-1 text-xs font-mono font-bold text-emerald-300 border-emerald-400/40">
              {resumeData.certifications.length} Certified
            </span>
            <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-transform duration-300 ${
              certsOpen ? 'rotate-180 bg-emerald-500/30 text-emerald-300' : ''
            }`}>
              <ChevronDown size={18} />
            </div>
          </div>
        </motion.button>

        {/* Vertical Flow / Hanging Cascade Container */}
        <AnimatePresence>
          {certsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 pl-6 sm:pl-8 border-l-2 border-emerald-400/40 ml-7 space-y-3">
                {resumeData.certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    onClick={() => onSelectAchievement(cert, 'certification')}
                    className="liquid-glass-interactive p-4 border-white/25 flex items-start justify-between gap-3 hover:border-emerald-400/60 transition-all cursor-pointer group rounded-2xl relative shadow-lg"
                  >
                    {/* Horizontal Connector Line to Main Stem */}
                    <div className="absolute -left-[25px] sm:-left-[33px] top-1/2 -translate-y-1/2 w-6 h-[2px] bg-emerald-400/40" />

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">{cert.title}</h4>
                        <div className="text-xs font-bold text-emerald-300">{cert.issuer}</div>
                        <p className="text-xs text-white/75 mt-1 font-medium line-clamp-2">{cert.desc}</p>
                      </div>
                    </div>

                    <div className="shrink-0 text-[11px] font-mono font-bold text-emerald-300/80 group-hover:text-emerald-300 flex items-center gap-0.5 transition-colors self-center">
                      <span>Review ID</span> <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
