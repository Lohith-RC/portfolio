import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, User, RefreshCw, Zap, CheckCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function AiChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am Lohith's Portfolio AI Assistant. Ask me anything about his technical skills in Java/Python, full-stack projects, agentic workflows, or hackathon achievements!"
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
      // Focus modal on open for accessibility
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

    const systemPrompt = `You are Lohith's Portfolio AI Assistant representing Lohith R C (B.E. CS student, CGPA 8.6 at Kalpataru Institute of Technology VTU, graduating 2027).
Primary languages: Java and Python.
Technical Skills: React, Redux, FastAPI, Spring Boot, LangGraph, RAG, FAISS, TensorFlow (CNN Ensembles), scikit-learn (Random Forest, DBSCAN), Grad-CAM & SHAP Explainability, PostgreSQL, MongoDB, Cisco CCNA Series, Cisco CyberOps Associate, IBM AI, AlgoUniversity Graph Theory.
Projects: AI-First CRM (LangGraph + Groq), DisasterLens (Random Forest + DBSCAN + SHAP), Visionary Diagnostics (CNN Ensemble + Grad-CAM), Personal Knowledge Engine (PKE RAG), ModalBridge (ResNet + InfoNCE).
Experience: CodeAlpha Full Stack Development Intern.
Provide clear, professional, concise, and enthusiastic responses highlighting Lohith's skills and projects.`;

    try {
      // Call secure serverless API endpoint (holds GROQ_API_KEY server-side)
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
      console.warn("Serverless AI route unavailable, falling back to local Knowledge Base:", err);
    }

    // Fallback to local Knowledge Base if API call fails or is unavailable
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
        botAnswer = "Lohith is a final-year CS student (CGPA 8.6) proficient in both Java & Python as primary languages, React/Redux, FastAPI, Spring Boot, LangGraph, and RAG architectures. Check out his projects like AI-First CRM or DisasterLens for more details!";
      }
    }

    setMessages(prev => [...prev, { sender: 'bot', text: botAnswer }]);
    setIsTyping(false);
  };

  const sampleQuestions = [
    "Experience with Java & Spring Boot?",
    "Explain DisasterLens architecture",
    "Tell me about CodeAlpha internship",
    "What AI/ML projects has he built?"
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Ask Lohith's AI Assistant Modal">
      <motion.div 
        ref={modalRef}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="modal-content relative overflow-hidden outline-none" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          maxWidth: '680px', 
          height: '640px', 
          display: 'flex', 
          flexDirection: 'column', 
          padding: '0', 
          overflow: 'hidden',
          background: 'rgba(10, 15, 26, 0.92)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.75), inset 0 1.5px 2px rgba(255, 255, 255, 0.5), 0 0 50px rgba(6, 182, 212, 0.2)'
        }}
      >
        {/* Ambient Specular Background Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

        {/* Liquid Glass Header */}
        <div className="relative z-10 px-6 py-4 border-b border-white/20 flex items-center justify-between bg-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/30 border border-white/30">
              <Bot size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                Ask Lohith's AI Assistant
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10B981]" />
              </h3>
              <div className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5 mt-0.5">
                <Zap size={13} className="text-cyan-400" /> Secure Serverless API Endpoint Active
              </div>
            </div>
          </div>
          <button 
            onClick={onClose} 
            aria-label="Close AI Chat Modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all border border-white/20"
          >
            <X size={18} />
          </button>
        </div>

        {/* Suggestion Chips */}
        <div className="relative z-10 px-6 py-3 border-b border-white/15 bg-black/30 backdrop-blur-md flex gap-2 overflow-x-auto custom-scrollbar">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              aria-label={`Ask sample question: ${q}`}
              className="liquid-pill px-3.5 py-1.5 text-xs font-semibold text-cyan-200 whitespace-nowrap border-cyan-400/30 hover:border-cyan-400/60 hover:text-white transition-all shadow-sm"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Message Log */}
        <div className="relative z-10 flex-1 px-6 py-5 overflow-y-auto flex flex-col gap-4 custom-scrollbar">
          {messages.map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-md border border-white/30 shrink-0 mt-0.5">
                  <Bot size={16} />
                </div>
              )}
              <div 
                className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'liquid-button-primary rounded-tr-xs text-white'
                    : 'liquid-glass rounded-tl-xs text-white/95 border-white/30 shadow-lg'
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-md border border-white/30 shrink-0 mt-0.5">
                  <User size={16} />
                </div>
              )}
            </motion.div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold px-2 py-1">
              <RefreshCw size={14} className="animate-spin text-cyan-400" /> Formulating AI response...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
          className="relative z-10 p-4 border-t border-white/20 bg-white/10 backdrop-blur-xl flex gap-3"
        >
          <input 
            type="text"
            placeholder="Ask Lohith's AI about projects, skills, or experience..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="Type your message to Lohith's AI"
            className="flex-1 rounded-2xl bg-white/15 border border-white/30 px-5 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-cyan-400 focus:bg-white/20 transition-all"
          />
          <button 
            type="submit"
            aria-label="Send message to AI assistant"
            className="liquid-button-primary px-5 py-3 rounded-2xl text-sm font-bold flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </form>

      </motion.div>
    </div>
  );
}
