import React from 'react';
import { GraduationCap, Award, MapPin, Brain, Code2, Rocket, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, quickFacts } = portfolioData;

  const iconMap = {
    GraduationCap: <GraduationCap size={22} className="fact-icon" />,
    Award: <Award size={22} className="fact-icon" />,
    MapPin: <MapPin size={22} className="fact-icon" />,
    Brain: <Brain size={22} className="fact-icon" />,
    Code2: <Code2 size={22} className="fact-icon" />,
    Rocket: <Rocket size={22} className="fact-icon" />
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">
            Engineering Student & <span className="gradient-text">AI Developer</span>
          </h2>
          <p className="section-subtitle">
            Passionate about combining artificial intelligence, backend infrastructure, and scalable web technologies to solve real-world problems.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Bio Card */}
          <div className="about-bio-card glass-card">
            <h3 className="bio-card-title">My Journey & Focus</h3>
            <p className="bio-paragraph">
              I am an <strong>Information Science Engineering student</strong> in my 4th year at <strong>Cambridge Institute of Technology, Bangalore</strong> with a CGPA of <strong>8.33</strong>.
            </p>
            <p className="bio-paragraph">
              My technical passion centers around <strong>Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), and Full-Stack Development</strong>. I specialize in training fine-tuned LLMs—such as Gemma models using Hugging Face datasets—capable of executing <strong>offline on mobile devices</strong> to protect data privacy and eliminate internet dependency.
            </p>
            <p className="bio-paragraph">
              Whether architecting LangChain document retrieval pipelines, building FastAPI & Node.js backend APIs, or developing intuitive web user interfaces, my goal is to build practical, impactful applications that make complex technology accessible.
            </p>

            <div className="objective-box">
              <span className="objective-label">Career Objective</span>
              <p className="objective-text">"{personal.careerObjective}"</p>
            </div>
          </div>

          {/* Quick Facts Matrix */}
          <div className="quick-facts-container">
            <h3 className="quick-facts-title">Quick Facts</h3>
            <div className="facts-grid">
              {quickFacts.map((fact, index) => (
                <div key={index} className="fact-card glass-card">
                  <div className="fact-icon-wrapper">
                    {iconMap[fact.icon] || <Code2 size={22} className="fact-icon" />}
                  </div>
                  <div className="fact-info">
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-detail">{fact.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          background: linear-gradient(180deg, var(--bg-dark) 0%, rgba(15, 23, 42, 0.4) 50%, var(--bg-dark) 100%);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          align-items: start;
        }

        .about-bio-card {
          padding: 2.5rem;
        }

        .bio-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 1.25rem;
        }

        .bio-paragraph {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }

        .bio-paragraph strong {
          color: var(--text-main);
          font-weight: 600;
        }

        .objective-box {
          margin-top: 1.5rem;
          padding: 1.25rem;
          background: rgba(0, 242, 254, 0.05);
          border-left: 3px solid var(--accent-cyan);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .objective-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent-cyan);
          margin-bottom: 0.4rem;
        }

        .objective-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-style: italic;
          line-height: 1.6;
        }

        .quick-facts-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 1.25rem;
        }

        .facts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .fact-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
        }

        .fact-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .fact-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .fact-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .fact-detail {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
