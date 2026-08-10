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

  const cases = [
    { title: "Sample Histopathology Slide #104", diagnosis: "OSCC Positive (High Grade)", confidence: "96.4%", vggScore: "95%", resnetScore: "97%", effScore: "96%" },
    { title: "Sample Histopathology Slide #218", diagnosis: "OSCC Positive (Moderate Grade)", confidence: "89.1%", vggScore: "87%", resnetScore: "91%", effScore: "89%" }
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Interactive Feature Simulator for ${project.title}`}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-glass)', paddingBottom: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Activity size={22} color="#8B5CF6" />
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFF' }}>
                Interactive Feature Simulator
              </h3>
              <div style={{ fontSize: '0.825rem', color: '#C084FC' }}>
                Live Demo for: {project.title}
              </div>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close feature simulator modal" style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* 1. DISASTER LENS SIMULATOR */}
        {project.simulatorType === 'disaster-lens' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Adjust victim distress metrics to see real-time <strong>Random Forest SOS Priority Scoring</strong> and <strong>SHAP Feature Explainability</strong> calculations:
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              
              {/* Sliders Controls */}
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '18px', borderRadius: '14px', border: '1px solid var(--border-glass)' }}>
                <h4 style={{ color: '#FFF', fontSize: '0.95rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sliders size={16} color="#06B6D4" /> Telemetry Inputs
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.85rem' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFF', marginBottom: '4px' }}>
                      <span>Injury Severity (1-10):</span>
                      <strong style={{ color: '#06B6D4' }}>{injurySeverity}</strong>
                    </div>
                    <input type="range" min="1" max="10" value={injurySeverity} onChange={(e) => setInjurySeverity(Number(e.target.value))} style={{ width: '100%' }} />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFF', marginBottom: '4px' }}>
                      <span>Water / Flood Depth (Meters):</span>
                      <strong style={{ color: '#06B6D4' }}>{waterLevel}m</strong>
                    </div>
                    <input type="range" min="0" max="10" value={waterLevel} onChange={(e) => setWaterLevel(Number(e.target.value))} style={{ width: '100%' }} />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFF', marginBottom: '4px' }}>
                      <span>Victim Age:</span>
                      <strong style={{ color: '#06B6D4' }}>{ageGroup} yrs</strong>
                    </div>
                    <input type="range" min="5" max="90" value={ageGroup} onChange={(e) => setAgeGroup(Number(e.target.value))} style={{ width: '100%' }} />
                  </div>
                </div>
              </div>

              {/* Priority Output & SHAP Graph */}
              <div style={{ background: 'rgba(15, 23, 42, 0.9)', padding: '18px', borderRadius: '14px', border: '1px solid rgba(6, 182, 212, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Calculated Priority Score</div>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: calculatePriority() > 70 ? '#EF4444' : '#F59E0B', fontFamily: 'var(--font-mono)' }}>
                    {calculatePriority()} <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>/ 100</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                    <AlertTriangle size={14} /> Assigned Zone: Rescue Sector Beta (DBSCAN Clustered)
                  </div>
                </div>

                <div style={{ marginTop: '16px', borderTop: '1px solid var(--border-glass)', paddingTop: '12px' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '8px' }}>SHAP Feature Contribution:</div>
                  <div style={{ fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>+ Injury Severity</span>
                      <span style={{ color: '#EF4444' }}>+{injurySeverity * 4} pts</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>+ Flood Level</span>
                      <span style={{ color: '#F59E0B' }}>+{waterLevel * 3} pts</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>+ Vulnerability (Age)</span>
                      <span style={{ color: '#8B5CF6' }}>+{ageGroup > 60 ? 15 : 5} pts</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 2. VISIONARY DIAGNOSTICS SIMULATOR */}
        {project.simulatorType === 'visionary-diagnostics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Test clinical CNN ensemble predictions and toggle <strong>Grad-CAM explainability heatmaps</strong>:
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Image Preview Box */}
              <div style={{ background: '#090D16', padding: '16px', borderRadius: '14px', border: '1px solid var(--border-glass)', textAlign: 'center' }}>
                <div style={{ height: '200px', borderRadius: '10px', background: showGradCam ? 'radial-gradient(circle at 40% 40%, rgba(239, 68, 68, 0.7) 0%, rgba(245, 158, 11, 0.4) 40%, rgba(37, 99, 235, 0.2) 70%, #1E293B 100%)' : '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 'bold', border: '1px dashed #38BDF8' }}>
                  {showGradCam ? '🔥 Grad-CAM Heatmap Active' : '🔬 Raw Histopathology Slide'}
                </div>

                <button 
                  onClick={() => setShowGradCam(!showGradCam)} 
                  className="btn-secondary" 
                  style={{ marginTop: '14px', width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  <Eye size={16} /> {showGradCam ? 'Hide Grad-CAM Overlay' : 'Show Grad-CAM Overlay'}
                </button>
              </div>

              {/* Prediction Details */}
              <div style={{ background: 'rgba(15, 23, 42, 0.9)', padding: '18px', borderRadius: '14px', border: '1px solid rgba(139, 92, 246, 0.3)', fontSize: '0.875rem' }}>
                <div style={{ color: '#8B5CF6', fontWeight: '700', fontSize: '1.05rem', marginBottom: '8px' }}>
                  {cases[selectedCase].diagnosis}
                </div>
                <div style={{ color: '#10B981', fontWeight: '600', marginBottom: '14px' }}>
                  Ensemble Confidence: {cases[selectedCase].confidence}
                </div>

                <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Individual Model Votes:</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>ResNet50:</span> <strong>{cases[selectedCase].resnetScore}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>EfficientNet-B0:</span> <strong>{cases[selectedCase].effScore}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>VGG16:</span> <strong>{cases[selectedCase].vggScore}</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 3. AI CRM SIMULATOR */}
        {project.simulatorType === 'ai-crm' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Enter unstructured doctor interaction notes and trigger the <strong>LangGraph Multi-Step Agent Workflow</strong>:
            </div>

            <textarea 
              rows={3}
              value={hcpText}
              onChange={(e) => setHcpText(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-glass)',
                borderRadius: '12px',
                padding: '12px',
                color: '#FFF',
                fontSize: '0.875rem',
                outline: 'none'
              }}
            />

            <button onClick={handleRunCrmAgent} disabled={isProcessingCrm} className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              <Play size={16} /> {isProcessingCrm ? 'Running Agent State Machine...' : 'Execute LangGraph Agent Workflow'}
            </button>

            {crmResult && (
              <div style={{ background: '#090D16', padding: '16px', borderRadius: '12px', border: '1px solid #10B981', marginTop: '10px' }}>
                <div style={{ color: '#10B981', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                  <CheckCircle2 size={16} /> {crmResult.agentStatus}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem', color: '#FFF' }}>
                  <div>Doctor: <strong>{crmResult.hcpName}</strong></div>
                  <div>Specialty: <strong>{crmResult.specialty}</strong></div>
                  <div>Hospital: <strong>{crmResult.institution}</strong></div>
                  <div>Follow-up: <strong>{crmResult.followUpDate}</strong></div>
                  <div style={{ gridColumn: 'span 2', color: '#38BDF8' }}>Topic: {crmResult.topic}</div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
