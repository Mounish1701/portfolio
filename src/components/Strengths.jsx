import React from 'react';
import { Brain, Zap, Activity, Users, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Strengths() {
  const { strengths } = portfolioData;

  const iconMap = {
    Brain: <Brain size={24} className="strength-icon" />,
    Zap: <Zap size={24} className="strength-icon" />,
    Activity: <Activity size={24} className="strength-icon" />,
    Users: <Users size={24} className="strength-icon" />
  };

  return (
    <section className="section-padding strengths-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Core Competencies</div>
          <h2 className="section-title">
            Strengths & <span className="gradient-text">Work Ethic</span>
          </h2>
          <p className="section-subtitle">
            Key professional traits and soft skills that drive execution, collaboration, and continuous technical growth.
          </p>
        </div>

        {/* 4 Strengths Grid */}
        <div className="grid-4 strengths-grid">
          {strengths.map((item, idx) => (
            <div key={idx} className="strength-card glass-card">
              <div className="strength-icon-box">
                {iconMap[item.icon] || <Check size={24} className="strength-icon" />}
              </div>
              <h3 className="strength-title">{item.title}</h3>
              <p className="strength-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .strengths-section {
          position: relative;
        }

        .strengths-grid {
          gap: 1.5rem;
        }

        .strength-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .strength-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          margin-bottom: 1.25rem;
        }

        .strength-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .strength-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
