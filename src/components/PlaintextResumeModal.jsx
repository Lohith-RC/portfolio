import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Download, FileText, Sparkles, Terminal } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function PlaintextResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getAtsResumeText = () => {
    const { personalInfo, experience, projects, certifications, hackathons, education } = resumeData;
    
    return `============================================================
${personalInfo.name.toUpperCase()}
${personalInfo.title}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}
Portfolio: ${personalInfo.livePortfolio}
============================================================

SUMMARY
------------------------------------------------------------
${personalInfo.summary}

EDUCATION
------------------------------------------------------------
Bachelor of Engineering (B.E.) in Computer Science & Engineering
Kalpataru Institute of Technology, Tiptur (VTU) | Expected Graduation: 2027
Cumulative GPA: 8.6 / 10.0

WORK EXPERIENCE
------------------------------------------------------------
${experience.map(exp => `${exp.role.toUpperCase()}
${exp.company} | ${exp.location} | ${exp.period}
${exp.highlights.map(h => `• ${h}`).join('\n')}
`).join('\n')}

FLAGSHIP ENGINEERING PROJECTS
------------------------------------------------------------
${projects.map(p => `${p.title.toUpperCase()}
Category: ${p.category} | Stack: ${p.stack.join(', ')}
Link: ${p.demoUrl || p.github}
• Overview: ${p.description}
• Key Architecture: ${p.architectureNodes.map(n => n.name).join(' -> ')}
`).join('\n')}

NATIONAL HACKATHONS & COMPETITIONS
------------------------------------------------------------
${hackathons.map(h => `${h.title.toUpperCase()}
Role: ${h.role} | Award: ${h.award} | Location: ${h.location}
• ${h.desc}
• Technologies: ${h.tech.join(', ')}
`).join('\n')}

INDUSTRY CERTIFICATIONS & CREDENTIALS
------------------------------------------------------------
${certifications.map(c => `• ${c.title} — ${c.issuer} ${c.certId ? `(ID: ${c.certId})` : ''}`).join('\n')}
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getAtsResumeText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([getAtsResumeText()], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Lohith_RC_Resume_ATS_Plaintext.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 15 }}
          className="relative z-10 w-full max-w-3xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-stone-800"
        >
          {/* Header */}
          <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/70">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  Plaintext ATS-Optimized Resume
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    100% Machine-Readable
                  </span>
                </h3>
                <p className="text-xs text-stone-500">Standardized plain-text format for direct ATS ingestion.</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 flex-1 overflow-y-auto font-mono text-xs text-stone-700 bg-stone-50/50 border-y border-stone-200 whitespace-pre-wrap leading-relaxed select-text">
            {getAtsResumeText()}
          </div>

          {/* Footer Controls */}
          <div className="p-4 bg-white border-t border-stone-100 flex items-center justify-between gap-3">
            <div className="text-xs font-mono text-stone-500 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              Ready for immediate copy & dispatch
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="btn-radiant-primary text-xs py-2 px-4"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied to Clipboard!" : "Copy Full Text"}
              </button>
              <button
                onClick={handleDownload}
                className="btn-cyber-glow text-xs py-2 px-4"
              >
                <Download className="w-4 h-4" />
                Download .TXT
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
