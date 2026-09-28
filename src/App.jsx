import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Shield, Cpu, Code2, Sparkles, ExternalLink, 
  Mail, Phone, FileText, ChevronRight, ChevronLeft, CheckCircle2, ArrowUpRight, 
  Layers, Trophy, Award, Search, Copy, Check, Play, BookOpen, Compass, 
  Send, Bot, CornerDownRight, Database, Server, Smartphone, MonitorSmartphone,
  CheckCheck, Globe, Lock, ShieldCheck, Zap, Laptop, ArrowRight, UserCheck,
  PenTool, Code, Flame, Star, LayoutGrid, SlidersHorizontal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/BrandIcons';
import { resumeData } from './data/resumeData';
import AiChatModal from './components/AiChatModal';
import ArchitectureModal from './components/ArchitectureModal';
import ProjectSimulatorModal from './components/ProjectSimulatorModal';
import AchievementDrawer from './components/AchievementDrawer';
import PlaintextResumeModal from './components/PlaintextResumeModal';

export default function App() {
  const { personalInfo, roleModes, stats, genesisTimeline, skillsCategory, projects, experience, hackathons, certifications } = resumeData;

  // State
  const [selectedRole, setSelectedRole] = useState(roleModes[0].id);
  const [activeProjectCategory, setActiveProjectCategory] = useState("All");
  const [currentTime, setCurrentTime] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselDirection, setCarouselDirection] = useState(1);
  const [viewMode, setViewMode] = useState("carousel"); // "carousel" | "grid"
  
  // Modals & Drawers
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [architectureModalProject, setArchitectureModalProject] = useState(null);
  const [simulatorModalProject, setSimulatorModalProject] = useState(null);
  const [drawerItem, setDrawerItem] = useState(null);
  const [drawerType, setDrawerType] = useState(null);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '', roleInterest: 'Full-Stack Engineering' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);

  // Clock in IST
  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Filter Projects
  const projectCategories = ["All", "Security & Systems", "AI & Healthcare", "Full-Stack Web", "AI & Search", "Simulation"];
  
  const filteredProjects = projects.filter(p => {
    let matchesCategory = true;
    if (activeProjectCategory === "Security & Systems") {
      matchesCategory = p.category.includes("Zero-Trust") || p.roles.includes("backend");
    } else if (activeProjectCategory === "AI & Healthcare") {
      matchesCategory = p.category.includes("Medical") || p.category.includes("Deep Learning") || p.category.includes("Machine Learning");
    } else if (activeProjectCategory === "Full-Stack Web") {
      matchesCategory = p.category.includes("Full-Stack") || p.roles.includes("fullstack");
    } else if (activeProjectCategory === "AI & Search") {
      matchesCategory = p.category.includes("RAG") || p.category.includes("LLM") || p.category.includes("Agent");
    } else if (activeProjectCategory === "Simulation") {
      matchesCategory = p.category.includes("VR") || p.category.includes("Simulation");
    }

    const matchesRole = selectedRole === "all" || p.roles.includes(selectedRole);
    const matchesSearch = searchQuery === "" || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.stack.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesRole && matchesSearch;
  });

  // Keep carouselIndex in bounds when category changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [activeProjectCategory, selectedRole, searchQuery]);

  const activeRoleData = roleModes.find(r => r.id === selectedRole) || roleModes[0];

  const handlePrevSlide = () => {
    setCarouselDirection(-1);
    setCarouselIndex(prev => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCarouselDirection(1);
    setCarouselIndex(prev => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSending(true);
    setTimeout(() => {
      setFormSending(false);
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 6000);
    }, 1000);
  };

  const currentProject = filteredProjects[carouselIndex] || filteredProjects[0];

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] font-sans selection:bg-neutral-900 selection:text-white relative">
      
      {/* Background Ambient Glow & Grid Lines */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none opacity-50 z-0" />
      <div className="ambient-glow-cyan top-[-120px] left-[15%] w-[550px] h-[550px]" />
      <div className="ambient-glow-indigo top-[35%] right-[8%] w-[650px] h-[650px]" />

      {/* Top Editorial Navigation Bar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#FAFAF9]/90 border-b border-black/[0.08] transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Brand Tag */}
          <div className="flex items-center gap-3">
            <a href="#top" className="flex items-center gap-2 group">
              <span className="font-serif-editorial italic text-2xl text-[#0C0A09] group-hover:text-blue-700 transition-colors">
                Lohith R C
              </span>
            </a>
          </div>

          {/* Clean Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 font-mono text-xs text-[#57534E]">
            <a href="#top" className="hover:text-[#0C0A09] transition-colors">Home</a>
            <a href="#work" className="hover:text-[#0C0A09] transition-colors">Work</a>
            <a href="#timeline" className="hover:text-[#0C0A09] transition-colors">Timeline</a>
            <a href="#skills" className="hover:text-[#0C0A09] transition-colors">Skills</a>
            <a href="#hackathons" className="hover:text-[#0C0A09] transition-colors">Hackathons</a>
            <a href="#atelier" className="hover:text-blue-700 transition-colors uppercase tracking-wider font-semibold">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAiModalOpen(true)}
              className="btn-action-pill border-blue-600/30 text-blue-700 bg-blue-50 hover:bg-blue-100/80"
              title="Ask AI Assistant"
            >
              <Bot className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline font-semibold">Ask AI</span>
            </button>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="btn-radiant-primary py-1.5 px-3.5 text-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Editorial Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 sm:pt-24 pb-28 space-y-28">

        {/* ========================================================
            HERO SECTION
           ======================================================== */}
        <section id="top" className="space-y-8">
          
          {/* Status Bar */}
          <div className="flex items-center gap-3 text-[#78716C] font-mono text-xs">
            <span className="text-blue-700 font-serif-editorial italic text-lg">Developer & Engineer</span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              IST {currentTime || "11:30 PM"} • Available for Full-Time Roles
            </span>
          </div>

          {/* Large Hero Title */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-serif-editorial text-[#0C0A09] leading-[1.12] tracking-tight">
              Hi, I’m <strong className="font-normal font-serif-editorial italic text-[#0C0A09] underline decoration-black/30 decoration-1 underline-offset-8">{personalInfo.name}</strong>. I build reliable web apps, security systems & applied AI tools.
            </h1>
            <p className="text-[#44403C] text-base sm:text-lg md:text-xl font-normal leading-relaxed">
              I am a final-year Computer Science student at Kalpataru Institute of Technology (VTU) with an <span className="font-mono text-[#0C0A09] font-semibold bg-[#F5F5F4] px-2 py-0.5 rounded-md border border-[#E7E5E4]">8.6 CGPA</span>. Currently working as <strong className="text-[#0C0A09] font-semibold">Frontend Lead & Technical Project Manager</strong> at <a href="https://github.com/Lohith-RC" target="_blank" rel="noreferrer" className="text-blue-700 font-medium hover:underline">SkillForge</a>. I enjoy solving real problems with clean code and solid architecture.
            </p>
          </div>

          {/* Role Filter Tabs */}
          <div className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] max-w-3xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#78716C]">
              <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
                <Compass className="w-3.5 h-3.5" /> SELECT FOCUS AREA
              </span>
              <span className="text-[11px] text-[#A8A29E]">Filter projects by your interest</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {roleModes.map((role) => {
                const isActive = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`p-3 rounded-xl text-left transition-all relative border ${
                      isActive
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-md'
                        : 'bg-[#FAFAF9] border-black/[0.06] text-[#57534E] hover:bg-[#F5F5F4] hover:text-[#0C0A09]'
                    }`}
                  >
                    <div className="font-semibold text-xs flex items-center justify-between">
                      <span>{role.label}</span>
                      {isActive && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>
                    <p className={`text-[10px] mt-1 line-clamp-2 leading-snug ${isActive ? 'text-neutral-300' : 'text-[#78716C]'}`}>
                      {role.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="p-2.5 rounded-lg bg-[#FAFAF9] border border-black/[0.06] font-mono text-[11px] text-[#44403C] flex items-center gap-2">
              <Terminal className="w-3 h-3 text-blue-600 shrink-0" />
              <span className="text-[#0C0A09] font-semibold">{activeRoleData.label}:</span>
              <span className="text-[#57534E] truncate">{activeRoleData.badge}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#work" className="btn-radiant-primary">
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsAiModalOpen(true)}
              className="btn-cyber-glow"
            >
              <Bot className="w-4 h-4 text-blue-700" />
              <span>Ask AI Assistant</span>
            </button>

            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="btn-glass-tactile"
            >
              <FileText className="w-4 h-4 text-[#44403C]" />
              <span>Plaintext ATS Resume</span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="btn-glass-tactile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="story-bento-card p-4 flex flex-col justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#78716C]">{stat.label}</span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#0C0A09]">{stat.value}</span>
                  <span className="font-mono text-xs text-blue-700 font-semibold">{stat.suffix}</span>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ========================================================
            TIMELINE SECTION (Simple, clean milestones)
           ======================================================== */}
        <section id="timeline" className="space-y-6 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-black/[0.08] pb-4">
            <div>
              <span className="font-mono text-xs text-blue-700 uppercase tracking-widest block mb-1">
                01 // Timeline
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal font-serif-editorial text-[#0C0A09]">
                How I Got Here <span className="font-serif-italic text-[#78716C]">(2004 — Present)</span>
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-[#78716C]">Milestones</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
            {genesisTimeline.map((item, idx) => (
              <div 
                key={idx}
                className="story-bento-card p-4 sm:p-5 flex flex-col justify-between hover:border-black/30 transition-all group relative overflow-hidden"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0C0A09] px-2.5 py-0.5 rounded-full bg-[#F5F5F4] border border-[#E7E5E4]">
                      {item.year}
                    </span>
                    <span className="text-xs text-[#A8A29E] font-mono">0{idx + 1}</span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-sm text-[#0C0A09] group-hover:text-blue-700 transition-colors">
                      {item.phase}
                    </h3>
                    <p className="text-[11px] font-mono text-[#78716C] mt-0.5">
                      📍 {item.location}
                    </p>
                  </div>

                  <p className="text-xs text-[#57534E] leading-snug mt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-black/[0.06] flex items-center justify-between text-[10px] font-mono text-[#78716C]">
                  <span>{item.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:animate-ping" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            SELECTED PROJECTS CAROUSEL (Interactive Carousel Effect)
           ======================================================== */}
        <section id="work" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/[0.08] pb-4">
            <div>
              <span className="font-mono text-xs text-blue-700 uppercase tracking-widest block mb-1">
                02 // Selected Work
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal font-serif-editorial text-[#0C0A09]">
                Projects I've Built & Shipped.
              </h2>
            </div>
            
            {/* View Mode & Category Controls */}
            <div className="flex flex-wrap items-center gap-2">
              
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveProjectCategory(cat)}
                    className={`px-3 py-1 rounded-full font-mono text-[11px] whitespace-nowrap transition-all ${
                      activeProjectCategory === cat
                        ? 'bg-neutral-900 text-white font-bold'
                        : 'text-[#57534E] hover:text-[#0C0A09] bg-white border border-black/[0.08]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* View Mode Switcher (Carousel / Grid) */}
              <div className="flex items-center bg-[#F5F5F4] p-1 rounded-xl border border-black/[0.08]">
                <button
                  onClick={() => setViewMode("carousel")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                    viewMode === "carousel"
                      ? "bg-white text-[#0C0A09] font-bold shadow-xs"
                      : "text-[#78716C] hover:text-[#0C0A09]"
                  }`}
                  title="Carousel Slide View"
                >
                  <SlidersHorizontal size={12} />
                  <span>Carousel</span>
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-[#0C0A09] font-bold shadow-xs"
                      : "text-[#78716C] hover:text-[#0C0A09]"
                  }`}
                  title="Full Grid View"
                >
                  <LayoutGrid size={12} />
                  <span>Grid</span>
                </button>
              </div>

            </div>
          </div>

          {/* ========================================================
              VIEW 1: INTERACTIVE CAROUSEL
             ======================================================== */}
          {viewMode === "carousel" && filteredProjects.length > 0 && (
            <div className="space-y-6">
              
              {/* Carousel Navigation HUD */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#0C0A09] font-bold bg-[#F5F5F4] px-3 py-1 rounded-full border border-black/[0.08]">
                    Slide {String(carouselIndex + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-mono text-[#78716C] hidden sm:inline">
                    {currentProject?.category}
                  </span>
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSlide}
                    className="p-2 rounded-xl bg-white border border-black/[0.12] hover:bg-stone-100 text-[#0C0A09] transition-all shadow-xs active:scale-95 cursor-pointer"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="p-2 rounded-xl bg-[#0C0A09] text-white hover:bg-neutral-800 transition-all shadow-sm active:scale-95 cursor-pointer"
                    aria-label="Next project"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Animated Carousel Card Showcase */}
              <div className="relative overflow-hidden min-h-[440px]">
                <AnimatePresence mode="wait" custom={carouselDirection}>
                  <motion.div
                    key={currentProject.id}
                    custom={carouselDirection}
                    initial={{ opacity: 0, x: carouselDirection > 0 ? 80 : -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: carouselDirection > 0 ? -80 : 80 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full story-bento-card p-7 sm:p-9 flex flex-col justify-between space-y-6 border-black/[0.12] shadow-lg"
                  >
                    <div className="space-y-4">
                      
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-blue-700 font-semibold">
                              {currentProject.category}
                            </span>
                            {currentProject.featured && (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-amber-600" /> Featured
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0C0A09]">
                            {currentProject.title}
                          </h3>
                          <p className="text-xs font-mono text-[#78716C]">
                            {currentProject.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-[#44403C] text-base leading-relaxed max-w-4xl">
                        {currentProject.description}
                      </p>

                      {/* Architecture Overview */}
                      {currentProject.architectureNodes && currentProject.architectureNodes.length > 0 && (
                        <div className="p-4 rounded-xl bg-[#FAFAF9] border border-black/[0.06] space-y-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] flex items-center gap-1.5 font-semibold">
                            <Layers className="w-3.5 h-3.5 text-blue-600" /> System Architecture & Execution Steps:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                            {currentProject.architectureNodes.map((node, nIdx) => (
                              <div key={nIdx} className="p-2 rounded-lg bg-white border border-black/[0.08] text-xs">
                                <span className="font-mono text-[10px] text-blue-700 block font-semibold">Step 0{nIdx + 1}</span>
                                <span className="font-semibold text-stone-900 block mt-0.5">{node.name}</span>
                                <span className="text-[11px] text-stone-500 line-clamp-2 mt-0.5">{node.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {currentProject.stack.map((tech, tIdx) => (
                          <span key={tIdx} className="badge-pill text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics & Action Buttons */}
                    <div className="space-y-4 pt-4 border-t border-black/[0.06]">
                      <div className="grid grid-cols-3 gap-3 bg-[#FAFAF9] p-3 rounded-xl border border-black/[0.06]">
                        {currentProject.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="text-center">
                            <span className="block text-[10px] font-mono text-[#78716C] uppercase">{m.label}</span>
                            <span className="block text-xs sm:text-sm font-semibold text-[#0C0A09] mt-0.5 truncate">{m.val}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setSimulatorModalProject(currentProject)}
                          className="btn-radiant-primary text-xs py-2.5 px-4"
                        >
                          <Play className="w-3.5 h-3.5 fill-white text-white" />
                          <span>Try Interactive Demo</span>
                        </button>

                        <button
                          onClick={() => setArchitectureModalProject(currentProject)}
                          className="btn-cyber-glow text-xs py-2.5 px-4"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>View Blueprint Diagram</span>
                        </button>

                        {currentProject.demoUrl && currentProject.demoUrl.startsWith('http') && (
                          <a
                            href={currentProject.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-glass-tactile text-xs py-2.5 px-4"
                            title="Live Site"
                          >
                            <Globe className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Live Site</span>
                            <ArrowUpRight className="w-3 h-3 text-[#78716C]" />
                          </a>
                        )}

                        {currentProject.github && (
                          <a
                            href={currentProject.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-glass-tactile text-xs py-2.5 px-4"
                            title="Source Code"
                          >
                            <GithubIcon size={14} />
                            <span>GitHub Code</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Clickable Pagination Dots */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {filteredProjects.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => {
                      setCarouselDirection(dotIdx > carouselIndex ? 1 : -1);
                      setCarouselIndex(dotIdx);
                    }}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      dotIdx === carouselIndex 
                        ? 'w-8 bg-[#0C0A09]' 
                        : 'w-2 bg-stone-300 hover:bg-stone-500'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

            </div>
          )}

          {/* ========================================================
              VIEW 2: FULL GRID VIEW FALLBACK
             ======================================================== */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="story-bento-card p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-black/30 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-blue-700 font-semibold">
                          {project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0C0A09]">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-[#78716C]">
                          {project.subtitle}
                        </p>
                      </div>

                      {project.featured && (
                        <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-600" /> Featured
                        </span>
                      )}
                    </div>

                    <p className="text-[#44403C] text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture Overview */}
                    {project.architectureNodes && project.architectureNodes.length > 0 && (
                      <div className="p-3 rounded-xl bg-[#FAFAF9] border border-black/[0.06] space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] flex items-center gap-1">
                          <Layers className="w-3 h-3 text-blue-600" /> How It Works:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.architectureNodes.map((node, nIdx) => (
                            <span key={nIdx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white text-[#44403C] border border-black/[0.08]">
                              {node.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.map((tech, tIdx) => (
                        <span key={tIdx} className="badge-pill text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Metrics & Action Buttons */}
                  <div className="space-y-4 pt-4 border-t border-black/[0.06]">
                    <div className="grid grid-cols-3 gap-2 bg-[#FAFAF9] p-2.5 rounded-xl border border-black/[0.06]">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <span className="block text-[10px] font-mono text-[#78716C] uppercase">{m.label}</span>
                          <span className="block text-xs font-semibold text-[#0C0A09] mt-0.5 truncate">{m.val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => setSimulatorModalProject(project)}
                        className="btn-radiant-primary text-xs py-2 px-3.5"
                      >
                        <Play className="w-3.5 h-3.5 fill-white text-white" />
                        <span>Try Demo</span>
                      </button>

                      <button
                        onClick={() => setArchitectureModalProject(project)}
                        className="btn-cyber-glow text-xs py-2 px-3.5"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Diagram</span>
                      </button>

                      {project.demoUrl && project.demoUrl.startsWith('http') && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-glass-tactile text-xs py-2 px-3.5"
                          title="Live Site"
                        >
                          <Globe className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Live Site</span>
                          <ArrowUpRight className="w-3 h-3 text-[#78716C]" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-glass-tactile text-xs py-2 px-3.5"
                          title="Source Code"
                        >
                          <GithubIcon size={14} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </section>

        {/* ========================================================
            SKILLS & TOOLS (Clean, direct categorization)
           ======================================================== */}
        <section id="skills" className="space-y-8 scroll-mt-20">
          <div className="border-b border-black/[0.08] pb-4">
            <span className="font-mono text-xs text-blue-700 uppercase tracking-widest block mb-1">
              03 // Skills & Tools
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal font-serif-editorial text-[#0C0A09]">
              Technologies I Work With.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsCategory.map((cat, idx) => (
              <div key={idx} className="story-bento-card p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 mb-4">
                    <h3 className="font-display font-bold text-base text-[#0C0A09] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      {cat.category}
                    </h3>
                    <span className="font-mono text-[11px] text-[#78716C]">{cat.skills.length} tools</span>
                  </div>

                  <div className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-[#FAFAF9] border border-black/[0.06] hover:border-black/25 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-xs text-[#1C1917] group-hover:text-blue-700 transition-colors">
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            skill.level === 'Primary' || skill.level === 'Advanced'
                              ? 'bg-blue-50 text-blue-800 border border-blue-200'
                              : 'bg-white text-[#78716C] border border-black/[0.08]'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        {skill.note && (
                          <p className="text-[10px] text-[#57534E] mt-1 font-mono leading-tight">
                            {skill.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#78716C]">
                  <span>Hands-On Experience</span>
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            HACKATHONS & CERTIFICATIONS (Direct, clean)
           ======================================================== */}
        <section id="hackathons" className="space-y-8 scroll-mt-20">
          <div className="border-b border-black/[0.08] pb-4">
            <span className="font-mono text-xs text-blue-700 uppercase tracking-widest block mb-1">
              04 // Hackathons & Certifications
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal font-serif-editorial text-[#0C0A09]">
              Competitions & Verified Credentials.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Hackathons List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0C0A09] font-semibold flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-600" /> Hackathon Projects
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {hackathons.slice(0, 6).map((hack) => (
                  <div
                    key={hack.id}
                    onClick={() => {
                      setDrawerItem(hack);
                      setDrawerType('hackathon');
                    }}
                    className="p-4 rounded-xl bg-white border border-black/[0.08] hover:border-black/30 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] cursor-pointer group transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                          {hack.award}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm text-[#0C0A09] mt-2 group-hover:text-blue-700 transition-colors">
                        {hack.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[#78716C] mt-0.5">{hack.role}</p>
                      <p className="text-xs text-[#57534E] mt-2 line-clamp-2 leading-relaxed">{hack.desc}</p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-blue-700">
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications List */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0C0A09] font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-700" /> Cisco & Industry Certifications
              </h3>

              <div className="space-y-3">
                {certifications.slice(0, 5).map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => {
                      setDrawerItem(cert);
                      setDrawerType('certification');
                    }}
                    className="p-3.5 rounded-xl bg-white border border-black/[0.08] hover:border-black/30 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] cursor-pointer group transition-all flex items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="font-semibold text-xs text-[#0C0A09] group-hover:text-blue-700 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[#78716C] mt-0.5">{cert.issuer}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A8A29E] group-hover:text-blue-700 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            ATELIER / CONTACT (Simple English)
           ======================================================== */}
        <section id="atelier" className="space-y-8 scroll-mt-20 pt-8 border-t border-black/[0.08]">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-normal font-serif-editorial text-[#0C0A09]">
              Get In Touch
            </h2>
            <p className="text-[#78716C] font-serif-italic text-sm sm:text-base">
              Feel free to reach out for software engineering roles, project inquiries, or technical collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            
            {/* Quick Contact & Links */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0C0A09] text-white font-semibold text-sm hover:bg-neutral-800 transition-all shadow-xl shadow-black/10 group"
                >
                  <PenTool className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>Send an Email</span>
                </a>

                <p className="text-xs text-[#57534E] font-mono leading-relaxed">
                  I typically respond within 24 hours. You can also connect directly on LinkedIn or WhatsApp.
                </p>
              </div>

              {/* Direct Links */}
              <div className="space-y-2 pt-2 border-t border-black/[0.08]">
                <div className="flex flex-col gap-2 font-mono text-xs text-[#44403C]">
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700 flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                    <span className="flex items-center gap-2"><LinkedinIcon size={14} color="#0284C7" /> LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A29E]" />
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-blue-700 flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                    <span className="flex items-center gap-2"><GithubIcon size={14} /> GitHub (@Lohith-RC)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A29E]" />
                  </a>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-blue-700 flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                    <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-emerald-700" /> Phone / WhatsApp</span>
                    <span className="font-semibold">{personalInfo.phone}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Message Form */}
            <div className="lg:col-span-7">
              <div className="story-bento-card p-6 sm:p-7 space-y-4 bg-white border border-black/[0.08]">
                <h3 className="font-display font-bold text-base text-[#0C0A09]">Send a Message</h3>

                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name / Company"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF9] border border-black/[0.12] text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email Address"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF9] border border-black/[0.12] text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF9] border border-black/[0.12] text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-mono text-[#78716C]">
                      Sends directly to Lohith
                    </span>

                    <button
                      type="submit"
                      disabled={formSending}
                      className="btn-radiant-primary text-xs py-2 px-5"
                    >
                      {formSending ? "Sending..." : formSubmitted ? "Sent!" : "Send Message"}
                    </button>
                  </div>

                  {formSubmitted && (
                    <p className="text-emerald-700 text-xs font-mono font-medium">
                      ✓ Thank you! Your message has been sent. Lohith will get back to you shortly.
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Editorial Footer */}
      <footer className="relative z-10 border-t border-black/[0.08] bg-[#FAFAF9] py-8 text-xs font-mono text-[#78716C]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0C0A09]">Lohith R C</span>
            <span>•</span>
            <span className="font-serif-italic text-[#78716C]">Portfolio</span>
          </div>

          <div>
            <span>© 2026 Lohith R C. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-blue-700 transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <AiChatModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />

      <PlaintextResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {architectureModalProject && (
        <ArchitectureModal
          project={architectureModalProject}
          isOpen={!!architectureModalProject}
          onClose={() => setArchitectureModalProject(null)}
        />
      )}

      {simulatorModalProject && (
        <ProjectSimulatorModal
          project={simulatorModalProject}
          isOpen={!!simulatorModalProject}
          onClose={() => setSimulatorModalProject(null)}
        />
      )}

      <AchievementDrawer
        item={drawerItem}
        type={drawerType}
        isOpen={!!drawerItem}
        onClose={() => setDrawerItem(null)}
      />

    </div>
  );
}
