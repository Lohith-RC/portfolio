import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Trophy, ExternalLink, Copy, Check, FileCheck, Layers, Sparkles } from 'lucide-react';

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
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Minimalist Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative z-10 w-full max-w-lg h-full bg-white border-l border-stone-200 shadow-2xl flex flex-col overflow-hidden text-stone-800"
        >
          {/* Header */}
          <div className="p-6 border-b border-stone-100 flex items-start justify-between bg-stone-50/60">
            <div className="flex items-start gap-3.5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                isCert 
                  ? 'bg-blue-50 text-blue-700 border-blue-200' 
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}>
                {isCert ? <ShieldCheck size={22} /> : <Trophy size={22} />}
              </div>

              <div>
                <span className={`text-[10px] font-mono font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                  isCert 
                    ? 'bg-blue-50 text-blue-800 border-blue-200' 
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}>
                  {isCert ? 'Verified Credential' : 'Hackathon Milestone'}
                </span>

                <h3 className="text-lg font-bold text-stone-900 mt-1.5 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-stone-500 mt-0.5">
                  {item.issuer || item.location} {item.award && `• ${item.award}`}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Close drawer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            
            {/* Proof Box */}
            {(item.certId || item.credlyUrl || item.proofUrl) && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-stone-700 flex items-center gap-1.5">
                    <FileCheck size={14} className="text-blue-600" />
                    Verification & Proof of Authenticity
                  </span>
                  {item.certId && (
                    <button
                      onClick={() => copyProofText(item.certId)}
                      className="text-[11px] font-mono text-blue-700 hover:underline flex items-center gap-1"
                      title="Copy Credential ID"
                    >
                      {copiedProof ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                      {copiedProof ? 'Copied' : 'Copy ID'}
                    </button>
                  )}
                </div>

                {item.certId && (
                  <div className="font-mono text-xs bg-white p-2.5 rounded-lg border border-stone-200 text-stone-900 break-all select-all mb-2.5 shadow-sm">
                    {item.certId}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {item.credlyUrl && (
                    <a
                      href={item.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-radiant-primary text-xs py-1.5 px-3"
                    >
                      <Sparkles size={12} />
                      Verify on Credly
                      <ExternalLink size={12} />
                    </a>
                  )}

                  {item.proofUrl && item.proofUrl !== '#' && !item.credlyUrl && (
                    <a
                      href={item.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glass-tactile text-xs py-1.5 px-3"
                    >
                      Verify Document / Code
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Deep Dive Story / Problem Statement */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                <Layers size={14} className="text-blue-600" />
                Case Deep-Dive & Breakthrough
              </h4>
              <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 text-sm text-stone-700 leading-relaxed whitespace-pre-line font-sans">
                {item.deepDive || item.desc}
              </div>
            </div>

            {/* Skills & Technologies Matrix */}
            {item.tech && item.tech.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                  Disciplines & Tools Deployed
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 border border-stone-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="p-4 border-t border-stone-100 bg-stone-50 flex items-center justify-between text-xs font-mono text-stone-500">
            <span>Engineering Review</span>
            <button
              onClick={onClose}
              className="btn-radiant-primary text-xs py-1.5 px-4"
            >
              Close Drawer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
