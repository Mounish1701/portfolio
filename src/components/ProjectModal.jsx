import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, ArrowRight, Bot, Cpu, AlertTriangle } from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="badge badge-cyan">{project.badge}</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="modal-body">
          {/* Overview */}
          <div className="modal-section">
            <h3 className="modal-section-title">Overview</h3>
            <p className="modal-text">{project.fullDescription || project.shortDescription}</p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="problem-solution-grid">
            <div className="ps-box problem-box">
              <h4 className="ps-title problem-title">
                <AlertTriangle size={18} />
                <span>The Problem</span>
              </h4>
              <p className="ps-text">{project.problem}</p>
            </div>

            <div className="ps-box solution-box">
              <h4 className="ps-title solution-title">
                <Sparkles size={18} />
                <span>The Solution</span>
              </h4>
              <p className="ps-text">{project.solution}</p>
            </div>
          </div>

          {/* AI Details if present (SehatCare / MedAI) */}
          {project.aiDetails && (
            <div className="modal-section ai-details-section">
              <h3 className="modal-section-title">
                <Cpu size={20} className="icon-cyan" />
                <span>AI Model & Fine-Tuning Specification</span>
              </h3>
              <div className="ai-specs-grid">
                <div className="spec-card">
                  <span className="spec-label">Base Architecture</span>
                  <span className="spec-val">{project.aiDetails.modelName || "Gemma LLM"}</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Training Dataset</span>
                  <span className="spec-val">{project.aiDetails.dataset || "Hugging Face Medical Datasets"}</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Inference Engine</span>
                  <span className="spec-val">{project.aiDetails.execution || "Offline On-Device Inference"}</span>
                </div>
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="modal-section">
            <h3 className="modal-section-title">Key Features & Capabilities</h3>
            <div className="features-list">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <CheckCircle2 size={18} className="feature-check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Flow Visualization */}
          {project.architectureFlow && (
            <div className="modal-section">
              <h3 className="modal-section-title">System & Flow Architecture</h3>
              <div className="modal-arch-flow">
                {project.architectureFlow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="arch-node">
                      <span className="node-step-num">Step 0{idx + 1}</span>
                      <h5 className="node-title">{step.title}</h5>
                      <p className="node-desc">{step.detail}</p>
                    </div>
                    {idx < project.architectureFlow.length - 1 && (
                      <div className="arch-arrow">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="modal-section">
            <h3 className="modal-section-title">Technologies Used</h3>
            <div className="tech-tags-wrapper">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-tag-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Editable Placeholders */}
          <div className="modal-section placeholder-note-section">
            <span className="placeholder-tag">Developer Note / Links</span>
            <p className="placeholder-desc">
              All external repository & live application links use central configuration placeholders. You can easily update these in <code>src/data/portfolioData.js</code>.
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={18} />
            <span>GitHub Repository</span>
          </a>

          {project.links.demo && project.links.demo !== '#' && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={18} />
              <span>Live Application / Play Store</span>
            </a>
          )}

          <button className="btn btn-outline" onClick={onClose}>
            Close Window
          </button>
        </div>
      </div>

      <style>{`
        .modal-content {
          width: 90%;
          max-width: 900px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          background: #0B0F19;
          border: 1px solid rgba(0, 242, 254, 0.3);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.15);
          overflow: hidden;
          animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 2rem 2.5rem 1.5rem 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(15, 23, 42, 0.6);
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-main);
          margin-top: 0.5rem;
        }

        .modal-subtitle {
          font-size: 1rem;
          color: var(--text-muted);
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: var(--transition-smooth);
        }

        .modal-close-btn:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.1);
        }

        .modal-body {
          padding: 2.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .modal-section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon-cyan {
          color: var(--accent-cyan);
        }

        .modal-text {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .problem-solution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .ps-box {
          padding: 1.5rem;
          border-radius: var(--radius-sm);
        }

        .problem-box {
          background: rgba(239, 68, 68, 0.06);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .solution-box {
          background: rgba(0, 242, 254, 0.06);
          border: 1px solid rgba(0, 242, 254, 0.2);
        }

        .ps-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .problem-title { color: #F87171; }
        .solution-title { color: var(--accent-cyan); }

        .ps-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .ai-specs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .spec-card {
          padding: 1rem;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .spec-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .spec-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 1rem;
          color: var(--text-muted);
        }

        .feature-check {
          color: var(--accent-cyan);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        /* Flow Diagram in Modal */
        .modal-arch-flow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          overflow-x: auto;
        }

        .arch-node {
          flex: 1;
          min-width: 160px;
          padding: 1rem;
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .node-step-num {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
        }

        .node-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .node-desc {
          font-size: 0.8rem;
          color: var(--text-dim);
          line-height: 1.4;
        }

        .arch-arrow {
          color: var(--text-dim);
          flex-shrink: 0;
        }

        .tech-tags-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tech-tag-badge {
          padding: 0.4rem 0.9rem;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .placeholder-note-section {
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border-left: 3px solid var(--accent-purple);
          border-radius: var(--radius-sm);
        }

        .placeholder-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-purple);
          text-transform: uppercase;
        }

        .placeholder-desc {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-top: 0.25rem;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
          padding: 1.5rem 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(15, 23, 42, 0.9);
        }

        @media (max-width: 768px) {
          .problem-solution-grid {
            grid-template-columns: 1fr;
          }
          .ai-specs-grid {
            grid-template-columns: 1fr;
          }
          .modal-arch-flow {
            flex-direction: column;
          }
          .arch-arrow {
            transform: rotate(90deg);
          }
          .modal-footer {
            flex-direction: column;
          }
          .modal-footer .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
