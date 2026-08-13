import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;
  const [courseworkExpanded, setCourseworkExpanded] = useState(true);

  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Academic Background</div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Coursework</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering degree details, academic standing, and specialized computer science subjects.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="education-card glass-card">
          <div className="edu-card-header">
            <div className="edu-icon-badge">
              <GraduationCap size={32} />
            </div>

            <div className="edu-main-meta">
              <div className="edu-top-row">
                <span className="edu-status-badge">{education.currentStatus}</span>
                <span className="edu-period">
                  <Calendar size={14} />
                  <span>{education.period}</span>
                </span>
              </div>

              <h3 className="edu-institution">{education.institution}</h3>
              <p className="edu-degree">
                {education.degree} in <strong>{education.branch}</strong>
              </p>
            </div>

            {/* CGPA Badge */}
            <div className="cgpa-box">
              <Award size={20} className="cgpa-icon" />
              <div className="cgpa-text">
                <span className="cgpa-val">{education.cgpa.split(" ")[0]}</span>
                <span className="cgpa-scale">CGPA Standing</span>
              </div>
            </div>
          </div>

          {/* Coursework Drawer Section */}
          <div className="coursework-container">
            <div
              className="coursework-header"
              onClick={() => setCourseworkExpanded(!courseworkExpanded)}
            >
              <div className="coursework-title-group">
                <BookOpen size={18} className="icon-cyan" />
                <h4 className="coursework-title">Relevant Academic Coursework</h4>
                <span className="coursework-count">({education.coursework.length} Subjects)</span>
              </div>

              <button className="drawer-toggle-btn">
                {courseworkExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>

            {courseworkExpanded && (
              <div className="coursework-tags-grid">
                {education.coursework.map((course, idx) => (
                  <div key={idx} className="course-tag-card">
                    <span className="course-bullet">•</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .education-section {
          position: relative;
        }

        .education-card {
          padding: 2.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .edu-card-header {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          padding-bottom: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .edu-icon-badge {
          width: 72px;
          height: 72px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .edu-main-meta {
          flex: 1;
        }

        .edu-top-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .edu-status-badge {
          padding: 0.25rem 0.75rem;
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          border-radius: 50px;
          font-size: 0.8rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .edu-period {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .edu-institution {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .edu-degree {
          font-size: 1.05rem;
          color: var(--text-muted);
        }

        .edu-degree strong {
          color: var(--text-main);
        }

        .cgpa-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }

        .cgpa-icon {
          color: #FBBF24;
        }

        .cgpa-text {
          display: flex;
          flex-direction: column;
        }

        .cgpa-val {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
          font-family: var(--font-mono);
        }

        .cgpa-scale {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        /* Coursework */
        .coursework-container {
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .coursework-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .coursework-header:hover {
          background: rgba(30, 41, 59, 0.5);
        }

        .coursework-title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .coursework-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .coursework-count {
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .drawer-toggle-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .coursework-tags-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 0.75rem;
          padding: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(10, 14, 23, 0.4);
        }

        .course-tag-card {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1rem;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .course-bullet {
          color: var(--accent-cyan);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .edu-card-header {
            flex-direction: column;
            text-align: center;
          }
          .edu-top-row {
            justify-content: center;
          }
          .cgpa-box {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
