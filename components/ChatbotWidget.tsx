'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronRight, PhoneCall, RefreshCw } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/data';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: string[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: 'Hello! I am your Amaze PMS AI Concierge. How can I assist with your corporate facility management today?',
    timestamp: 'Just now',
    options: [
      '🏢 Request Facility Quote',
      '⚡ MEP & HVAC Support',
      '🛡️ Security Guard Services',
      '💧 STP / WTP Water Recycling',
    ],
  },
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateBotReply = (userQuery: string): { text: string; options?: string[] } => {
    const q = userQuery.toLowerCase();

    if (q.includes('quote') || q.includes('cost') || q.includes('price') || q.includes('rate') || q.includes('estimate')) {
      return {
        text: 'Our commercial property management rates depend on square footage and service scope. You can use our interactive ROI Calculator on the page, or tell me your total facility area (e.g., "100,000 sq ft") for an instant estimate!',
        options: ['Open ROI Calculator', 'Talk to Sales Expert', 'View All Services'],
      };
    }

    if (q.includes('mep') || q.includes('hvac') || q.includes('electrical') || q.includes('chiller') || q.includes('bms')) {
      return {
        text: 'Amaze PMS provides 24/7 technical MEP operations managed by certified HT/LT engineers. We maintain 99.98% power uptime across 25M+ Sq.Ft of Grade-A commercial space.',
        options: ['MEP Specifications', 'Request Technical Audit', 'Emergency Support (+91 9100694137)'],
      };
    }

    if (q.includes('security') || q.includes('guard') || q.includes('cctv') || q.includes('surveillance')) {
      return {
        text: 'Our security vertical is led by military veterans with 4,500+ deployed guards, RFID access control, and 24/7 CCTV command centers in Hyderabad & Bengaluru.',
        options: ['Security Guard Rates', 'Access Control Solutions', 'Book Security Survey'],
      };
    }

    if (q.includes('stp') || q.includes('wtp') || q.includes('water') || q.includes('sewage') || q.includes('zld')) {
      return {
        text: 'We operate Zero Liquid Discharge (ZLD) STP/WTP plants recycling 50 Million Liters of water daily with full Pollution Control Board (PCB) compliance.',
        options: ['Water Treatment Scope', 'PCB Audit Assistance', 'Request Site Inspection'],
      };
    }

    if (q.includes('housekeeping') || q.includes('clean') || q.includes('janitorial') || q.includes('sanitation')) {
      return {
        text: 'Our housekeeping team covers 8.5M Sq.Ft daily using Taski eco-certified chemicals and ride-on floor scrubbers for hospital campuses and corporate IT parks.',
        options: ['Housekeeping Checklist', 'Get Cleaning Quote', 'Eco-Certification Details'],
      };
    }

    if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('call') || q.includes('address')) {
      return {
        text: 'You can reach Amaze PMS HQ directly:\n📞 Call: +91 9100694137 / 040-48529944\n📧 Email: info@amazepms.com\n📍 Office: Flat 301, Plot 130, Phase 2, Kavuri Hills, Madhapur, Hyderabad - 500081.',
        options: ['Request Call Back', 'Schedule Site Visit', 'Send Email'],
      };
    }

    return {
      text: 'Thank you for your message! Amaze PMS handles complete Integrated Facility Management including MEP, Security, Housekeeping, STP/WTP, and Landscaping. How can we help your facility?',
      options: ['Explore All Services', 'Calculate ROI Cost', 'Speak to Executive'],
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: reply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: reply.options,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleOptionClick = (option: string) => {
    if (option === 'Open ROI Calculator') {
      const el = document.getElementById('roi-calculator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        return;
      }
    }
    if (option === 'View All Services' || option === 'Explore All Services') {
      const el = document.getElementById('services-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        return;
      }
    }
    handleSend(option);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-[92vw] sm:w-[380px] h-[520px] bg-[#0B1120] rounded-3xl border border-sky-500/30 shadow-2xl shadow-sky-500/10 flex flex-col overflow-hidden mb-4 glass-card"
          >
            {/* Header */}
            <div className="p-4 bg-slate-900/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-slate-950 shadow-md">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold font-heading text-white">Amaze AI Assistant</h3>
                    <span className="px-1.5 py-0.2 text-[9px] font-extrabold uppercase bg-sky-500/20 text-sky-400 rounded border border-sky-500/30">
                      24/7 Live
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">Integrated Facility Concierge</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title="Reset Conversation"
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-end gap-2 max-w-[85%]">
                    {msg.sender === 'bot' && (
                      <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0 mb-1">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}
                    <div
                      className={`p-3.5 rounded-2xl ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-br-none shadow-md'
                          : 'bg-slate-900/90 text-slate-200 border border-white/10 rounded-bl-none shadow-md'
                      }`}
                    >
                      <p className="whitespace-pre-line leading-relaxed text-[13px]">{msg.text}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>

                  {/* Option Chips */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 ml-9 max-w-[85%]">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          className="px-2.5 py-1 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-[11px] text-sky-300 font-medium transition-all hover:scale-105 flex items-center gap-1 text-left"
                        >
                          <span>{opt}</span>
                          <ChevronRight className="w-3 h-3 text-sky-400 opacity-60" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs py-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex gap-1 items-center px-3 py-2 rounded-2xl bg-slate-900 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Direct Contact Action Bar */}
            <div className="px-4 py-2 bg-slate-950/60 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">Need urgent support?</span>
              <a
                href="tel:+919100694137"
                className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-semibold text-[11px]"
              >
                <PhoneCall className="w-3 h-3" />
                <span>+91 9100694137</span>
              </a>
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about MEP, Security, Quote..."
                className="flex-1 bg-slate-950/80 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="p-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 hover:opacity-90 disabled:opacity-40 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 text-slate-950 shadow-2xl shadow-sky-500/40 flex items-center justify-center border border-white/20"
      >
        <div className="absolute inset-0 rounded-2xl bg-sky-400/30 blur-md group-hover:blur-lg transition-all" />
        <div className="relative flex items-center gap-2">
          {isOpen ? (
            <X className="w-6 h-6 text-slate-950 font-bold" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 text-slate-950" />
              <span className="hidden sm:inline font-bold text-xs tracking-wide font-heading text-slate-950">
                AI Assistant
              </span>
            </>
          )}
        </div>

        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950 animate-ping" />
        )}
      </motion.button>
    </div>
  );
}
