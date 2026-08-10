import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, Menu, X, Terminal, Sparkles, Network, Play, 
  Mail, Phone, MapPin, Copy, Check, Download, ExternalLink, 
  Cpu, Briefcase, Trophy, GraduationCap, ShieldCheck, FileText, Send, ArrowRight, Code2
} from 'lucide-react';

import { resumeData } from './data/resumeData';
import { GithubIcon, LinkedinIcon } from './components/BrandIcons';

import AiChatModal from './components/AiChatModal';
import ArchitectureModal from './components/ArchitectureModal';
import ProjectSimulatorModal from './components/ProjectSimulatorModal';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeRole, setActiveRole] = useState('fullstack');
  const [aiBotOpen, setAiBotOpen] = useState(false);
  const [archProject, setArchProject] = useState(null);
  const [simProject, setSimProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState('All');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedResume, setCopiedResume] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const activeRoleInfo = resumeData.roleModes.find(r => r.id === activeRole) || resumeData.roleModes[0];

  const filteredProjects = resumeData.projects.filter(p => {
    if (projectFilter === 'All') return true;
    return p.category === projectFilter;
  });

  const categories = ['All', 'Agentic AI & Full-Stack', 'Machine Learning & Rescue Analytics', 'Deep Learning & Diagnostic Web App', 'RAG & LLM Application'];

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === 'resume') {
      setCopiedResume(true);
      setTimeout(() => setCopiedResume(false), 2000);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const generateTailoredResume = () => {
    return `====================================================
LOHITH R C
Arsikere, Karnataka, India | lohithraj9090@gmail.com | +91 78994 60920
GitHub: ${resumeData.personalInfo.github}

TARGET ROLE: ${activeRoleInfo.label.toUpperCase()}
EDUCATION: B.E. in Computer Science & Engineering (VTU - Kalpataru Institute of Technology) - CGPA: 8.6 / 10 (Expected 2027)

SUMMARY:
Final-year CS student with hands-on full-stack experience across Java and Python (both primary), Spring Boot, FastAPI, and React/Redux. Specializing in AI-integrated architectures, LangGraph agentic workflows, RAG systems, and explainable ML models.

TECHNICAL SKILLS:
- Languages: Java (Primary), Python (Primary), JavaScript (ES6+), C++, C, SQL
- Frontend: React.js, Redux Toolkit, HTML5, CSS3, Tailwind CSS, Responsive Design
- Backend: FastAPI, Flask, Spring Boot fundamentals, REST APIs, JWT Auth
- AI/ML & Agentic: LangChain, LangGraph, Groq LLM, FAISS Vector Search, TensorFlow (CNN Ensembles), Grad-CAM & SHAP Explainability
- Security & Cloud: Cisco CyberOps Associate, CCNA Series, Cybersecurity Essentials, Docker, Linux
- Databases: PostgreSQL, MongoDB, SQLite, FAISS Vector DB

EXPERIENCE & INTERNSHIP:
Full Stack Development Intern | CodeAlpha (Jul 2026 - Aug 2026)
- Built production full-stack web features using React UI and REST APIs with structured Git code reviews.

FLAGSHIP PROJECTS:
1. AI-First CRM Module (React, Redux, FastAPI, PostgreSQL, LangGraph, Groq)
2. DisasterLens — Disaster Intelligence Platform (Python, Flask, SQLite, scikit-learn, DBSCAN, SHAP)
3. Visionary Diagnostics — Ensemble CNN OSCC Platform (React, Flask, TensorFlow, Grad-CAM, JWT)
4. Personal Knowledge Engine (LangChain, FAISS, OpenAI API, FastAPI, MongoDB)

VERIFIED CERTIFICATIONS & ACHIEVEMENTS:
- Cisco CyberOps Associate & CCNA Series (3 Modules)
- IBM SkillsBuild AI Credly Badge (credly.com/badges/df457100-fc07-4c9d-ac06-39a8782794c6)
- AlgoUniversity Graph Theory Programming Camp (Codeforces Master mentorship)
- National & State Hackathons: GAT Code Breaker 1.0, BGSCET ADVAYA 2k25, Acharya SRISHTI 2025, MIT Mysore HACKVERSE & Ideathon
====================================================`;
  };

  return (
    <div className="relative min-h-screen w-full bg-[#080C14] font-sans text-white antialiased selection:bg-cyan-500 selection:text-white">
      {/* High-Clarity Background Video with High Brightness & Clarity */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 h-full w-full object-cover z-0 opacity-85 pointer-events-none brightness-110 contrast-105"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4"
      />

      {/* Subtle Dark Ambient Tint for 100% High Contrast Text Readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#080C14]/40 via-[#080C14]/60 to-[#080C14]/90 z-0 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* iOS Liquid Glass Top Navigation Bar */}
        <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 lg:px-12 backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-lg">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 text-white no-underline group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform">
              <Terminal size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white drop-shadow-sm">
                Lohith<span className="text-cyan-400">.dev</span>
              </span>
              <span className="text-[10px] font-mono text-white/70">VTU '27 • CS Engineer</span>
            </div>
          </a>

          {/* Desktop iOS Liquid Glass Cluster & Role Switcher */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <nav className="flex items-center gap-1 rounded-full liquid-pill px-2 py-1.5 border border-white/30">
              <a href="#projects" className="rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 hover:bg-white/20 hover:text-white transition-all">Projects</a>
              <a href="#skills" className="rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 hover:bg-white/20 hover:text-white transition-all">Skills</a>
              <a href="#experience" className="rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 hover:bg-white/20 hover:text-white transition-all">Experience</a>
              <a href="#certifications" className="rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 hover:bg-white/20 hover:text-white transition-all">Certifications</a>
              <a href="#contact" className="rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 hover:bg-white/20 hover:text-white transition-all">Contact</a>
            </nav>

            {/* Role Switcher Pills */}
            <div className="flex items-center gap-1 liquid-pill p-1 border border-white/25">
              {resumeData.roleModes.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    activeRole === role.id 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md border border-white/30' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {role.id === 'fullstack' && '⚡ Full-Stack'}
                  {role.id === 'aiml' && '🧠 AI / ML'}
                  {role.id === 'backend' && '⚙️ Backend'}
                </button>
              ))}
            </div>

            {/* Liquid Primary Button */}
            <a href="#contact" className="liquid-button-primary px-5 py-2 text-xs font-bold no-underline">
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full liquid-pill text-white transition-colors md:hidden border border-white/30"
            aria-label="Toggle menu"
          >
            <Menu className={`h-5 w-5 transition-all duration-300 ${mobileOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
            <X className={`absolute h-5 w-5 transition-all duration-300 ${mobileOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
          </button>
        </header>

        {/* Mobile Slide-in Drawer */}
        <div className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-xl transition-opacity duration-300 md:hidden ${mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setMobileOpen(false)} />
        <div className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-black/90 backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col gap-2 px-6 pt-24">
            <a href="#projects" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:bg-white/20">Projects</a>
            <a href="#skills" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:bg-white/20">Skills</a>
            <a href="#experience" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:bg-white/20">Experience</a>
            <a href="#certifications" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:bg-white/20">Certifications</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:bg-white/20">Contact</a>
          </nav>
          <div className="mt-auto px-6 pb-10">
            <a href="#contact" onClick={() => setMobileOpen(false)} className="liquid-button-primary flex w-full justify-center py-3.5 text-base font-bold no-underline">
              Hire Me
            </a>
          </div>
        </div>

        {/* HERO SECTION - Full Screen First Viewport */}
        <section className="relative min-h-[calc(100vh-76px)] flex flex-col justify-end px-5 pb-8 sm:px-8 sm:pb-12 lg:px-12 lg:pb-16 pt-10">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
            
            {/* Left Column: Headline + Email CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full liquid-pill px-4 py-1 text-xs font-semibold text-cyan-300 mb-4 border border-cyan-400/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10B981]" />
                Lohith R C • BE Computer Science (CGPA 8.6 / 10)
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[3.4rem] font-bold leading-[1.15] tracking-tight text-white drop-shadow-md">
                Ship Full-Stack & Agentic AI Systems That Scale
              </h1>

              <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-normal drop-shadow-sm">
                Final-year CS student proficient in <strong className="text-white font-bold">Java & Python (both primary)</strong>, Spring Boot, FastAPI, React/Redux, LangGraph multi-agent workflows, and RAG architectures.
              </p>

              {/* Email Form CTA */}
              <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:inline-flex sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:liquid-pill sm:p-1.5 sm:border-white/30">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="w-full rounded-full bg-white/20 backdrop-blur-md px-5 py-3 text-sm text-white placeholder-white/70 outline-none sm:w-64 sm:rounded-none sm:bg-transparent sm:px-4 sm:py-2"
                />
                <button
                  type="submit"
                  className="liquid-button-primary w-full px-6 py-3 text-sm font-bold sm:w-auto sm:py-2.5"
                >
                  Get started
                </button>
              </form>

              {/* Quick AI Bot Launcher */}
              <button 
                onClick={() => setAiBotOpen(true)} 
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-purple-200 transition-colors drop-shadow"
              >
                <Sparkles size={14} className="text-purple-400" /> Ask Lohith's AI Assistant questions directly
              </button>
            </motion.div>

            {/* Right Column: Two iOS Liquid Glass Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row lg:w-auto lg:gap-5"
            >
              {/* Stats Card */}
              <div className="liquid-glass p-5 sm:w-64 sm:p-6 flex flex-col justify-between border-white/30">
                <div>
                  <div className="font-silkscreen text-3xl sm:text-4xl font-normal tracking-tight text-white drop-shadow-sm">
                    42,500+
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/90 sm:mt-4">
                    Lines of production code written. <strong>8.6 CGPA</strong> in BE CS with 15+ verified certifications.
                  </p>
                </div>
              </div>

              {/* Experience Highlight Card */}
              <div className="liquid-glass p-5 sm:w-64 sm:p-6 border-white/30">
                <div className="mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-bold text-white shadow-sm">
                    <Code2 size={14} />
                  </div>
                  <span className="text-sm font-semibold text-white drop-shadow-sm">CodeAlpha Intern</span>
                </div>
                <p className="text-sm leading-relaxed text-white/90">
                  "Shipped end-to-end full-stack web applications with React UI, state management, and Python REST APIs."
                </p>
                <div className="mt-4 sm:mt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow">
                    LRC
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Lohith R C</div>
                    <div className="text-xs text-white/70">Full-Stack & AI Engineer</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* SCROLL-DRIVEN SECTION 1: FLAGSHIP PROJECTS */}
        <section id="projects" className="px-5 py-20 sm:px-8 lg:px-12 border-t border-white/20 bg-black/40 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-widest mb-2 drop-shadow">
                Flagship Systems & Applications
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                Architected & Shipped Projects
              </h2>
              <p className="text-white/80 text-sm sm:text-base mt-3">
                Every project includes interactive node flow diagrams and live feature simulators.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectFilter(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      projectFilter === cat 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg border border-white/40' 
                        : 'liquid-pill text-white/80 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => {
                const isMatchRole = project.roles.includes(activeRole);
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`liquid-glass-interactive p-6 sm:p-8 flex flex-col justify-between ${
                      isMatchRole ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' : 'border-white/25'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">{project.category}</span>
                        {isMatchRole && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-300 liquid-pill px-3 py-0.5 border-cyan-400/40">
                            <Sparkles size={10} /> Active Role Highlight
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">{project.title}</h3>
                      <div className="text-xs font-semibold text-cyan-300 mt-1">{project.subtitle}</div>

                      <p className="text-sm text-white/85 mt-3 leading-relaxed">{project.description}</p>

                      {/* Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.stack.map((t, idx) => (
                          <span key={idx} className="liquid-pill px-3 py-1 text-xs text-white/90 font-medium">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mt-5 p-3 rounded-2xl bg-black/40 border border-white/20 text-center">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx}>
                            <div className="font-mono text-sm font-bold text-white">{m.val}</div>
                            <div className="text-[11px] text-white/70">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setArchProject(project)}
                          className="liquid-pill px-4 py-1.5 text-xs font-bold text-white hover:bg-white/30 transition-all"
                        >
                          <Network size={14} className="inline mr-1" /> Architecture
                        </button>

                        {project.simulatorType !== 'generic' && (
                          <button
                            onClick={() => setSimProject(project)}
                            className="liquid-pill px-4 py-1.5 text-xs font-bold text-purple-200 border-purple-400/40 bg-purple-500/20 hover:bg-purple-500/40 transition-all"
                          >
                            <Play size={14} className="inline mr-1" /> Interactive Demo
                          </button>
                        )}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                      >
                        <GithubIcon size={14} /> Code
                      </a>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SCROLL-DRIVEN SECTION 2: TECHNICAL SKILLS MATRIX */}
        <section id="skills" className="px-5 py-20 sm:px-8 lg:px-12 border-t border-white/20 bg-black/60 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="text-xs font-mono text-purple-300 font-bold uppercase tracking-widest mb-2 drop-shadow">
                Technical Proficiency Matrix
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                Software & Systems Mastery
              </h2>
              <p className="text-white/80 text-sm sm:text-base mt-3">
                Extracted from verified project implementations, open-source repositories, and coursework.
              </p>
            </motion.div>

            {/* Skills Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resumeData.skillsCategory.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="liquid-glass p-6 border-white/25 hover:border-cyan-400/50 transition-all"
                >
                  <h3 className="text-lg font-bold text-cyan-300 mb-4 pb-2 border-b border-white/20 flex items-center gap-2">
                    <Cpu size={18} className="text-purple-300" /> {group.category}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl border transition-all ${
                          skill.highlight 
                            ? 'bg-cyan-500/20 border-cyan-400/40 shadow-sm' 
                            : 'bg-white/10 border-white/15'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white">{skill.name}</span>
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                            skill.level === 'Primary' 
                              ? 'bg-amber-500/30 text-amber-200 border border-amber-400/50' 
                              : skill.level === 'Advanced' 
                              ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/50' 
                              : 'liquid-pill text-white/80'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="text-xs text-white/75 mt-1 font-medium">{skill.note}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* SCROLL-DRIVEN SECTION 3: WORK EXPERIENCE, HACKATHONS & CERTIFICATIONS */}
        <section id="experience" className="px-5 py-20 sm:px-8 lg:px-12 border-t border-white/20 bg-black/40 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-widest mb-2 drop-shadow">
                Proven Track Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                Work Experience, Hackathons & Verified Certifications
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column: Work Experience & Hackathons */}
              <div className="flex flex-col gap-8">
                
                {/* Internship */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2 drop-shadow">
                    <Briefcase size={20} /> Professional Internship
                  </h3>

                  {resumeData.experience.map((exp, idx) => (
                    <div key={idx} className="liquid-glass p-6 border-l-4 border-l-cyan-400 border-white/25">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                          <div className="text-sm font-semibold text-cyan-300">{exp.company} • <span className="text-white/75">{exp.location}</span></div>
                        </div>
                        <span className="text-xs font-mono liquid-pill px-3 py-1 text-cyan-200 border-cyan-400/40 font-semibold">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-white/85 list-disc list-inside leading-relaxed">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>

                {/* Hackathons */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2 drop-shadow">
                    <Trophy size={20} /> Hackathons & State Competitions
                  </h3>

                  <div className="space-y-4">
                    {resumeData.hackathons.map((h, idx) => (
                      <div key={idx} className="liquid-glass p-5 border-l-4 border-l-amber-400 border-white/25">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="text-base font-bold text-white">{h.title}</h4>
                          <span className="text-[11px] font-bold text-amber-200 bg-amber-500/30 border border-amber-400/50 px-2.5 py-0.5 rounded-full">
                            {h.award}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-cyan-300 mt-1">{h.role} ({h.location})</div>
                        <p className="text-xs text-white/80 mt-2 leading-relaxed">{h.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Verified Certifications & Education */}
              <div id="certifications" className="flex flex-col gap-8">
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2 drop-shadow">
                    <ShieldCheck size={20} /> Verified Industry Certifications
                  </h3>

                  <div className="grid grid-cols-1 gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {resumeData.certifications.map((cert, idx) => (
                      <div key={idx} className="liquid-glass p-4 border-white/25 flex items-start gap-3 hover:border-emerald-400/60 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shrink-0 shadow-sm">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                          <div className="text-xs font-bold text-emerald-300">{cert.issuer}</div>
                          <p className="text-xs text-white/75 mt-1 font-medium">{cert.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2 drop-shadow">
                    <GraduationCap size={20} /> Academic Education
                  </h3>

                  <div className="space-y-4">
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx} className="liquid-glass p-5 border-l-4 border-l-purple-400 border-white/25">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                            <div className="text-xs text-purple-300 font-bold">{edu.institution}</div>
                          </div>
                          <span className="text-xs font-bold text-emerald-200 bg-emerald-500/30 px-3 py-1 rounded-full border border-emerald-400/50">
                            {edu.grade}
                          </span>
                        </div>
                        <div className="text-xs text-white/60 mt-1 font-mono">{edu.period}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </section>

        {/* SCROLL-DRIVEN SECTION 4: TAILORED ATS RESUME & CONTACT */}
        <section id="contact" className="px-5 py-20 sm:px-8 lg:px-12 border-t border-white/20 bg-black/60 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-widest mb-2 drop-shadow">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                Let's Build Something Exceptional
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left: Contact Info & Resume Viewer */}
              <div className="flex flex-col gap-6">
                
                {/* Contact Cards */}
                <div className="liquid-glass p-6 border-white/25 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/30 text-cyan-300 flex items-center justify-center shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-white/60 uppercase font-semibold">Email Address</div>
                      <div className="text-sm font-bold text-white">{resumeData.personalInfo.email}</div>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard(resumeData.personalInfo.email, 'email')} className="text-xs text-cyan-300 hover:underline flex items-center gap-1 font-bold">
                    {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <div className="liquid-glass p-6 border-white/25 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-white/60 uppercase font-semibold">Phone / WhatsApp</div>
                      <div className="text-sm font-bold text-white">{resumeData.personalInfo.phone}</div>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard(resumeData.personalInfo.phone, 'phone')} className="text-xs text-purple-300 hover:underline flex items-center gap-1 font-bold">
                    {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    {copiedPhone ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* ATS Resume Box */}
                <div className="liquid-glass p-6 border-white/25">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <FileText size={16} className="text-cyan-300" /> Tailored Plain Text Resume
                    </div>
                    <button 
                      onClick={() => copyToClipboard(generateTailoredResume(), 'resume')}
                      className="text-xs text-cyan-300 hover:underline flex items-center gap-1 font-bold"
                    >
                      {copiedResume ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      {copiedResume ? 'Copied CV' : 'Copy Plain CV'}
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-black/70 border border-white/20 font-mono text-xs text-white/85 max-h-48 overflow-y-auto whitespace-pre-wrap">
                    {generateTailoredResume()}
                  </pre>
                </div>

              </div>

              {/* Right: Contact Form */}
              <div className="liquid-glass p-8 border-white/25">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 inline-flex items-center justify-center mb-4 shadow-lg">
                      <Check size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                    <p className="text-sm text-white/80 mt-2">Lohith will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl bg-white/10 border border-white/25 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-white/10 border border-white/25 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1">Message</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Hello Lohith, I'd like to discuss a software engineering opportunity..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl bg-white/10 border border-white/25 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:border-cyan-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="liquid-button-primary w-full py-3.5 text-sm font-bold mt-2"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/20 py-8 px-5 sm:px-8 lg:px-12 bg-black/95 text-xs text-white/70 flex flex-wrap justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Lohith R C. Designed with High-Clarity iOS Liquid Glass Aesthetics.</div>
          <div className="flex gap-4 font-semibold">
            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:text-cyan-400 transition-colors">Email</a>
          </div>
        </footer>

      </div>

      {/* Floating AI Launcher Button */}
      <button
        onClick={() => setAiBotOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold text-white shadow-2xl transition-transform hover:scale-105 liquid-button-primary"
      >
        <Sparkles size={16} className="text-white" /> Ask Lohith's AI
      </button>

      {/* Modals */}
      <AiChatModal isOpen={aiBotOpen} onClose={() => setAiBotOpen(false)} />
      <ArchitectureModal project={archProject} isOpen={Boolean(archProject)} onClose={() => setArchProject(null)} />
      <ProjectSimulatorModal project={simProject} isOpen={Boolean(simProject)} onClose={() => setSimProject(null)} />

    </div>
  );
}
