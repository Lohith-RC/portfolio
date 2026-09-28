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

  const handlePrintPdf = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }
    const { personalInfo, experience, projects, certifications, hackathons } = resumeData;
    printWindow.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${personalInfo.name} - Executive Technical Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; color: #1c1917; line-height: 1.45; padding: 36px 42px; font-size: 12.5px; max-width: 860px; margin: 0 auto; background: #fff; }
    header { border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 16px; }
    h1 { font-size: 24px; font-weight: 700; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 4px; }
    .title-sub { font-size: 13px; font-weight: 600; color: #2563eb; margin-bottom: 6px; }
    .header-meta { font-size: 11px; color: #475569; display: flex; flex-wrap: wrap; gap: 14px; font-family: monospace; }
    .header-meta a { color: #0284c7; text-decoration: none; }
    .section { margin-top: 16px; }
    .section-title { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 8px; }
    .item { margin-bottom: 10px; page-break-inside: avoid; }
    .item-header { display: flex; justify-content: space-between; align-items: baseline; font-weight: 600; font-size: 12.5px; color: #0f172a; }
    .item-sub { display: flex; justify-content: space-between; font-size: 11px; color: #64748b; margin-bottom: 3px; }
    ul { padding-left: 16px; font-size: 11.5px; color: #334155; }
    li { margin-bottom: 2px; }
    .tech-stack { font-size: 10.5px; font-family: monospace; color: #475569; margin-top: 2px; }
    .badge { display: inline-block; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 3px; padding: 1px 5px; font-size: 10px; font-weight: 600; color: #0f172a; }
    @media print {
      body { padding: 0; }
      @page { margin: 12mm 14mm; size: A4; }
    }
  </style>
</head>
<body>
  <header>
    <h1>${personalInfo.name.toUpperCase()}</h1>
    <div class="title-sub">${personalInfo.title} • Kalpataru Institute of Technology (VTU) B.E. CSE '27 (CGPA: 8.6/10)</div>
    <div class="header-meta">
      <span>✉ ${personalInfo.email}</span>
      <span>☎ ${personalInfo.phone}</span>
      <span>📍 ${personalInfo.location}</span>
      <span>🔗 <a href="${personalInfo.github}">${personalInfo.github}</a></span>
      <span>🔗 <a href="${personalInfo.linkedin}">LinkedIn</a></span>
      <span>🌐 <a href="${personalInfo.livePortfolio}">Live Portfolio</a></span>
    </div>
  </header>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p style="font-size: 11.5px; color: #334155; line-height: 1.5;">${personalInfo.summary}</p>
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    <div class="item">
      <div class="item-header">
        <span>Bachelor of Engineering (B.E.) in Computer Science & Engineering</span>
        <span>Expected May 2027</span>
      </div>
      <div class="item-sub">
        <span>Kalpataru Institute of Technology, Tiptur (Visvesvaraya Technological University)</span>
        <span>CGPA: 8.6 / 10.0</span>
      </div>
      <p style="font-size: 11px; color: #64748b;">Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, System Design, Applied Machine Learning.</p>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Work Experience</div>
    ${experience.map(exp => `
      <div class="item">
        <div class="item-header">
          <span>${exp.role}</span>
          <span>${exp.period}</span>
        </div>
        <div class="item-sub">
          <span>${exp.company} • ${exp.location}</span>
          <span>${exp.mode || 'Technical Leadership'}</span>
        </div>
        <ul>
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Flagship Engineering Projects</div>
    ${projects.slice(0, 4).map(p => `
      <div class="item">
        <div class="item-header">
          <span>${p.title} <span style="font-weight: normal; font-size: 11px; color: #64748b;">— ${p.subtitle}</span></span>
          <span class="badge">${p.latencyBenchmark || p.category}</span>
        </div>
        <div class="tech-stack"><strong>Stack:</strong> ${p.stack.join(', ')}</div>
        <p style="font-size: 11.5px; color: #334155; margin: 3px 0;">${p.description}</p>
        <div style="font-size: 10.5px; color: #475569; font-style: italic;">Architecture: ${p.architectureNodes.map(n => n.name).join(' → ')}</div>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Hackathon Wins & Achievements</div>
    ${hackathons.map(h => `
      <div class="item">
        <div class="item-header">
          <span>${h.title}</span>
          <span style="color: #047857; font-weight: 700;">${h.award}</span>
        </div>
        <div class="item-sub">
          <span>Role: ${h.role} • ${h.location}</span>
          <span>Tech: ${h.tech.join(', ')}</span>
        </div>
        <p style="font-size: 11.5px; color: #334155;">${h.desc}</p>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Certifications & Credentials</div>
    <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; list-style-type: none; padding-left: 0;">
      ${certifications.map(c => `
        <li style="font-size: 11px; color: #334155;">• <strong>${c.title}</strong> — ${c.issuer}</li>
      `).join('')}
    </ul>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 250);
    };
  </script>
</body>
</html>`);
    printWindow.document.close();
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
                  ATS Plaintext & Executive PDF Resume
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    100% Machine-Readable
                  </span>
                </h3>
                <p className="text-xs text-stone-500">Standardized plain-text for ATS parsers or formatted executive 1-click PDF print.</p>
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
          <div className="p-4 bg-white border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs font-mono text-stone-500 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              Ready for immediate copy, print, or ATS dispatch
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handlePrintPdf}
                className="btn-radiant-primary text-xs py-2 px-3.5"
                title="Print or Save as Formatted PDF"
              >
                <Download className="w-4 h-4" />
                <span>Save / Print PDF</span>
              </button>
              <button
                onClick={handleCopy}
                className="btn-glass-tactile text-xs py-2 px-3.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy TXT"}</span>
              </button>
              <button
                onClick={handleDownload}
                className="btn-cyber-glow text-xs py-2 px-3.5"
              >
                <Download className="w-4 h-4" />
                <span>.TXT</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
