import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import Certifications from './components/Certifications';
import ResumeExporter from './components/ResumeExporter';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AiChatModal from './components/AiChatModal';
import ArchitectureModal from './components/ArchitectureModal';
import ProjectSimulatorModal from './components/ProjectSimulatorModal';

import { resumeData } from './data/resumeData';
import { Bot, Sparkles, Filter } from 'lucide-react';

export default function App() {
  const [activeRole, setActiveRole] = useState('fullstack');
  const [aiBotOpen, setAiBotOpen] = useState(false);
  const [archProject, setArchProject] = useState(null);
  const [simProject, setSimProject] = useState(null);
  const [projectCategoryFilter, setProjectCategoryFilter] = useState('All');

  const categories = ['All', 'Agentic AI & Full-Stack', 'Machine Learning & Rescue Analytics', 'Deep Learning & Diagnostic Web App', 'RAG & LLM Application'];

  const filteredProjects = resumeData.projects.filter(p => {
    if (projectCategoryFilter === 'All') return true;
    return p.category === projectCategoryFilter;
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation */}
      <Navbar activeRole={activeRole} setActiveRole={setActiveRole} />

      {/* Hero Section */}
      <Hero activeRole={activeRole} onOpenAiBot={() => setAiBotOpen(true)} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>

        {/* PROJECTS SHOWCASE SECTION */}
        <section id="projects" style={{ padding: '80px 24px', position: 'relative' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ fontSize: '0.85rem', color: '#06B6D4', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
                Featured Engineering Work
              </div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#FFF', marginTop: '6px' }}>
                Flagship Systems & Applications
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '10px' }}>
                Every project includes interactive system architecture diagrams and live feature simulators.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setProjectCategoryFilter(cat)}
                  style={{
                    background: projectCategoryFilter === cat ? 'linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)' : 'rgba(255, 255, 255, 0.04)',
                    border: projectCategoryFilter === cat ? '1px solid #38BDF8' : '1px solid var(--border-glass)',
                    color: projectCategoryFilter === cat ? '#FFF' : 'var(--text-muted)',
                    borderRadius: '10px',
                    padding: '8px 16px',
                    fontSize: '0.85rem',
                    fontWeight: projectCategoryFilter === cat ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  activeRole={activeRole}
                  onOpenArchitecture={(p) => setArchProject(p)}
                  onOpenSimulator={(p) => setSimProject(p)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Skills Matrix Section */}
        <SkillsMatrix activeRole={activeRole} />

        {/* Experience & Hackathons Section */}
        <ExperienceTimeline />

        {/* Certifications Section */}
        <Certifications />

        {/* Interactive Resume Exporter Section */}
        <ResumeExporter activeRole={activeRole} />

        {/* Contact Section */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Launcher Button */}
      <button
        onClick={() => setAiBotOpen(true)}
        className="animate-glow"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 40,
          background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
          color: '#FFF',
          border: 'none',
          borderRadius: '9999px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: '700',
          fontSize: '0.9rem',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(139, 92, 246, 0.4)'
        }}
      >
        <Bot size={20} /> Ask Lohith's AI
      </button>

      {/* Modals */}
      <AiChatModal 
        isOpen={aiBotOpen} 
        onClose={() => setAiBotOpen(false)} 
      />

      <ArchitectureModal 
        project={archProject} 
        isOpen={Boolean(archProject)} 
        onClose={() => setArchProject(null)} 
      />

      <ProjectSimulatorModal 
        project={simProject} 
        isOpen={Boolean(simProject)} 
        onClose={() => setSimProject(null)} 
      />

    </div>
  );
}
