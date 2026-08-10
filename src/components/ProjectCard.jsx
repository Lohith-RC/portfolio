import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Network, Play, Sparkles, Terminal, Layers } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectCard({ project, activeRole, onOpenArchitecture, onOpenSimulator }) {
  const isMatchRole = project.roles.includes(activeRole);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`liquid-glass-interactive p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group ${isMatchRole ? 'border-cyan-400/60 shadow-2xl shadow-cyan-500/25 ring-1 ring-cyan-400/30' : 'border-white/30'
        }`}
    >
      {/* Specular Edge & Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-500/15 blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Header Row: Category + Role Highlight Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest flex items-center gap-1.5">
            <Layers size={13} className="text-cyan-400" /> {project.category}
          </span>
          {isMatchRole && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-300 liquid-pill px-3 py-1 border-cyan-400/50 shadow-md">
              <Sparkles size={11} className="text-cyan-400 animate-pulse" /> Active Role Highlight
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <div className="text-xs font-semibold text-cyan-300 mt-1">{project.subtitle}</div>

        {/* Description */}
        <p className="text-sm text-white/90 mt-4 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Floating Mockup Preview Window */}
        <div className="mt-5 p-3 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-md shadow-inner group-hover:border-cyan-500/40 transition-all">
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/10 text-[10px] font-mono text-white/50">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-auto text-cyan-300/80">{project.id}.dev</span>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-2 text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-2 rounded-xl bg-white/5 border border-white/10">
                <div className="font-mono text-xs sm:text-sm font-bold text-white">{m.val}</div>
                <div className="text-[10px] text-white/70 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.stack.map((tech, idx) => (
            <span key={idx} className="liquid-pill px-3 py-1 text-xs text-white/90 font-semibold shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            onClick={() => onOpenArchitecture(project)}
            className="btn-secondary text-xs font-bold py-2 px-3.5"
          >
            <Network size={14} className="text-cyan-300" /> Architecture
          </button>

          {project.simulatorType !== 'generic' && (
            <button
              onClick={() => onOpenSimulator(project)}
              className="btn-secondary text-xs font-bold py-2 px-3.5 bg-purple-500/20 border-purple-400/40 text-purple-200 hover:bg-purple-500/35"
            >
              <Play size={14} className="text-purple-300" /> Interactive Demo
            </button>
          )}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-cyan-300 transition-colors"
        >
          <GithubIcon size={15} /> Code
        </a>
      </div>

    </motion.div>
  );
}
