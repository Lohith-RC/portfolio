import React from 'react';
import { ExternalLink, Network, Play, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectCard({ project, activeRole, onOpenArchitecture, onOpenSimulator }) {
  const isMatchRole = project.roles.includes(activeRole);

  return (
    <div 
      className="glass-panel" 
      style={{
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        border: isMatchRole ? '1px solid rgba(6, 182, 212, 0.4)' : '1px solid var(--border-glass)',
        boxShadow: isMatchRole ? '0 10px 30px rgba(6, 182, 212, 0.12)' : 'none'
      }}
    >
      {/* Role Highlight Badge */}
      {isMatchRole && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'rgba(6, 182, 212, 0.15)',
          color: '#38BDF8',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          borderRadius: '9999px',
          padding: '3px 10px',
          fontSize: '0.725rem',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Sparkles size={12} /> Relevant to Active Role
        </div>
      )}

      <div>
        {/* Category Pill */}
        <div style={{ fontSize: '0.8rem', color: '#8B5CF6', fontWeight: '600', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
          {project.category}
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#FFF', lineHeight: '1.3' }}>
          {project.title}
        </h3>

        <div style={{ fontSize: '0.875rem', color: '#06B6D4', marginTop: '4px', fontWeight: '500' }}>
          {project.subtitle}
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginTop: '14px' }}>
          {project.description}
        </p>

        {/* Stack Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
          {project.stack.map((tech, idx) => (
            <span key={idx} className="glass-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics Grid */}
        <div style={{
          marginTop: '20px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--border-glass)',
          borderRadius: '12px',
          padding: '12px 16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          textAlign: 'center'
        }}>
          {project.metrics.map((m, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#FFF', fontFamily: 'var(--font-mono)' }}>
                {m.val}
              </div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-glass)', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={() => onOpenArchitecture(project)} 
            className="btn-secondary" 
            style={{ padding: '8px 12px', fontSize: '0.8rem' }}
          >
            <Network size={14} /> Architecture
          </button>

          {project.simulatorType !== 'generic' && (
            <button 
              onClick={() => onOpenSimulator(project)} 
              className="btn-secondary" 
              style={{ padding: '8px 12px', fontSize: '0.8rem', background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#C084FC' }}
            >
              <Play size={14} /> Interactive Demo
            </button>
          )}
        </div>

        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontSize: '0.85rem' }}
        >
          <GithubIcon size={16} /> Code
        </a>

      </div>

    </div>
  );
}
