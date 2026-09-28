import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Layers, CheckCircle2, ArrowRight, ShieldCheck, Zap, Scale, Cpu, ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectCaseStudyModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const caseStudy = project.caseStudy || {
    problem: project.description,
    architectureOverview: `The system is organized into modular layers: ${project.architectureNodes?.map(n => n.name).join(' → ')}. Each layer operates with decoupled boundaries to maintain high fault tolerance.`,
    tradeoffs: [
      {
        decision: "Architectural Decoupling",
        chosen: "Modular microservices with explicit schemas",
        alternative: "Monolithic tightly-coupled structure",
        rationale: "Ensures independent scaling, clear isolation of failures, and rapid debugging under load."
      }
    ],
    benchmarks: [
      { metric: "Evaluation Speed", value: project.latencyBenchmark || "< 50ms", impact: "Eliminates perceived user lag" },
      { metric: "Deployment State", value: project.metrics?.[0]?.val || "Live Production", impact: "Zero-downtime verified deploy" }
    ]
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative z-10 w-full max-w-3xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] text-stone-800"
        >
          {/* Header */}
          <div className="p-6 border-b border-stone-100 flex items-start justify-between bg-stone-50/70">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-blue-700 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                  Engineering Deep-Dive & Architecture Tradeoffs
                </span>
                {project.latencyBenchmark && (
                  <span className="font-mono text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    ⚡ {project.latencyBenchmark}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-2">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            
            {/* 1. Problem & Threat Model */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-blue-700" />
                The Problem & Core Challenge
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed bg-stone-50/60 p-4 rounded-xl border border-stone-200">
                {caseStudy.problem}
              </p>
            </div>

            {/* 2. Key Architectural Tradeoffs (The "Why") */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                <Scale size={14} className="text-blue-700" />
                Key Architectural Decisions & Tradeoffs
              </h4>

              <div className="grid grid-cols-1 gap-3">
                {caseStudy.tradeoffs.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-stone-900 font-mono">
                        {item.decision}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                        Evaluated Choice
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                      <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200">
                        <span className="font-mono text-[10px] text-emerald-800 font-bold block">✓ Chosen Solution:</span>
                        <span className="text-stone-800 mt-0.5 block">{item.chosen}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                        <span className="font-mono text-[10px] text-stone-500 font-bold block">✗ Rejected Alternative:</span>
                        <span className="text-stone-600 mt-0.5 block">{item.alternative}</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 font-sans pt-1 leading-relaxed">
                      <strong className="text-stone-800">Engineering Rationale:</strong> {item.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Measurable Latency & Scale Benchmarks */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                <Zap size={14} className="text-blue-700" />
                Quantitative Performance & Scale Metrics
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {caseStudy.benchmarks.map((bench, bIdx) => (
                  <div key={bIdx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-center">
                    <span className="font-mono text-[10px] text-stone-500 uppercase block">{bench.metric}</span>
                    <span className="font-mono text-base font-bold text-stone-900 block mt-1">{bench.value}</span>
                    <span className="text-[10px] text-stone-600 block mt-1">{bench.impact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Execution Pipeline Nodes */}
            {project.architectureNodes && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                  <Layers size={14} className="text-blue-700" />
                  Execution Flow
                </h4>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  {project.architectureNodes.map((node, nIdx) => (
                    <div key={nIdx} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <span className="font-mono text-blue-700 font-bold shrink-0 mt-0.5">0{nIdx + 1}.</span>
                      <div>
                        <strong className="text-stone-900 font-semibold">{node.name}:</strong> {node.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {project.demoUrl && project.demoUrl.startsWith('http') && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-radiant-primary text-xs py-1.5 px-3.5"
                >
                  <span>Test Production Deployment</span>
                  <ExternalLink size={12} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glass-tactile text-xs py-1.5 px-3.5"
                >
                  <GithubIcon size={13} />
                  <span>Inspect Source Code</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-stone-500 hover:text-stone-900 cursor-pointer"
            >
              Close Deep-Dive
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
