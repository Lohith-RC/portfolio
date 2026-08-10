import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Trophy, ShieldCheck, Award, ExternalLink, Copy, Check, 
  Sparkles, Layers, Search, ArrowRight, FileCheck, Zap, Star, Filter
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function LiquidGlassAchievementDrawer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'hackathons' | 'certifications'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedItem) setSelectedItem(null);
        else onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, selectedItem, onClose]);

  if (!isOpen) return null;

  const allHackathons = resumeData.hackathons.map(h => ({ ...h, type: 'hackathon' }));
  const allCerts = resumeData.certifications.map(c => ({ ...c, type: 'certification' }));

  let items = [];
  if (activeTab === 'all') items = [...allHackathons, ...allCerts];
  else if (activeTab === 'hackathons') items = allHackathons;
  else if (activeTab === 'certifications') items = allCerts;

  const filteredItems = items.filter(item => {
    const text = (item.title + ' ' + (item.issuer || item.location || '') + ' ' + (item.desc || '')).toLowerCase();
    return text.includes(searchQuery.toLowerCase());
  });

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10" role="dialog" aria-modal="true" aria-label="3D Liquid Glass Achievement Matrix Drawer">
        
        {/* Optical Glass Blur Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          onClick={onClose}
        />

        {/* 3D Physical Liquid Glass Emerging Container */}
        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0.82, 
            rotateX: 15, 
            rotateY: -12, 
            z: -120,
            y: 40 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotateX: 0, 
            rotateY: 0, 
            z: 0,
            y: 0 
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.85, 
            rotateX: -10, 
            rotateY: 8, 
            z: -80,
            y: 30 
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 220, 
            damping: 22,
            mass: 0.95 
          }}
          style={{ transformStyle: 'preserve-3d', perspective: '1400px' }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden text-white bg-[#0A101D]/90 backdrop-blur-3xl border border-white/35 shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_60px_rgba(6,182,212,0.25),inset_0_1.5px_2px_rgba(255,255,255,0.5)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Chromatic Refraction Edge Specular Glows */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-cyan-500/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-purple-500/25 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          {/* Modal Header */}
          <div className="px-6 py-5 border-b border-white/20 flex items-center justify-between bg-white/10 backdrop-blur-2xl relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg border border-white/40">
                <Sparkles size={24} className="animate-pulse" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight drop-shadow">
                  Hackathons & State Competitions, Verified Industry Certifications
                </h2>
                <div className="text-xs font-mono text-cyan-300">
                  Interactive iOS Liquid Glass Achievement Matrix • {filteredItems.length} Records Verified
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white flex items-center justify-center transition-all border border-white/25 shrink-0 shadow-md"
              aria-label="Close drawer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tab Navigation & Search Bar */}
          <div className="px-6 py-3.5 border-b border-white/15 bg-black/40 backdrop-blur-xl flex flex-wrap items-center justify-between gap-3 relative z-10">
            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setActiveTab('all'); setSelectedItem(null); }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md border border-cyan-400'
                    : 'liquid-pill text-white/70 hover:text-white'
                }`}
              >
                All Achievements ({allHackathons.length + allCerts.length})
              </button>
              <button
                onClick={() => { setActiveTab('hackathons'); setSelectedItem(null); }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'hackathons'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md border border-amber-400'
                    : 'liquid-pill text-white/70 hover:text-white'
                }`}
              >
                🏆 Hackathons ({allHackathons.length})
              </button>
              <button
                onClick={() => { setActiveTab('certifications'); setSelectedItem(null); }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'certifications'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md border border-emerald-400'
                    : 'liquid-pill text-white/70 hover:text-white'
                }`}
              >
                🛡️ Certifications ({allCerts.length})
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative min-w-[220px]">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Filter achievements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-white/10 border border-white/25 pl-9 pr-4 py-1.5 text-xs text-white placeholder-white/50 outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Modal Body: Split view if item selected OR grid view */}
          <div className="p-6 overflow-y-auto flex-1 custom-scrollbar relative z-10">
            
            {selectedItem ? (
              /* DEEP DIVE REVIEW VIEW FOR SELECTED ACHIEVEMENT */
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-xs font-mono text-cyan-300 hover:text-white flex items-center gap-1.5 font-bold mb-2 transition-colors"
                >
                  ← Back to All Achievements
                </button>

                {/* Main Selected Card Header */}
                <div className="p-6 rounded-3xl liquid-glass border-white/30 flex items-start justify-between flex-wrap gap-4 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-white/40 ${
                      selectedItem.type === 'certification' 
                        ? 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white' 
                        : 'bg-gradient-to-br from-amber-500 to-orange-700 text-white'
                    }`}>
                      {selectedItem.type === 'certification' ? <ShieldCheck size={32} /> : <Trophy size={32} />}
                    </div>

                    <div>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        selectedItem.type === 'certification' 
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40' 
                          : 'bg-amber-500/20 text-amber-300 border-amber-400/40'
                      }`}>
                        {selectedItem.type === 'certification' ? 'Verified Industry Certification' : 'National Hackathon & Expo'}
                      </span>

                      <h3 className="text-2xl font-bold text-white tracking-tight mt-2">
                        {selectedItem.title}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-300 mt-1">
                        {selectedItem.issuer || selectedItem.location} {selectedItem.award && `• ${selectedItem.award}`}
                      </div>
                    </div>
                  </div>

                  {selectedItem.certId && (
                    <button
                      onClick={() => copyText(selectedItem.certId)}
                      className="liquid-pill px-3.5 py-1.5 text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5"
                    >
                      {copiedId ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      {copiedId ? 'Copied ID' : `ID: ${selectedItem.certId}`}
                    </button>
                  )}
                </div>

                {/* Credential Links */}
                {(selectedItem.credlyUrl || selectedItem.proofUrl) && (
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/20 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-xs font-mono text-white/80">Official Credential Verification Link:</div>
                    <a
                      href={selectedItem.credlyUrl || selectedItem.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-button-primary px-4 py-2 text-xs font-bold inline-flex items-center gap-2"
                    >
                      <Award size={14} /> Open Verified Badge / Proof <ExternalLink size={13} />
                    </a>
                  </div>
                )}

                {/* Deep Dive Narrative */}
                <div className="p-6 rounded-3xl liquid-glass border-white/20 space-y-4">
                  <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest flex items-center gap-2">
                    <Zap size={16} /> Technical Review & Project Analysis
                  </h4>
                  <p className="text-sm text-white/95 leading-relaxed font-normal">{selectedItem.desc}</p>
                  
                  {selectedItem.deepDive && (
                    <div className="pt-4 border-t border-white/15 text-xs text-white/85 leading-relaxed space-y-3 font-mono">
                      {selectedItem.deepDive.split('\n\n').map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tech Tags */}
                {selectedItem.tech && selectedItem.tech.length > 0 && (
                  <div className="p-5 rounded-2xl liquid-glass border-white/20 space-y-3">
                    <h4 className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest flex items-center gap-2">
                      <Layers size={16} /> Technologies & Core Competencies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tech.map((t, idx) => (
                        <span key={idx} className="liquid-pill px-3 py-1 text-xs text-white/90 font-semibold shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              /* GRID LIST VIEW OF ALL ACHIEVEMENTS */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, y: -4 }}
                    onClick={() => setSelectedItem(item)}
                    className="liquid-glass-interactive p-5 border-white/25 flex flex-col justify-between cursor-pointer group hover:border-cyan-400/60 transition-all shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                          item.type === 'certification'
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                            : 'bg-amber-500/20 text-amber-300 border-amber-400/40'
                        }`}>
                          {item.type === 'certification' ? 'Certification' : 'Hackathon'}
                        </span>

                        {item.award && (
                          <span className="text-[10px] font-bold text-amber-200 bg-amber-500/25 px-2 py-0.5 rounded-full border border-amber-400/40">
                            {item.award}
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <div className="text-xs font-semibold text-cyan-300 mt-1">
                        {item.issuer || item.location}
                      </div>

                      <p className="text-xs text-white/80 mt-2 line-clamp-2 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono font-bold text-cyan-300/80 group-hover:text-cyan-300">
                      <span>Inspect Deep Dive</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-white/15 bg-white/10 backdrop-blur-2xl flex items-center justify-between relative z-10 text-xs font-mono text-white/70">
            <span>iOS Glassmorphic Physical Motion Engine</span>
            <button
              onClick={onClose}
              className="liquid-button-primary px-6 py-2 text-xs font-bold"
            >
              Close Drawer
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
