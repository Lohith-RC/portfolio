import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, User, RefreshCw, Zap, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function AiChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi there! I am Lohith's Portfolio AI Assistant. Ask me anything about his technical stack (Java, Python, React, FastAPI), zero-trust platforms, SkillForge leadership, or verified hackathons."
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => modalRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsTyping(true);

    let botAnswer = "";

    const systemPrompt = `You are Lohith's Portfolio AI Assistant representing Lohith R C (B.E. CS student, CGPA 8.6 at Kalpataru Institute of Technology VTU, graduating 2027, Frontend Lead & TPM @ SkillForge).
Primary languages: Java and Python.
Technical Skills: React, TypeScript, FastAPI, Spring Boot, Zero-Trust Architecture, LangGraph, RAG, FAISS, TensorFlow (CNN Ensembles), scikit-learn (Random Forest, DBSCAN), Grad-CAM & SHAP Explainability, PostgreSQL, MongoDB, Cisco CCNA Series, Cisco CyberOps Associate, IBM AI.
Key Projects: TrustSphere (Enterprise Zero-Trust), DisasterLens (DBSCAN + SHAP), MedPulse AI (LangGraph + Groq), CBRN-X (VR Emergency Simulator), MockGenius (AI Interviewer), SkillPassport.
Provide clear, concise, professional responses.`;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...newMessages.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text }))
          ]
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.choices && data.choices[0]?.message?.content) {
          botAnswer = data.choices[0].message.content;
        }
      }
    } catch (err) {
      console.warn("Serverless AI endpoint fallback to knowledge base:", err);
    }

    if (!botAnswer) {
      const lowerQuery = query.toLowerCase();
      let matched = false;
      if (resumeData.aiKnowledgeBase) {
        for (const kb of resumeData.aiKnowledgeBase) {
          if (kb.keywords.some(kw => lowerQuery.includes(kw))) {
            botAnswer = kb.answer;
            matched = true;
            break;
          }
        }
      }
      if (!matched) {
        botAnswer = "Lohith is a final-year CS student (8.6 CGPA) and Frontend Lead & TPM @ SkillForge, proficient in Java, Python, React, FastAPI, Zero-Trust security, and agentic AI systems. Explore his GitHub repos or use the contact form to reach out directly!";
      }
    }

    setMessages(prev => [...prev, { sender: 'bot', text: botAnswer }]);
    setIsTyping(false);
  };

  const sampleQuestions = [
    "Experience as Frontend Lead @ SkillForge?",
    "Explain TrustSphere Zero-Trust architecture",
    "How does DisasterLens triage work?",
    "What Cisco certifications does he hold?"
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Ask Lohith AI Assistant">
      <motion.div 
        ref={modalRef}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="modal-content relative flex flex-col h-[580px] max-w-xl p-0 overflow-hidden bg-white border border-stone-200 shadow-2xl text-stone-900" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2">
                Ask Lohith's AI
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </h3>
              <p className="text-[11px] font-mono text-stone-500">
                Knowledge Base & Portfolio Assistant
              </p>
            </div>
          </div>

          <button 
            onClick={onClose} 
            aria-label="Close AI Chat Modal"
            className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Suggestion Chips */}
        <div className="px-5 py-2.5 border-b border-stone-100 bg-stone-50/50 flex gap-1.5 overflow-x-auto">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white text-stone-700 hover:text-stone-900 border border-stone-200 hover:border-stone-400 whitespace-nowrap cursor-pointer shadow-xs transition-all"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Message Thread */}
        <div className="flex-1 px-5 py-4 overflow-y-auto flex flex-col gap-3.5 bg-stone-50/30">
          {messages.map((msg, idx) => (
            <div 
              key={idx}
              className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-6 h-6 rounded-md bg-stone-100 border border-stone-200 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                  <Bot size={13} />
                </div>
              )}

              <div 
                className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-stone-900 text-white font-medium'
                    : 'bg-white border border-stone-200 text-stone-800 shadow-xs'
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-6 h-6 rounded-md bg-stone-900 border border-stone-900 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <User size={13} />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-blue-700 text-xs font-mono px-2 py-1">
              <RefreshCw size={12} className="animate-spin" /> Thinking...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
          className="p-3.5 border-t border-stone-100 bg-white flex gap-2"
        >
          <input 
            type="text"
            placeholder="Ask about skills, architecture, or projects..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="Type question for Lohith AI"
            className="flex-1 rounded-xl bg-stone-50 border border-stone-200 px-3.5 py-2 text-xs text-stone-900 placeholder-stone-400 outline-none focus:border-stone-900"
          />
          <button 
            type="submit"
            aria-label="Send message"
            className="btn-radiant-primary text-xs py-2 px-3.5"
          >
            <Send size={14} />
          </button>
        </form>

      </motion.div>
    </div>
  );
}
