import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Code2, Bot, FileText, ArrowRight, ShieldCheck, Award, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { resumeData } from '../data/resumeData';

export default function Hero({ activeRole, onOpenAiBot }) {
  const [typedText, setTypedText] = useState('');
  const rolesText = ["Full-Stack Software Engineer", "Agentic AI Developer (LangGraph)", "Java & Python Systems Architect"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = rolesText[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setTypedText(current.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(current.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % rolesText.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const activeRoleInfo = resumeData.roleModes.find(r => r.id === activeRole) || resumeData.roleModes[0];

  return (
    <section style={{ paddingTop: '140px', paddingBottom: '70px', position: 'relative' }}>
      
      {/* Glow Circles */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* Top Status Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '9999px',
            padding: '6px 16px',
            color: '#38BDF8',
            fontSize: '0.85rem',
            fontWeight: '600'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 10px #10B981' }} />
            Open for Software Engineer Roles • Batch 2027 (CGPA 8.6)
          </div>
        </div>

        {/* Main Headline */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '16px' }}>
            Hi, I'm <span className="gradient-text">Lohith R C</span>
          </h1>

          <div style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: '600', color: 'var(--text-muted)', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span>Building</span>
            <span className="font-mono" style={{ color: '#06B6D4', borderRight: '2px solid #06B6D4', paddingRight: '4px' }}>
              {typedText}
            </span>
          </div>

          {/* Role Filter Indicator Box */}
          <div style={{ 
            marginTop: '20px', 
            background: 'rgba(15, 23, 42, 0.8)', 
            border: '1px solid rgba(139, 92, 246, 0.3)', 
            borderRadius: '16px', 
            padding: '14px 20px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
          }}>
            <Sparkles size={18} color="#8B5CF6" />
            <div style={{ textAlign: 'left', fontSize: '0.85rem' }}>
              <span style={{ color: '#8B5CF6', fontWeight: '700' }}>Active View: {activeRoleInfo.label}</span>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{activeRoleInfo.description}</div>
            </div>
          </div>

          <p style={{ marginTop: '24px', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '780px', margin: '24px auto 0' }}>
            Final-year CS student with hands-on full-stack experience across <strong style={{ color: '#FFF' }}>Java & Python (both primary)</strong>, Spring Boot, FastAPI, and React/Redux. Built RAG platforms, multi-agent LLM systems, CNN ensembles with Grad-CAM explainability, and emergency triage platforms under 24-hr hackathon constraints.
          </p>

          {/* Hero CTAs */}
          <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <a href="#projects" className="btn-primary">
              View Flagship Projects <ArrowRight size={18} />
            </a>

            <button onClick={onOpenAiBot} className="btn-secondary" style={{ background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#C084FC' }}>
              <Bot size={18} /> Ask Lohith's AI Assistant
            </button>

            <a href="#resume" className="btn-secondary">
              <FileText size={18} /> View Resume
            </a>
          </div>

          {/* Social Links */}
          <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '0.9rem' }}>
              <GithubIcon size={18} /> GitHub
            </a>
            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '0.9rem' }}>
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a href={`mailto:${resumeData.personalInfo.email}`} style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '0.9rem' }}>
              <ExternalLink size={18} /> {resumeData.personalInfo.email}
            </a>
          </div>

        </div>

        {/* Live Metric Stats Bar */}
        <div style={{
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {resumeData.stats.map((stat, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#06B6D4', fontFamily: 'var(--font-mono)' }}>
                {stat.value}<span style={{ fontSize: '1.2rem', color: '#8B5CF6' }}>{stat.suffix}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px', fontWeight: '500' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
