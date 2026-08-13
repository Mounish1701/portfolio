import React from 'react';
import { FolderGit2, Star, GitFork, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function GithubSection() {
  const { githubSection } = portfolioData;

  return (
    <section className="section-padding github-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Code Repositories</div>
          <h2 className="section-title">
            GitHub & <span className="gradient-text">Open Source</span>
          </h2>
          <p className="section-subtitle">
            {githubSection.subtitle}
          </p>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid-2 repos-grid">
          {githubSection.repos.map((repo, idx) => (
            <div key={idx} className="repo-card glass-card">
              <div className="repo-top-row">
                <div className="repo-title-group">
                  <FolderGit2 size={22} className="repo-icon" />
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-name"
                  >
                    {repo.name}
                  </a>
                </div>
                <span className="repo-badge">{repo.stars}</span>
              </div>

              <p className="repo-desc">{repo.description}</p>

              <div className="repo-footer">
                <div className="repo-meta-left">
                  <span className="repo-lang-dot"></span>
                  <span className="repo-lang">{repo.language}</span>
                  <span className="repo-tag-label">{repo.updated}</span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link-btn"
                  title="View Repository"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Banner CTA */}
        <div className="github-profile-cta glass-card">
          <div className="cta-left">
            <Github size={36} className="cta-github-icon" />
            <div className="cta-text">
              <h4 className="cta-title">Explore My Complete GitHub Profile</h4>
              <p className="cta-subtitle">Check out my recent commits, code samples, and open source repositories.</p>
            </div>
          </div>

          <a
            href={githubSection.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Github size={18} />
            <span>Visit GitHub Profile</span>
          </a>
        </div>
      </div>

      <style>{`
        .github-section {
          position: relative;
        }

        .repos-grid {
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .repo-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .repo-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .repo-title-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .repo-icon {
          color: var(--accent-cyan);
        }

        .repo-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .repo-name:hover {
          color: var(--accent-cyan);
        }

        .repo-badge {
          padding: 0.25rem 0.65rem;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: 50px;
          font-size: 0.75rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .repo-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .repo-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .repo-meta-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .repo-lang-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent-cyan);
        }

        .repo-lang {
          font-size: 0.85rem;
          color: var(--text-main);
          font-family: var(--font-mono);
        }

        .repo-tag-label {
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        .repo-link-btn {
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }

        .repo-link-btn:hover {
          color: var(--accent-cyan);
          transform: translate(2px, -2px);
        }

        /* CTA Banner */
        .github-profile-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 2.5rem;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.6) 100%);
          border: 1px solid rgba(0, 242, 254, 0.2);
        }

        .cta-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .cta-github-icon {
          color: var(--text-main);
        }

        .cta-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .cta-subtitle {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .github-profile-cta {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
          .cta-left {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
