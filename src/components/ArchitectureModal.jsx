import React, { useState } from 'react';
import { X, Network, Server, Database, Cpu, Layers, ArrowRight, Info } from 'lucide-react';

export default function ArchitectureModal({ project, isOpen, onClose }) {
  const [selectedNode, setSelectedNode] = useState(0);

  if (!isOpen || !project) return null;

  const nodes = project.architectureNodes || [
    { name: "Client UI Layer", desc: "User interface handling user interaction and state updates." },
    { name: "API Gateway / Server", desc: "RESTful endpoints managing auth tokens and request routing." },
    { name: "Core Engine / Logic", desc: "Algorithmic pipelines, ML inference, or agent orchestration." },
    { name: "Database & Storage", desc: "Persistent database tables or vector indexes." }
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`System Architecture Flow for ${project.title}`}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-glass)', paddingBottom: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Network size={22} color="#06B6D4" />
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFF' }}>
                System Architecture Flow
              </h3>
              <div style={{ fontSize: '0.825rem', color: '#38BDF8' }}>
                {project.title}
              </div>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close architecture modal" style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Node Flow Map */}
        <div style={{
          background: 'rgba(9, 13, 22, 0.6)',
          border: '1px solid var(--border-glass)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          
          <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Interactive Execution Pipeline (Click nodes to inspect details)
          </div>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {nodes.map((node, idx) => (
              <React.Fragment key={idx}>
                <button
                  onClick={() => setSelectedNode(idx)}
                  style={{
                    background: selectedNode === idx ? 'linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)' : 'rgba(255, 255, 255, 0.05)',
                    border: selectedNode === idx ? '1px solid #38BDF8' : '1px solid var(--border-glass)',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    color: '#FFF',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                    minWidth: '160px',
                    boxShadow: selectedNode === idx ? '0 0 20px rgba(6, 182, 212, 0.4)' : 'none'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', opacity: 0.8, color: selectedNode === idx ? '#E0F2FE' : '#94A3B8', fontFamily: 'var(--font-mono)' }}>
                    Step 0{idx + 1}
                  </div>
                  <div style={{ fontWeight: '600', fontSize: '0.9rem', marginTop: '2px' }}>
                    {node.name}
                  </div>
                </button>
                {idx < nodes.length - 1 && (
                  <ArrowRight size={18} color="var(--text-dim)" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* Selected Node Details Box */}
        <div style={{
          marginTop: '20px',
          background: 'rgba(15, 23, 42, 0.9)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start'
        }}>
          <Info size={24} color="#8B5CF6" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFF', fontWeight: '700' }}>
              Node Inspection: {nodes[selectedNode].name}
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px', lineHeight: '1.6' }}>
              {nodes[selectedNode].desc}
            </p>
          </div>
        </div>

        {/* Code Snippet Preview */}
        {project.codeSnippet && (
          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-dim)', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
              Core Code Snippet:
            </div>
            <pre style={{
              background: '#090D16',
              border: '1px solid var(--border-glass)',
              borderRadius: '12px',
              padding: '16px',
              color: '#38BDF8',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.825rem',
              overflowX: 'auto',
              lineHeight: '1.5'
            }}>
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}

      </div>
    </div>
  );
}
