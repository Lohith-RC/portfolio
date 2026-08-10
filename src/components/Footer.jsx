import React from 'react';
import { Terminal, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-glass)',
      padding: '40px 24px 30px',
      background: 'rgba(9, 13, 22, 0.95)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
              <Terminal size={16} />
            </div>
            <span style={{ fontWeight: '700', color: '#FFF' }}>Lohith R C</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>| Software Engineer Portfolio</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>GitHub</a>
            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>LinkedIn</a>
            <a href={`mailto:${resumeData.personalInfo.email}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Email</a>
          </div>

          <button onClick={scrollToTop} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.78rem' }}>
            Back to top <ArrowUp size={14} />
          </button>

        </div>

        <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-dim)', gap: '12px' }}>
          <div>
            © {new Date().getFullYear()} Lohith R C. Built with React & Tailwind Glassmorphism.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            Ready for 2027 Engineering Opportunities
          </div>
        </div>

      </div>
    </footer>
  );
}
