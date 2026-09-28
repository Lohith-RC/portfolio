import React, { useState } from 'react';
import { X, Network, ArrowRight, Info, Code2 } from 'lucide-react';

export default function ArchitectureModal({ project, isOpen, onClose }) {
  const [selectedNode, setSelectedNode] = useState(0);

  if (!isOpen || !project) return null;

  const nodes = project.architectureNodes || [
    { name: "Client UI Layer", desc: "User interface handling user interaction, telemetry capture, and local state." },
    { name: "API Gateway / Server", desc: "RESTful endpoints managing authentication, token lifecycle, and request routing." },
    { name: "Core Engine / Logic", desc: "Algorithmic pipelines, zero-trust policy evaluation, or agentic workflows." },
    { name: "Database & Storage", desc: "Persistent database tables, vector indexes, or session stores." }
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`System Architecture Flow for ${project.title}`}>
      <div className="modal-content max-w-3xl bg-white border border-stone-200 text-stone-900 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <Network size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900 tracking-tight">
                System Architecture Blueprint
              </h3>
              <div className="text-xs font-mono text-blue-700">
                {project.title}
              </div>
            </div>
          </div>

          <button 
            onClick={onClose} 
            aria-label="Close architecture modal" 
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Node Flow Map */}
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
          <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
            Execution Pipeline (Click steps to inspect)
          </div>

          <div className="flex items-center flex-wrap gap-2.5">
            {nodes.map((node, idx) => (
              <React.Fragment key={idx}>
                <button
                  onClick={() => setSelectedNode(idx)}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                    selectedNode === idx
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'bg-white border border-stone-200 hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  <div className={`text-[10px] font-mono ${selectedNode === idx ? 'text-blue-300' : 'text-blue-700'}`}>
                    Step 0{idx + 1}
                  </div>
                  <div className="font-semibold text-xs mt-0.5">
                    {node.name}
                  </div>
                </button>
                {idx < nodes.length - 1 && (
                  <ArrowRight size={14} className="text-stone-400 hidden sm:inline-block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Node Inspection Box */}
        <div className="mt-4 p-4 rounded-xl bg-stone-50/70 border border-stone-200 flex items-start gap-3">
          <Info size={18} className="text-blue-700 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-mono font-semibold text-stone-900">
              {nodes[selectedNode].name}
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              {nodes[selectedNode].desc}
            </p>
          </div>
        </div>

        {/* Code Snippet */}
        {project.codeSnippet && (
          <div className="mt-4">
            <div className="text-[11px] font-mono text-stone-500 mb-2 flex items-center gap-1.5">
              <Code2 size={13} className="text-blue-700" /> Implementation Excerpt
            </div>
            <pre className="p-4 rounded-xl bg-stone-900 border border-stone-800 font-mono text-xs text-stone-100 overflow-x-auto leading-relaxed max-h-56">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}

      </div>
    </div>
  );
}
