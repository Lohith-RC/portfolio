import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw, CheckCircle } from 'lucide-react';
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

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botAnswer = "Lohith is a final-year CS student (CGPA 8.6) proficient in both Java & Python as primary languages, React/Redux, FastAPI, Spring Boot, LangGraph, and RAG architectures. Check out his projects like AI-First CRM or DisasterLens for more details!";
      
      const lowerQuery = query.toLowerCase();
      for (const kb of resumeData.aiKnowledgeBase) {
        if (kb.keywords.some(kw => lowerQuery.includes(kw))) {
          botAnswer = kb.answer;
          break;
        }
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botAnswer }]);
      setIsTyping(false);
    }, 700);
  };

  const sampleQuestions = [
    "Experience with Java & Spring Boot?",
    "Explain DisasterLens architecture",
    "Tell me about CodeAlpha internship",
    "What AI/ML projects has he built?"
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '650px', height: '620px', display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}
      >
        
        {/* Modal Header */}
        <div style={{
          padding: '16px 20px',
          background: 'rgba(15, 23, 42, 0.95)',
          borderBottom: '1px solid var(--border-glass)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF'
            }}>
              <Bot size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFF' }}>
                Ask Lohith's AI Assistant
              </h3>
              <div style={{ fontSize: '0.75rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle size={12} /> Sourced from Verified Resume Knowledge Base
              </div>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-glass)', display: 'flex', gap: '8px', overflowX: 'auto' }}>
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              style={{
                whiteSpace: 'nowrap',
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                color: '#38BDF8',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Message Log */}
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {messages.map((msg, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-start',
                gap: '10px'
              }}
            >
              {msg.sender === 'bot' && (
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', flexShrink: 0 }}>
                  <Bot size={14} />
                </div>
              )}
              <div style={{
                maxWidth: '82%',
                padding: '12px 16px',
                borderRadius: '16px',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                background: msg.sender === 'user' ? 'linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: '#FFF',
                border: msg.sender === 'bot' ? '1px solid var(--border-glass)' : 'none',
                borderTopRightRadius: msg.sender === 'user' ? '4px' : '16px',
                borderTopLeftRadius: msg.sender === 'bot' ? '4px' : '16px'
              }}>
                {msg.text}
              </div>
              {msg.sender === 'user' && (
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#06B6D4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', flexShrink: 0 }}>
                  <User size={14} />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.825rem' }}>
              <RefreshCw size={14} className="animate-spin" /> Thinking...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} style={{ padding: '16px', borderTop: '1px solid var(--border-glass)', display: 'flex', gap: '10px' }}>
          <input 
            type="text"
            placeholder="Type your question about Lohith..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1,
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-glass)',
              borderRadius: '12px',
              padding: '10px 16px',
              color: '#FFF',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
          <button 
            type="submit"
            className="btn-primary" 
            style={{ padding: '10px 16px', borderRadius: '12px' }}
          >
            <Send size={16} />
          </button>
        </form>

      </div>
    </div>
  );
}
