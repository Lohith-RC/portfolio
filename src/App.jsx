import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Menu, X, Terminal, Sparkles, Network, Play, 
  Mail, Phone, MapPin, Copy, Check, Download, ExternalLink, 
  Cpu, Briefcase, Trophy, GraduationCap, ShieldCheck, FileText, Send, ArrowRight
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
    <div className="relative min-h-screen w-full bg-[#090D16] font-sans text-white antialiased selection:bg-cyan-500 selection:text-white">
      {/* Background Cinematic Video (Fixed full-bleed) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 h-full w-full object-cover z-0 opacity-40 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4"
      />

      {/* Dark Backdrop Gradient to ensure content readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#090D16]/60 via-[#090D16]/80 to-[#090D16] z-0 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-12 backdrop-blur-xl bg-[#090D16]/70 border-b border-white/10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-white fill-white">
            <svg width="24" height="24" viewBox="0 0 256 256" className="fill-current">
              <path d="M 128 128 C 128 198.692 70.692 256 0 256 C 0 185.308 57.308 128 128 128 Z M 128 128 C 198.692 128 256 185.308 256 256 C 185.308 256 128 198.692 128 128 Z M 0 0 C 70.692 0 128 57.308 128 128 C 57.308 128 0 70.692 0 0 Z M 256 0 C 256 70.692 198.692 128 128 128 C 128 57.308 185.308 0 256 0 Z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-white">nexum <span className="text-cyan-400 text-xs font-mono font-normal">| Lohith.dev</span></span>
            </div>
          </a>

          {/* Desktop Nav Cluster & Role Toggle */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <nav className="flex items-center gap-1 rounded-full bg-white/10 px-1.5 py-1.5 backdrop-blur-lg border border-white/10">
              <a href="#projects" className="rounded-full px-4 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">Projects</a>
              <a href="#skills" className="rounded-full px-4 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">Skills</a>
              <a href="#experience" className="rounded-full px-4 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">Experience</a>
              <a href="#certifications" className="rounded-full px-4 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">Certifications</a>
              <a href="#contact" className="rounded-full px-4 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">Contact</a>
            </nav>

            {/* Role Switcher Pill Bar */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
              {resumeData.roleModes.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                    activeRole === role.id 
                      ? 'bg-gradient-to-b from-[#2B2B2B] to-[#101010] text-cyan-400 border border-cyan-500/40 shadow-lg' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {role.id === 'fullstack' && 'Full-Stack'}
                  {role.id === 'aiml' && 'AI / ML'}
                  {role.id === 'backend' && 'Backend'}
                </button>
              ))}
            </div>

            {/* Get Started / Hire Me Pill Button */}
            <a
              href="#contact"
              style={{ background: 'linear-gradient(to bottom, #2B2B2B, #101010)' }}
              className="flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white border border-white/10 transition-all hover:opacity-90 hover:border-cyan-500/50 shadow-lg"
            >
              Get started
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-lg transition-colors md:hidden border border-white/10"
            aria-label="Toggle menu"
          >
            <Menu className={`h-5 w-5 transition-all duration-300 ${mobileOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
            <X className={`absolute h-5 w-5 transition-all duration-300 ${mobileOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
          </button>
        </header>

        {/* Mobile Slide-in Menu Drawer */}
        <div className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setMobileOpen(false)} />
        <div className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-black/95 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col gap-2 px-6 pt-24">
            <a href="#projects" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white">Projects</a>
            <a href="#skills" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white">Skills</a>
            <a href="#experience" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white">Experience</a>
            <a href="#certifications" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white">Certifications</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white">Contact</a>
          </nav>
          <div className="mt-auto px-6 pb-10">
            <a href="#contact" onClick={() => setMobileOpen(false)} style={{ background: 'linear-gradient(to bottom, #2B2B2B, #101010)' }} className="flex w-full justify-center rounded-full py-3.5 text-base font-medium text-white hover:opacity-90">
              Get started
            </a>
          </div>
        </div>

        {/* HERO SECTION - Full Screen First Viewport */}
        <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-end px-5 pb-8 sm:px-8 sm:pb-12 lg:px-12 lg:pb-16 pt-12">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
            
            {/* Left Column: Headline + Email CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1 text-xs font-semibold text-cyan-400 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Lohith R C • BE Computer Science (CGPA 8.6 / 10)
              </div>

              <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[3.4rem]">
                Ship Full-Stack & Agentic AI Systems That Scale
              </h1>

              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                Final-year CS student proficient in <strong className="text-white">Java & Python (both primary)</strong>, Spring Boot, FastAPI, React/Redux, LangGraph multi-agent workflows, and RAG architectures.
              </p>

              {/* Email Form CTA */}
              <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:inline-flex sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:bg-white sm:p-1.5">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="w-full rounded-full bg-white px-5 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none sm:w-64 sm:rounded-none sm:bg-transparent sm:px-4 sm:py-2"
                />
                <button
                  type="submit"
                  style={{ background: 'linear-gradient(to bottom, #2B2B2B, #101010)' }}
                  className="w-full rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto sm:py-2.5"
                >
                  Get started
                </button>
              </form>

              {/* Quick AI Bot Launcher */}
              <button 
                onClick={() => setAiBotOpen(true)} 
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Sparkles size={14} /> Ask Lohith's AI Assistant questions directly
              </button>
            </motion.div>

            {/* Right Column: Two Glass Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row lg:w-auto lg:gap-5"
            >
              {/* Stats Card */}
              <div className="flex flex-col justify-between rounded-2xl bg-white/10 p-5 backdrop-blur-lg border border-white/10 sm:w-64 sm:p-6 shadow-2xl">
                <div>
                  <div className="font-silkscreen text-3xl font-normal tracking-tight text-white sm:text-4xl">
                    42,500+
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4">
                    Teams run Nexum ops. <strong>8.6 CGPA</strong> in BE CS with 15+ verified certifications.
                  </p>
                </div>
              </div>

              {/* Testimonial / Experience Card */}
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-lg border border-white/10 sm:w-64 sm:p-6 shadow-2xl">
                <div className="mb-3 flex items-center gap-2 sm:mb-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-black text-xs font-bold text-white">S</div>
                  <span className="text-sm font-semibold text-white">Stratify</span>
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  "With Nexum we went from managing tedious operational work to having AI agents that handle everything."
                </p>
                <div className="mt-4 flex items-center gap-3 sm:mt-5">
                  <img src="https://i.pravatar.cc/72?img=12" alt="Sara Klein" className="h-9 w-9 rounded-full bg-white/20 object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-white">Sara Klein</div>
                    <div className="text-xs text-white/60">Dir of Operations</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* SCROLL-DRIVEN SECTION 1: FLAGSHIP PROJECTS & INTERACTIVE SIMULATORS */}
        <section id="projects" className="px-5 py-20 sm:px-8 lg:px-12 border-t border-white/10 bg-[#090D16]/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-2">
                Flagship Systems & Applications
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Architected & Shipped Projects
              </h2>
              <p className="text-white/70 text-sm sm:text-base mt-3">
                Every project includes interactive node flow diagrams and live feature simulators.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectFilter(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                      projectFilter === cat 
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
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
                    className={`rounded-2xl p-6 sm:p-8 backdrop-blur-lg flex flex-col justify-between transition-all duration-300 border ${
                      isMatchRole 
                        ? 'bg-white/10 border-cyan-500/40 shadow-xl shadow-cyan-500/10' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider">{project.category}</span>
                        {isMatchRole && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                            <Sparkles size={10} /> Active Role Highlight
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                      <div className="text-xs font-medium text-cyan-400 mt-1">{project.subtitle}</div>

                      <p className="text-sm text-white/70 mt-3 leading-relaxed">{project.description}</p>

                      {/* Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.stack.map((t, idx) => (
                          <span key={idx} className="rounded-full bg-white/10 border border-white/10 px-2.5 py-1 text-xs text-white/80">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mt-5 p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx}>
                            <div className="font-mono text-sm font-bold text-white">{m.val}</div>
                            <div className="text-[11px] text-white/50">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setArchProject(project)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-all"
                        >
                          <Network size={14} /> Architecture
                        </button>

                        {project.simulatorType !== 'generic' && (
                          <button
                            onClick={() => setSimProject(project)}
                            className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 px-3.5 py-1.5 text-xs font-medium text-purple-300 hover:bg-purple-500/30 transition-all"
                          >
                            <Play size={14} /> Interactive Demo
                          </button>
                        )}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors"
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
        <section id="skills" className="px-5 py-20 sm:px-8 lg:px-12 border-t border-white/10 bg-[#090D16]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest mb-2">
                Technical Proficiency Matrix
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Software & Systems Mastery
              </h2>
              <p className="text-white/70 text-sm sm:text-base mt-3">
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
                  className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg border border-white/10 hover:border-cyan-500/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-cyan-400 mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
                    <Cpu size={18} className="text-purple-400" /> {group.category}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl border transition-all ${
                          skill.highlight 
                            ? 'bg-cyan-500/10 border-cyan-500/30' 
                            : 'bg-white/5 border-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-white">{skill.name}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            skill.level === 'Primary' 
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                              : skill.level === 'Advanced' 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                              : 'bg-white/10 text-white/70'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="text-xs text-white/60 mt-1">{skill.note}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* SCROLL-DRIVEN SECTION 3: WORK EXPERIENCE, HACKATHONS & CERTIFICATIONS */}
        <section id="experience" className="px-5 py-20 sm:px-8 lg:px-12 border-t border-white/10 bg-[#090D16]/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest mb-2">
                Proven Track Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
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
                  <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                    <Briefcase size={20} /> Professional Internship
                  </h3>

                  {resumeData.experience.map((exp, idx) => (
                    <div key={idx} className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg border-l-4 border-l-cyan-400 border-t border-r border-b border-white/10">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                          <div className="text-sm font-semibold text-cyan-400">{exp.company} • <span className="text-white/60">{exp.location}</span></div>
                        </div>
                        <span className="text-xs font-mono bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside leading-relaxed">
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
                  <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                    <Trophy size={20} /> Hackathons & State Competitions
                  </h3>

                  <div className="space-y-4">
                    {resumeData.hackathons.map((h, idx) => (
                      <div key={idx} className="rounded-xl bg-white/5 p-5 backdrop-blur-lg border-l-4 border-l-amber-400 border-t border-r border-b border-white/10">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="text-base font-bold text-white">{h.title}</h4>
                          <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                            {h.award}
                          </span>
                        </div>
                        <div className="text-xs text-cyan-400 mt-1">{h.role} ({h.location})</div>
                        <p className="text-xs text-white/70 mt-2 leading-relaxed">{h.desc}</p>
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
                  <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <ShieldCheck size={20} /> Verified Industry Certifications
                  </h3>

                  <div className="grid grid-cols-1 gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {resumeData.certifications.map((cert, idx) => (
                      <div key={idx} className="rounded-xl bg-white/5 p-4 backdrop-blur-lg border border-white/10 flex items-start gap-3 hover:border-emerald-500/40 transition-all">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                          <div className="text-xs font-semibold text-emerald-400">{cert.issuer}</div>
                          <p className="text-xs text-white/60 mt-1">{cert.desc}</p>
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
                  <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <GraduationCap size={20} /> Academic Education
                  </h3>

                  <div className="space-y-4">
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx} className="rounded-2xl bg-white/5 p-5 backdrop-blur-lg border-l-4 border-l-purple-400 border-t border-r border-b border-white/10">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                            <div className="text-xs text-purple-300 font-semibold">{edu.institution}</div>
                          </div>
                          <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                            {edu.grade}
                          </span>
                        </div>
                        <div className="text-xs text-white/50 mt-1 font-mono">{edu.period}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </section>

        {/* SCROLL-DRIVEN SECTION 4: TAILORED ATS RESUME & CONTACT */}
        <section id="contact" className="px-5 py-20 sm:px-8 lg:px-12 border-t border-white/10 bg-[#090D16]/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Let's Build Something Exceptional
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left: Contact Info & Resume Viewer */}
              <div className="flex flex-col gap-6">
                
                {/* Contact Cards */}
                <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 uppercase">Email Address</div>
                      <div className="text-sm font-semibold text-white">{resumeData.personalInfo.email}</div>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard(resumeData.personalInfo.email, 'email')} className="text-xs text-cyan-400 hover:underline flex items-center gap-1">
                    {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 uppercase">Phone / WhatsApp</div>
                      <div className="text-sm font-semibold text-white">{resumeData.personalInfo.phone}</div>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard(resumeData.personalInfo.phone, 'phone')} className="text-xs text-purple-400 hover:underline flex items-center gap-1">
                    {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    {copiedPhone ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* ATS Resume Box */}
                <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <FileText size={16} className="text-cyan-400" /> Tailored Plain Text Resume
                    </div>
                    <button 
                      onClick={() => copyToClipboard(generateTailoredResume(), 'resume')}
                      className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      {copiedResume ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      {copiedResume ? 'Copied CV' : 'Copy Plain CV'}
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-white/80 max-h-48 overflow-y-auto whitespace-pre-wrap">
                    {generateTailoredResume()}
                  </pre>
                </div>

              </div>

              {/* Right: Contact Form */}
              <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-lg border border-white/10">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 inline-flex items-center justify-center mb-4">
                      <Check size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                    <p className="text-sm text-white/70 mt-2">Lohith will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs text-white/70 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/70 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/70 mb-1">Message</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Hello Lohith, I'd like to discuss a software engineering opportunity..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-500"
                      />
                    </div>

                    <button
                      type="submit"
                      style={{ background: 'linear-gradient(to bottom, #2B2B2B, #101010)' }}
                      className="w-full rounded-full py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 mt-2"
                    >
                      Get started
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 px-5 sm:px-8 lg:px-12 bg-black/90 text-xs text-white/50 flex flex-wrap justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Lohith R C. Built with Nexum Dark Cinematic Glassmorphism.</div>
          <div className="flex gap-4">
            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:text-white transition-colors">Email</a>
          </div>
        </footer>

      </div>

      {/* Floating AI Launcher Button */}
      <button
        onClick={() => setAiBotOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full px-4 py-3 text-xs font-bold text-white shadow-2xl transition-transform hover:scale-105"
        style={{ background: 'linear-gradient(to bottom, #2B2B2B, #101010)', border: '1px solid rgba(255,255,255,0.2)' }}
      >
        <Sparkles size={16} className="text-cyan-400" /> Ask Lohith's AI
      </button>

      {/* Modals */}
      <AiChatModal isOpen={aiBotOpen} onClose={() => setAiBotOpen(false)} />
      <ArchitectureModal project={archProject} isOpen={Boolean(archProject)} onClose={() => setArchProject(null)} />
      <ProjectSimulatorModal project={simProject} isOpen={Boolean(simProject)} onClose={() => setSimProject(null)} />

    </div>
  );
}
