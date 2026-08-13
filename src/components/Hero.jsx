import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Cpu, Bot } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero-section">
      {/* Background Neural Grid Visual */}
      <div className="hero-bg-visual">
        <div className="glow-sphere sphere-1"></div>
        <div className="glow-sphere sphere-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge">
            <Sparkles size={16} className="badge-sparkle" />
            <span>AI & Full-Stack Developer</span>
            <span className="badge-dot"></span>
            <span className="badge-highlight">4th Year ISE @ Cambridge IT</span>
          </div>

          {/* Headline Name */}
          <h1 className="hero-name">
            {personal.name.split(" ")[0]} <span className="gradient-text">{personal.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          {/* Subheading Title */}
          <h2 className="hero-title">
            <span className="terminal-prefix">&gt; </span>
            {personal.title}
          </h2>

          {/* Tagline */}
          <p className="hero-tagline">
            {personal.tagline}
          </p>

          {/* Primary Call To Actions */}
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={personal.resumePdf}
              download="Kuntrapaku_Mounish_Kumar_Resume.pdf"
              className="btn btn-secondary hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline hero-btn">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="hero-socials">
            <span className="socials-label">Connect with me:</span>
            <div className="social-links-row">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="social-icon-btn"
                title="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* AI & Tech Visual Canvas Card */}
        <div className="hero-visual-card">
          <div className="visual-card-inner glass-card">
            <div className="card-header-bar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">
                <Terminal size={14} />
                <span>ai-architecture-engine.py</span>
              </div>
            </div>

            <div className="card-terminal-body">
              <div className="code-line">
                <span className="code-keyword">import</span> <span className="code-variable">LangChain, GemmaLLM, RAG</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">from</span> <span className="code-module">sehatcare.ai</span> <span className="code-keyword">import</span> <span className="code-class">OfflineInferenceEngine</span>
              </div>
              <div className="code-line empty-line"></div>
              <div className="code-line">
                <span className="code-comment"># Initializing Fine-Tuned Healthcare LLM</span>
              </div>
              <div className="code-line">
                <span className="code-variable">model</span> = <span className="code-class">GemmaLLM</span>.<span className="code-func">load_quantized</span>(
              </div>
              <div className="code-line indent-1">
                <span className="code-string">"huggingface/gemma-medical-finetuned"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="code-param">offline_mode</span>=<span className="code-bool">True</span>
              </div>
              <div className="code-line">
                )
              </div>
              <div className="code-line empty-line"></div>
              <div className="code-line">
                <span className="code-comment"># RAG Context Retrieval Engine</span>
              </div>
              <div className="code-line">
                <span className="code-variable">rag_pipeline</span> = <span className="code-class">RAG</span>.<span className="code-func">create_pipeline</span>(
              </div>
              <div className="code-line indent-1">
                <span className="code-param">vector_db</span>=<span className="code-string">"PostgreSQL / PgVector"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="code-param">framework</span>=<span className="code-string">"FastAPI + LangChain"</span>
              </div>
              <div className="code-line">
                )
              </div>
              <div className="code-line empty-line"></div>
              <div className="code-line prompt-line">
                <span className="code-prompt">&gt; System Status:</span> <span className="code-status">READY • 20+ Features Operational</span>
              </div>
            </div>

            {/* Neural Graphic Floating Pill */}
            <div className="floating-ai-chip">
              <Cpu size={18} className="chip-icon" />
              <div className="chip-text">
                <span className="chip-title">Offline Gemma AI</span>
                <span className="chip-status">Running On-Device</span>
              </div>
            </div>

            <div className="floating-rag-chip">
              <Bot size={18} className="chip-icon" />
              <div className="chip-text">
                <span className="chip-title">LangChain RAG</span>
                <span className="chip-status">Context Grounded</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding-top: calc(var(--navbar-height) + 3rem);
          padding-bottom: 5rem;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg-visual {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .glow-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.25;
        }

        .sphere-1 {
          top: 10%;
          left: 15%;
          width: 400px;
          height: 400px;
          background: #00F2FE;
        }

        .sphere-2 {
          bottom: 20%;
          right: 15%;
          width: 450px;
          height: 450px;
          background: #8B5CF6;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 36px 36px;
          opacity: 0.4;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(0, 242, 254, 0.25);
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--accent-cyan);
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
        }

        .badge-sparkle {
          color: var(--accent-cyan);
          animation: pulseGlow 2s infinite;
        }

        .badge-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        .badge-highlight {
          color: var(--text-muted);
          font-weight: 500;
        }

        .hero-name {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .terminal-prefix {
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .hero-tagline {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2.25rem;
          max-width: 600px;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .socials-label {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-weight: 500;
        }

        .social-links-row {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .social-icon-btn:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.4);
          background: rgba(0, 242, 254, 0.1);
          transform: translateY(-3px);
        }

        /* Hero Code Terminal Visual */
        .hero-visual-card {
          position: relative;
        }

        .visual-card-inner {
          padding: 0;
          overflow: hidden;
          background: rgba(10, 14, 23, 0.85);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .card-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1.2rem;
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .window-dots {
          display: flex;
          gap: 0.4rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #FF5F56; }
        .dot-yellow { background: #FFBD2E; }
        .dot-green { background: #27C93F; }

        .window-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .card-terminal-body {
          padding: 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.825rem;
          line-height: 1.6;
        }

        .code-line {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .empty-line {
          height: 0.8rem;
        }

        .code-keyword { color: #F472B6; font-weight: 600; }
        .code-variable { color: #38BDF8; }
        .code-module { color: #A78BFA; }
        .code-class { color: #FBBF24; }
        .code-comment { color: #64748B; font-style: italic; }
        .code-string { color: #34D399; }
        .code-param { color: #CBD5E1; }
        .code-bool { color: #F87171; }
        .code-func { color: #60A5FA; }

        .indent-1 { padding-left: 1.5rem; }

        .prompt-line {
          margin-top: 0.5rem;
          padding-top: 0.75rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.08);
        }

        .code-prompt { color: var(--accent-cyan); font-weight: 600; }
        .code-status { color: #34D399; }

        /* Floating Chips */
        .floating-ai-chip {
          position: absolute;
          top: -20px;
          right: -20px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(0, 242, 254, 0.3);
          border-radius: var(--radius-md);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(12px);
          animation: floatAnim 4s ease-in-out infinite;
        }

        .floating-rag-chip {
          position: absolute;
          bottom: -20px;
          left: -20px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: var(--radius-md);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(12px);
          animation: floatAnim 5s ease-in-out infinite reverse;
        }

        .chip-icon {
          color: var(--accent-cyan);
        }

        .floating-rag-chip .chip-icon {
          color: var(--accent-purple);
        }

        .chip-text {
          display: flex;
          flex-direction: column;
        }

        .chip-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .chip-status {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-badge {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-name {
            font-size: 2.75rem;
          }
          .hero-title {
            justify-content: center;
            font-size: 1.15rem;
          }
          .hero-tagline {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
          }
          .floating-ai-chip, .floating-rag-chip {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
