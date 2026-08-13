import React from 'react';
import { Award, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section-padding certs-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Credentials</div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Specializations</span>
          </h2>
          <p className="section-subtitle">
            Industry & academic certifications verifying expertise in Python algorithms, data structures, and Agentic AI workflows.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid-2 certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card glass-card">
              <div className="cert-header">
                <div className="cert-icon-wrapper">
                  <ShieldCheck size={28} />
                </div>
                <div className="cert-meta">
                  <span className="cert-issuer-badge">{cert.issuer}</span>
                  <span className="cert-type">{cert.type}</span>
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-desc">{cert.description}</p>

              <div className="cert-footer">
                <div className="cert-status">
                  <CheckCircle size={16} className="cert-check-icon" />
                  <span>Verified Completion</span>
                </div>

                {cert.link && cert.link !== '#' && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline cert-link-btn"
                  >
                    <span>View Credential</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certs-section {
          position: relative;
          background: linear-gradient(180deg, var(--bg-dark) 0%, rgba(15, 23, 42, 0.4) 50%, var(--bg-dark) 100%);
        }

        .certs-grid {
          gap: 2rem;
        }

        .cert-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
        }

        .cert-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .cert-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .cert-meta {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .cert-issuer-badge {
          font-size: 1rem;
          font-weight: 800;
          color: var(--accent-cyan);
        }

        .cert-type {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
        }

        .cert-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .cert-desc {
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .cert-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cert-status {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: #34D399;
          font-weight: 600;
        }

        .cert-check-icon {
          color: #34D399;
        }

        .cert-link-btn {
          padding: 0.45rem 0.9rem;
          font-size: 0.8rem;
        }
      `}</style>
    </section>
  );
}
