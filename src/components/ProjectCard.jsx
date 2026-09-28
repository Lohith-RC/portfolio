import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Network, Play, Sparkles, Terminal, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectCard({ project, activeRole, onOpenArchitecture, onOpenSimulator }) {
  const isMatchRole = project.roles.includes(activeRole);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`minimal-card-interactive p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group ${
        isMatchRole ? 'border-cyan-500/30 ring-1 ring-cyan-500/20' : 'border-white/8'
      }`}
    >
      <div>
        {/* Header Category & Role Indicator */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono font-medium text-cyan-400/90 tracking-wide uppercase">
            {project.category}
          </span>
          {isMatchRole && (
            <span className="badge-pill badge-pill-cyan text-[10px]">
              <Sparkles size={10} className="text-cyan-400" /> Focus Role
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-slate-400 mt-1">
          {project.subtitle}
        </p>

        {/* Narrative Description */}
        <p className="text-sm text-slate-300 mt-4 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Quantitative Metrics Bar */}
        <div className="mt-5 grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-black/40 border border-white/6 text-center">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-1.5">
              <span className="font-mono text-xs font-semibold text-slate-200">{m.val}</span>
              <span className="text-[10px] text-slate-400 mt-0.5">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.stack.map((tech, idx) => (
            <span key={idx} className="badge-pill text-[11px]">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-white/8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onOpenArchitecture(project)}
            className="btn-outline-subtle text-xs py-1.5 px-3"
            aria-label={`View architecture for ${project.title}`}
          >
            <Network size={13} className="text-cyan-400" /> Architecture
          </button>

          {project.simulatorType !== 'generic' && (
            <button
              onClick={() => onOpenSimulator(project)}
              className="btn-outline-subtle text-xs py-1.5 px-3 border-purple-500/30 text-purple-200 hover:bg-purple-500/15"
              aria-label={`Launch interactive demo for ${project.title}`}
            >
              <Play size={13} className="text-purple-400" /> Live Demo
            </button>
          )}

          {project.demoUrl && project.demoUrl !== '#' && !project.demoUrl.includes('github.com') && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-subtle text-xs py-1.5 px-3 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/15 inline-flex items-center gap-1"
            >
              <ExternalLink size={12} className="text-emerald-400" /> Live App
            </a>
          )}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 hover:text-white transition-colors"
          aria-label={`View GitHub repository for ${project.title}`}
        >
          <GithubIcon size={14} /> GitHub <ArrowUpRight size={12} />
        </a>
      </div>
    </motion.div>
  );
}
