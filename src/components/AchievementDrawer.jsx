import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Trophy, Award, ExternalLink, Copy, Check, Terminal, Sparkles, Layers, FileCheck, Code2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function AchievementDrawer({ item, type, isOpen, onClose }) {
  const [copiedProof, setCopiedProof] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const isCert = type === 'certification';

  const copyProofText = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedProof(true);
    setTimeout(() => setCopiedProof(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={`Achievement Review for ${item.title}`}>
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Slide-out Liquid Glass Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative z-10 w-full max-w-xl h-full bg-[#0C121E]/95 backdrop-blur-3xl border-l border-white/30 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-white"
        >
          {/* Top Decorative Ambient Specular Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Drawer Header */}
          <div className="p-6 border-b border-white/15 flex items-start justify-between bg-white/5 backdrop-blur-xl relative z-10">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-white/30 ${
                isCert 
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white' 
                  : 'bg-gradient-to-br from-amber-500 to-orange-700 text-white'
              }`}>
                {isCert ? <ShieldCheck size={26} /> : <Trophy size={26} />}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    isCert 
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40' 
                      : 'bg-amber-500/20 text-amber-300 border-amber-400/40'
                  }`}>
                    {isCert ? 'Verified Industry Certification' : 'National Hackathon & Expo'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-cyan-300 mt-0.5">
                  {item.issuer || item.location} {item.award && `• ${item.award}`}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all border border-white/20 shrink-0"
              aria-label="Close drawer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Drawer Body Scroll Container */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6 custom-scrollbar relative z-10">
            
            {/* Verification Proof Box if Cert ID or Credly Badge exists */}
            {(item.certId || item.credlyUrl || item.proofUrl) && (
              <div className="p-4 rounded-2xl bg-black/50 border border-white/20 backdrop-blur-md shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                    <FileCheck size={14} className="text-emerald-400" /> Credential Proof & Verification
                  </span>
                  {item.certId && (
                    <button
                      onClick={() => copyProofText(item.certId)}
                      className="text-[11px] font-mono text-cyan-300 hover:text-white flex items-center gap-1 font-bold"
                    >
                      {copiedProof ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      {copiedProof ? 'Copied ID' : 'Copy Cert ID'}
                    </button>
                  )}
                </div>

                {item.certId && (
                  <div className="text-xs font-mono text-white/90 bg-white/10 p-2 rounded-xl border border-white/15 break-all">
                    Cert ID: <span className="text-cyan-200 font-bold">{item.certId}</span>
                  </div>
                )}

                {item.credlyUrl && (
                  <a
                    href={item.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 border border-cyan-400/50 text-cyan-200 hover:text-white text-xs font-bold transition-all shadow-md"
                  >
                    <Award size={14} className="text-amber-400" /> View Verified Credly Badge <ExternalLink size={13} />
                  </a>
                )}

                {item.proofUrl && !item.credlyUrl && (
                  <a
                    href={item.proofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/30 to-teal-600/30 border border-emerald-400/50 text-emerald-200 hover:text-white text-xs font-bold transition-all shadow-md"
                  >
                    <ExternalLink size={14} className="text-emerald-400" /> Open Repository / Official Proof
                  </a>
                )}
              </div>
            )}

            {/* Detailed Description Review & Deep Dive */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={14} className="text-cyan-400" /> Achievement Overview & Technical Deep Dive
              </h4>
              
              <div className="p-5 rounded-2xl liquid-glass border-white/20 text-sm text-white/90 leading-relaxed space-y-3 font-normal">
                <p>{item.desc}</p>
                {item.deepDive && (
                  <div className="pt-3 border-t border-white/15 text-xs text-white/80 leading-relaxed space-y-2 font-mono">
                    {item.deepDive.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Technologies & Competencies Cluster */}
            {item.tech && item.tech.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers size={14} className="text-purple-400" /> Technologies & Core Competencies
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t, idx) => (
                    <span key={idx} className="liquid-pill px-3 py-1 text-xs font-semibold text-white/90 shadow-sm border border-white/25">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Role & Scope Details */}
            {item.role && (
              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-between text-xs">
                <span className="text-white/70">Participation Scope:</span>
                <span className="font-bold text-amber-300">{item.role}</span>
              </div>
            )}

          </div>

          {/* Drawer Footer CTA */}
          <div className="p-5 border-t border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-between relative z-10">
            <span className="text-xs font-mono text-white/60">Verified Achievement Record</span>
            <button
              onClick={onClose}
              className="liquid-button-primary px-5 py-2 text-xs font-bold"
            >
              Close Review
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
