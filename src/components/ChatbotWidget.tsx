"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ExternalLink,
  Calendar,
} from "lucide-react";
import NovaLiveBot from "@/components/NovaLiveBot";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
  hasCta?: boolean;
}

const CALENDLY =
  "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws";

const SAMPLE_PROMPTS = [
  "What is PDMaaS vs Ignite?",
  "How fast can we get an AWS listing?",
  "What are AWS PRM requirements?",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hi — I'm Nova, your cloud GTM assistant. Ask about marketplace listings, co-sell, or book a strategy session.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, typing, isOpen]);

  useEffect(() => {
    if (isOpen) setShowHint(false);
  }, [isOpen]);

  const reply = () => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Great question. For a tailored roadmap on listing + co-sell, book a 30-min Founder Strategy Session with our operator team.",
          hasCta: true,
        },
      ]);
    }, 700);
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInput("");
    reply();
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <aside aria-label="SaaSNova AI Assistant" className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {isOpen && (
        <div className="absolute bottom-[4.75rem] right-0 flex h-[min(560px,calc(100vh-7.5rem))] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_28px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl animate-rise">
          {/* Soft brand glow inside panel */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-400/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-8 top-24 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-200/70 bg-white/50 px-4 py-3.5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#008BF8] via-[#7C3AED] to-[#FA0F9C] p-[1.5px] shadow-lg shadow-pink-500/20">
                  <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950 overflow-hidden">
                    <NovaLiveBot size={38} isTyping={typing} />
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-sm font-bold text-slate-900">
                    Spark
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-pink-500/10 to-sky-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-700 ring-1 ring-sky-200/80">
                    Live
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500">
                  Cloud marketplace &amp; co-sell help
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-xl border border-slate-200/80 bg-white/70 p-2 text-slate-500 transition hover:border-slate-300 hover:text-slate-800"
              aria-label="Close Assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={listRef} className="relative z-10 flex-1 space-y-3.5 overflow-y-auto px-4 py-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-pink-100 ring-1 ring-white">
                    <Image src="/logo-favicon.png" alt="" width={14} height={14} />
                  </div>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
                    msg.sender === "user"
                      ? "rounded-br-md bg-gradient-to-br from-pink-500 via-fuchsia-500 to-sky-500 text-white"
                      : "rounded-bl-md border border-white/80 bg-white/90 text-slate-700"
                  }`}
                >
                  <p className="text-[13px] leading-relaxed">{msg.text}</p>
                  {msg.hasCta && (
                    <Link
                      href={CALENDLY}
                      target="_blank"
                      className="btn-gradient btn-shimmer mt-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-bold text-white"
                    >
                      <Calendar className="relative z-10 h-3.5 w-3.5" />
                      <span className="relative z-10">Book Strategy Session</span>
                      <ExternalLink className="relative z-10 h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-pink-100">
                  <Image src="/logo-favicon.png" alt="" width={14} height={14} />
                </div>
                <div className="flex items-center gap-1 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-3 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                </div>
              </div>
            )}

            {messages.length === 1 && !typing && (
              <div className="pt-1">
                <div className="mb-2.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  <Sparkles className="h-3 w-3 text-pink-500" />
                  Try asking
                </div>
                <div className="flex flex-col gap-2">
                  {SAMPLE_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => send(prompt)}
                      className="group rounded-2xl border border-slate-200/80 bg-white/70 px-3.5 py-2.5 text-left text-xs font-medium text-slate-600 shadow-sm transition hover:border-pink-200 hover:bg-white hover:text-slate-900 hover:shadow-md"
                    >
                      <span className="bg-gradient-to-r from-pink-500 to-sky-500 bg-clip-text text-transparent opacity-0 transition group-hover:opacity-100">
                        →{" "}
                      </span>
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={handleSend}
            className="relative z-10 border-t border-slate-200/70 bg-white/60 p-3 backdrop-blur-md"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-2 py-1.5 shadow-sm focus-within:border-sky-300 focus-within:ring-2 focus-within:ring-sky-100">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AWS, Azure, GCP GTM..."
                className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-xs text-slate-800 placeholder-slate-400 outline-none"
              />
              <button
                type="submit"
                className="btn-gradient flex h-9 w-9 shrink-0 items-center justify-center rounded-xl disabled:opacity-40"
                disabled={!input.trim() || typing}
                aria-label="Send message"
              >
                <Send className="relative z-10 h-3.5 w-3.5" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-400">
              Preview assistant · For real answers, book a call
            </p>
          </form>
        </div>
      )}

      {/* Launcher (Live animated NovaBot with name pill badge below) */}
      <div className="relative flex flex-col items-center justify-end gap-1.5">
        {/* Suggestion 3: Sparkle Confetti Burst on Click */}
        {showConfetti && (
          <div className="pointer-events-none absolute -inset-6 z-30 flex items-center justify-center">
            <span className="absolute -top-2 left-2 h-2.5 w-2.5 rotate-12 rounded-sm bg-pink-400 animate-ping" />
            <span className="absolute -top-4 right-3 h-3 w-3 rounded-full bg-cyan-400 animate-ping delay-75" />
            <span className="absolute bottom-2 -left-3 h-2 w-2 rounded-full bg-violet-400 animate-ping delay-100" />
            <span className="absolute -bottom-2 right-1 h-2.5 w-2.5 rotate-45 rounded-sm bg-amber-400 animate-ping delay-150" />
          </div>
        )}

        <button
          onClick={() => {
            if (!isOpen) {
              setShowConfetti(true);
              setTimeout(() => setShowConfetti(false), 900);
            }
            setIsOpen(!isOpen);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative flex items-center justify-center p-1 select-none transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label={isOpen ? "Close GTM Assistant" : "Open GTM Assistant"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white shadow-xl border border-white/20">
              <X className="h-6 w-6 text-white transition-transform duration-200 group-hover:rotate-90" />
            </div>
          ) : (
            <div className="relative flex items-center justify-center">
              {/* Soft luminous ambient aura behind bot */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#008BF8]/30 via-[#7C3AED]/25 to-[#FA0F9C]/30 blur-xl scale-125" />

              {/* Live Animated Nova Bot Mascot */}
              <div className="relative z-10 filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.25)]">
                <NovaLiveBot size={72} isTyping={typing} isHovered={isHovered} />
              </div>

              {/* Live green active badge */}
              <span className="absolute right-0 top-0 z-20 flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
              </span>
            </div>
          )}
        </button>

        {/* ─── Conversational Multi-line Speech Bubble Below Widget ─── */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group/bubble relative mt-2 w-max max-w-[195px] select-none text-center transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Open chat with Spark"
          >
            {/* Ambient soft glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#008BF8] via-[#7C3AED] to-[#FA0F9C] opacity-25 blur-md transition-opacity duration-300 group-hover/bubble:opacity-55" />

            {/* Bubble Container with delicate brand border */}
            <div className="relative rounded-2xl bg-gradient-to-r from-[#008BF8]/70 via-[#7C3AED]/70 to-[#FA0F9C]/70 p-[1.5px] shadow-[0_8px_24px_rgba(15,23,42,0.18)]">
              {/* Upward pointing pointer tail centered directly below the bot circle */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-l border-t border-purple-400/80 bg-slate-950" />

              <div className="relative flex flex-col items-center rounded-[14px] bg-slate-950/95 px-3.5 py-2 backdrop-blur-xl">
                <p className="text-[11.5px] font-semibold leading-snug text-slate-200">
                  <span className="font-bold text-white">I&apos;m Spark!</span>
                  <span className="block text-[11px] font-normal text-slate-300">
                    Have questions?
                  </span>
                  <span className="mt-0.5 inline-block bg-gradient-to-r from-pink-400 via-fuchsia-300 to-sky-400 bg-clip-text text-[11px] font-bold text-transparent">
                    Let&apos;s speak &rarr;
                  </span>
                </p>
              </div>
            </div>
          </button>
        )}
      </div>
    </aside>
  );
}
