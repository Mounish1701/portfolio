import React from 'react';
import { Sparkles, Database, Server, Layers, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function WhatIBuild() {
  const { whatIBuild } = portfolioData;

  const iconMap = {
    Sparkles: <Sparkles size={28} className="expertise-icon" />,
    Database: <Database size={28} className="expertise-icon" />,
    Server: <Server size={28} className="expertise-icon" />,
    Layers: <Layers size={28} className="expertise-icon" />
  };

  return (
    <section id="what-i-build" className="section-padding what-i-build-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Areas of Expertise</div>
          <h2 className="section-title">
            What I <span className="gradient-text">Build & Architect</span>
          </h2>
          <p className="section-subtitle">
            Focusing on production-oriented AI models, structured RAG pipelines, scalable web APIs, and robust data persistence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid-4 expertise-grid">
          {whatIBuild.map((item, idx) => (
            <div key={idx} className="expertise-card glass-card">
              <div className="expertise-card-header">
                <div className="expertise-icon-box">
                  {iconMap[item.icon] || <Sparkles size={28} className="expertise-icon" />}
                </div>
                <span className="expertise-num">0{idx + 1}</span>
              </div>

              <h3 className="expertise-title">{item.title}</h3>
              <p className="expertise-desc">{item.description}</p>

              <div className="expertise-tags">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="expertise-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .what-i-build-section {
          position: relative;
          background: linear-gradient(180deg, var(--bg-dark) 0%, rgba(15, 23, 42, 0.5) 50%, var(--bg-dark) 100%);
        }

        .expertise-grid {
          gap: 1.5rem;
        }

        .expertise-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .expertise-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .expertise-icon-box {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .expertise-num {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.15);
        }

        .expertise-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.75rem;
        }

        .expertise-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .expertise-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }

        .expertise-tag {
          padding: 0.25rem 0.6rem;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }
      `}</style>
    </section>
  );
}
