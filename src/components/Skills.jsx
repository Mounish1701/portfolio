import React, { useState } from 'react';
import { Code, Bot, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState(0);

  const categoryIcons = [
    <Code size={20} />,
    <Bot size={20} />,
    <Server size={20} />,
    <Database size={20} />,
    <Wrench size={20} />
  ];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Technical Competencies</div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical stack, artificial intelligence frameworks, database engines, and software engineering principles.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="tab-icon">{categoryIcons[idx]}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Display Current Category Card Matrix */}
        <div className="skills-card-container glass-card">
          <div className="category-header-row">
            <h3 className="category-active-title">
              {categoryIcons[activeTab]}
              <span>{skillCategories[activeTab].name}</span>
            </h3>
            <span className="skill-count">
              {skillCategories[activeTab].skills.length} Technologies
            </span>
          </div>

          <div className="skills-grid">
            {skillCategories[activeTab].skills.map((skill) => (
              <div key={skill.name} className="skill-badge-card">
                <div className="badge-icon-check">
                  <CheckCircle2 size={18} />
                </div>
                <div className="skill-details">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Skill Badges Cloud below */}
        <div className="all-skills-cloud">
          <h4 className="cloud-title">Complete Technology Cloud</h4>
          <div className="cloud-badges">
            {skillCategories.flatMap(c => c.skills).map((s, idx) => (
              <span key={idx} className="tech-chip">
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.25rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50px;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .tab-btn:hover {
          color: var(--text-main);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(30, 41, 59, 0.8);
        }

        .tab-btn.active {
          background: var(--gradient-ai);
          color: #040914;
          border-color: transparent;
          box-shadow: 0 4px 20px rgba(0, 242, 254, 0.3);
          font-weight: 700;
        }

        .tab-btn.active .tab-icon {
          color: #040914;
        }

        .skills-card-container {
          padding: 2.5rem;
          margin-bottom: 3rem;
        }

        .category-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .category-active-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .category-active-title svg {
          color: var(--accent-cyan);
        }

        .skill-count {
          font-size: 0.85rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          background: rgba(0, 242, 254, 0.08);
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          border: 1px solid rgba(0, 242, 254, 0.2);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
        }

        .skill-badge-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          transition: var(--transition-smooth);
        }

        .skill-badge-card:hover {
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(30, 41, 59, 0.8);
          transform: translateY(-2px);
        }

        .badge-icon-check {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .skill-details {
          display: flex;
          flex-direction: column;
        }

        .skill-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .skill-level {
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        /* Tech Cloud */
        .all-skills-cloud {
          text-align: center;
          padding: 2rem;
          background: rgba(15, 23, 42, 0.4);
          border: 1px dashed rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
        }

        .cloud-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.25rem;
        }

        .cloud-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
        }

        .tech-chip {
          padding: 0.4rem 0.9rem;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          transition: var(--transition-smooth);
        }

        .tech-chip:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(0, 242, 254, 0.08);
        }
      `}</style>
    </section>
  );
}
