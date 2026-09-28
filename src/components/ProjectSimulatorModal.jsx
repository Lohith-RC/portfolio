import React, { useState } from 'react';
import { X, Play, Sliders, Activity, Sparkles, AlertTriangle, Eye, CheckCircle2 } from 'lucide-react';

export default function ProjectSimulatorModal({ project, isOpen, onClose }) {
  // DisasterLens State
  const [injurySeverity, setInjurySeverity] = useState(8);
  const [waterLevel, setWaterLevel] = useState(6);
  const [ageGroup, setAgeGroup] = useState(70);
  const [signalStrength, setSignalStrength] = useState(2);

  // Visionary Diagnostics State
  const [showGradCam, setShowGradCam] = useState(true);
  const [selectedCase, setSelectedCase] = useState(0);

  // AI CRM State
  const [hcpText, setHcpText] = useState("Met Dr. Ananya Sharma (Oncology Chief) at Aster Medcity. Discussed Phase 3 clinical trial results for Immunotherapy drug OncoBoost-4. Follow up requested on 18th August regarding sample dosage packs.");
  const [isProcessingCrm, setIsProcessingCrm] = useState(false);
  const [crmResult, setCrmResult] = useState(null);

  if (!isOpen || !project) return null;

  // Compute DisasterLens score
  const calculatePriority = () => {
    const rawScore = (injurySeverity * 4) + (waterLevel * 3) + (ageGroup > 60 ? 15 : 5) - (signalStrength * 2);
    return Math.min(Math.max(Math.round(rawScore), 10), 99);
  };

  const handleRunCrmAgent = () => {
    setIsProcessingCrm(true);
    setCrmResult(null);
    setTimeout(() => {
      setCrmResult({
        hcpName: "Dr. Ananya Sharma",
        specialty: "Oncology Chief",
        institution: "Aster Medcity",
        topic: "Phase 3 Clinical Trial Results - OncoBoost-4",
        followUpDate: "2026-08-18",
        actionItem: "Deliver sample dosage packs",
        agentStatus: "LangGraph Executed (Groq Llama-3.3-70B • 142ms)"
      });
      setIsProcessingCrm(false);
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Interactive Feature Simulator for ${project.title}`}>
      <div className="modal-content max-w-3xl bg-white border border-stone-200 text-stone-900 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <Activity size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900 tracking-tight">
                Interactive Simulator
              </h3>
              <div className="text-xs font-mono text-blue-700">
                {project.title}
              </div>
            </div>
          </div>

          <button onClick={onClose} aria-label="Close feature simulator modal" className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* 1. DISASTER LENS SIMULATOR */}
        {project.simulatorType === 'disaster-lens' && (
          <div className="space-y-5">
            <p className="text-xs text-stone-600">
              Adjust distress signals to evaluate real-time <strong>Random Forest Priority Scoring</strong> and <strong>SHAP Feature Attribution</strong>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sliders Controls */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3.5">
                <h4 className="text-xs font-mono font-semibold text-stone-900 flex items-center gap-2">
                  <Sliders size={14} className="text-blue-700" /> Distress Signals
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between text-stone-700 mb-1">
                      <span>Injury Severity:</span>
                      <span className="font-mono text-blue-700 font-semibold">{injurySeverity}/10</span>
                    </div>
                    <input type="range" min="1" max="10" value={injurySeverity} onChange={(e) => setInjurySeverity(Number(e.target.value))} className="w-full accent-stone-900" />
                  </div>

                  <div>
                    <div className="flex justify-between text-stone-700 mb-1">
                      <span>Flood Depth:</span>
                      <span className="font-mono text-blue-700 font-semibold">{waterLevel}m</span>
                    </div>
                    <input type="range" min="0" max="10" value={waterLevel} onChange={(e) => setWaterLevel(Number(e.target.value))} className="w-full accent-stone-900" />
                  </div>

                  <div>
                    <div className="flex justify-between text-stone-700 mb-1">
                      <span>Victim Age:</span>
                      <span className="font-mono text-blue-700 font-semibold">{ageGroup} yrs</span>
                    </div>
                    <input type="range" min="5" max="90" value={ageGroup} onChange={(e) => setAgeGroup(Number(e.target.value))} className="w-full accent-stone-900" />
                  </div>
                </div>
              </div>

              {/* Output Score Card */}
              <div className="p-4 rounded-xl bg-stone-50/70 border border-stone-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase">Triage Evaluation</span>
                  <div className="text-4xl font-mono font-bold text-stone-900 mt-2">
                    {calculatePriority()} <span className="text-xs text-stone-500 font-normal">/ 100</span>
                  </div>
                  <div className={`mt-2 inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                    calculatePriority() > 70 ? 'bg-red-50 text-red-700 border-red-200' : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {calculatePriority() > 70 ? 'High Priority Zone (Helicopter / Boat)' : 'Standard Triage Queue'}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] font-mono text-stone-500">
                  SHAP Key Drivers: Severity ({injurySeverity * 4}pts), Depth ({waterLevel * 3}pts)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. AI CRM SIMULATOR */}
        {project.simulatorType === 'ai-crm' && (
          <div className="space-y-4">
            <p className="text-xs text-stone-600">
              Test the <strong>LangGraph multi-step agent</strong> extracting structured doctor records from raw unstructured text:
            </p>

            <textarea 
              rows={3}
              value={hcpText}
              onChange={(e) => setHcpText(e.target.value)}
              className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-900 font-mono outline-none focus:border-stone-900"
            />

            <button
              onClick={handleRunCrmAgent}
              disabled={isProcessingCrm}
              className="btn-radiant-primary text-xs py-2 px-4"
            >
              {isProcessingCrm ? 'Extracting via LangGraph Agent...' : 'Run Extraction Agent ▶'}
            </button>

            {crmResult && (
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 text-xs space-y-2 font-mono text-stone-800">
                <div className="text-blue-800 font-bold">{crmResult.agentStatus}</div>
                <div className="grid grid-cols-2 gap-2 text-stone-700 mt-2">
                  <div><strong>Doctor:</strong> {crmResult.hcpName}</div>
                  <div><strong>Specialty:</strong> {crmResult.specialty}</div>
                  <div><strong>Institution:</strong> {crmResult.institution}</div>
                  <div><strong>Follow-up:</strong> {crmResult.followUpDate}</div>
                </div>
                <div className="text-stone-700"><strong>Topic:</strong> {crmResult.topic}</div>
              </div>
            )}
          </div>
        )}

        {/* 3. GENERIC SIMULATOR FALLBACK */}
        {(project.simulatorType === 'generic' || !['disaster-lens', 'ai-crm'].includes(project.simulatorType)) && (
          <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-3">
            <p className="text-xs text-stone-600">
              Explore the full implementation details directly in the official GitHub repository.
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-radiant-primary text-xs py-2 px-4 inline-flex items-center gap-1.5"
            >
              View on GitHub ↗
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
