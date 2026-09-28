import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ShieldCheck, ChevronDown, ArrowRight, Award, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function AchievementAccordion({ onSelectAchievement }) {
  const [hackathonsOpen, setHackathonsOpen] = useState(true);
  const [certsOpen, setCertsOpen] = useState(true);

  return (
    <div className="space-y-6 w-full">
      
      {/* SECTION 1: HACKATHONS & COMPETITIONS */}
      <div className="minimal-card overflow-hidden">
        {/* Accordion Header */}
        <button
          onClick={() => setHackathonsOpen(!hackathonsOpen)}
          className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
          aria-expanded={hackathonsOpen}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold shrink-0">
              <Trophy size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Hackathons & State Competitions
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                National hackathons, state engineering expos & coding championships
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <span className="badge-pill font-mono text-[11px] text-amber-400/90 border-amber-500/20 bg-amber-500/10">
              {resumeData.hackathons.length} Entries
            </span>
            <div className={`p-1 rounded-md text-slate-400 transition-transform duration-200 ${
              hackathonsOpen ? 'rotate-180 text-white' : ''
            }`}>
              <ChevronDown size={18} />
            </div>
          </div>
        </button>

        {/* Accordion Body */}
        <AnimatePresence initial={false}>
          {hackathonsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-white/6"
            >
              <div className="p-5 sm:p-6 space-y-3">
                {resumeData.hackathons.map((h, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectAchievement(h, 'hackathon')}
                    className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/6 hover:border-amber-500/30 transition-all cursor-pointer group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold text-slate-200 group-hover:text-amber-300 transition-colors">
                        {h.title}
                      </h4>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {h.award}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-cyan-400/90 mt-1">
                      {h.role} • {h.location}
                    </div>

                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {h.desc}
                    </p>

                    <div className="mt-3 flex items-center gap-1 text-[11px] font-mono text-slate-400 group-hover:text-amber-300 transition-colors">
                      <span>View details & stack</span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SECTION 2: VERIFIED CERTIFICATIONS */}
      <div className="minimal-card overflow-hidden">
        {/* Accordion Header */}
        <button
          onClick={() => setCertsOpen(!certsOpen)}
          className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
          aria-expanded={certsOpen}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Verified Industry Credentials
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Cisco CyberOps, CCNA Series, IBM AI, & Algorithmic Camps
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <span className="badge-pill font-mono text-[11px] text-cyan-400/90 border-cyan-500/20 bg-cyan-500/10">
              {resumeData.certifications.length} Credentials
            </span>
            <div className={`p-1 rounded-md text-slate-400 transition-transform duration-200 ${
              certsOpen ? 'rotate-180 text-white' : ''
            }`}>
              <ChevronDown size={18} />
            </div>
          </div>
        </button>

        {/* Accordion Body */}
        <AnimatePresence initial={false}>
          {certsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-white/6"
            >
              <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resumeData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectAchievement(cert, 'certification')}
                    className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/6 hover:border-cyan-500/30 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <div className="text-[11px] font-mono text-cyan-400/80 mt-1">
                        {cert.issuer}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                        {cert.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/6 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>Verified Badge</span>
                      <ArrowRight size={10} className="group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
