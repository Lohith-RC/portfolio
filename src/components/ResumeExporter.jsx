import React, { useState } from 'react';
import { FileText, Download, Copy, Check, Eye, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ResumeExporter({ activeRole }) {
  const [copied, setCopied] = useState(false);

  const activeRoleInfo = resumeData.roleModes.find(r => r.id === activeRole) || resumeData.roleModes[0];

  const generateResumeText = () => {
    return `====================================================
LOHITH R C
Arsikere, Karnataka, India | lohithraj9090@gmail.com | +91 78994 60920
GitHub: ${resumeData.personalInfo.github}

TARGET ROLE: ${activeRoleInfo.label.toUpperCase()}
EDUCATION: B.E. in Computer Science & Engineering (VTU - Kalpataru Institute of Technology) - CGPA: 8.6 / 10 (Expected 2027)

SUMMARY:
Final-year CS student with hands-on full-stack experience across Java and Python (both primary), Spring Boot, FastAPI, and React/Redux. Built RAG platforms, multi-agent LLM systems (LangGraph), and emergency triage platforms.

TECHNICAL SKILLS:
- Languages: Java (Primary), Python (Primary), JavaScript (ES6+), C++, C, SQL
- Frontend: React.js, Redux Toolkit, HTML5, CSS3, Tailwind CSS, Responsive Design
- Backend: FastAPI, Flask, Spring Boot fundamentals, REST APIs, JWT Auth
- AI/ML & Agentic: LangChain, LangGraph, Groq LLM, FAISS Vector Search, TensorFlow (CNN Ensembles), Grad-CAM & SHAP Explainability
- Databases: PostgreSQL, MongoDB, SQLite, FAISS Vector DB

EXPERIENCE:
Full Stack Development Intern | CodeAlpha (Jul 2026 - Aug 2026)
- Built production full-stack web features using React UI and REST APIs with structured Git code reviews.

FLAGSHIP PROJECTS:
1. AI-First CRM Module (React, Redux, FastAPI, PostgreSQL, LangGraph, Groq)
2. DisasterLens — Disaster Intelligence Platform (Python, Flask, SQLite, scikit-learn, DBSCAN, SHAP)
3. Visionary Diagnostics — Ensemble CNN OSCC Platform (React, Flask, TensorFlow, Grad-CAM, JWT)
4. Personal Knowledge Engine (LangChain, FAISS, OpenAI API, FastAPI, MongoDB)

CERTIFICATIONS & ACHIEVEMENTS:
- 2nd Runner-Up, MIT Mysore Hackathon 2026 (DisasterLens)
- National Competitor, Bharatiya Antariksh Hackathon 2026 (ModalBridge)
- Cisco CCNA Series, Python Essentials 1 & 2, Intro to Modern AI
====================================================`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateResumeText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" style={{ padding: '80px 24px', background: 'rgba(9, 13, 22, 0.6)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ fontSize: '0.85rem', color: '#06B6D4', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
            ATS-Friendly Tailored CV
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#FFF', marginTop: '6px' }}>
            Interactive Resume Viewer
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '8px' }}>
            Dynamically formatted for your selected role: <strong style={{ color: '#06B6D4' }}>{activeRoleInfo.label}</strong>
          </p>
        </div>

        {/* Resume Card Container */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          
          {/* Action Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '16px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFF', fontWeight: '600', fontSize: '0.95rem' }}>
              <FileText size={20} color="#06B6D4" /> Tailored Profile View: <span style={{ color: '#06B6D4' }}>{activeRoleInfo.label}</span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={handleCopy} className="btn-secondary" style={{ padding: '8px 14px', fontSize: '0.85rem' }}>
                {copied ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                {copied ? 'Copied to Clipboard!' : 'Copy Plain Text'}
              </button>

              <button onClick={handlePrint} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                <Download size={16} /> Print / Save PDF
              </button>
            </div>

          </div>

          {/* Plain Text Preview */}
          <pre style={{
            background: '#090D16',
            border: '1px solid var(--border-glass)',
            borderRadius: '14px',
            padding: '24px',
            color: '#F8FAFC',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            lineHeight: '1.6',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            maxHeight: '450px',
            overflowY: 'auto'
          }}>
            <code>{generateResumeText()}</code>
          </pre>

        </div>

      </div>
    </section>
  );
}
