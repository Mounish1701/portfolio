import React from 'react';
import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="logo-badge">
                <Sparkles size={16} />
              </div>
              <span className="logo-text">
                {personal.shortName}
              </span>
            </a>
            <p className="footer-tagline">
              Information Science Engineering Student specializing in AI, RAG & Full-Stack Web Development.
            </p>
          </div>

          {/* Social Icons */}
          <div className="footer-socials">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="footer-social-link"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top button */}
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={18} />
            <span>Top</span>
          </button>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 <strong>{personal.name}</strong>. Built with React and Vite.
          </p>
          <span className="footer-location">Bangalore, Karnataka, India</span>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #04070D;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 4rem 0 2rem 0;
          position: relative;
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 2.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-brand {
          max-width: 450px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: var(--text-main);
          font-weight: 800;
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }

        .footer-tagline {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
        }

        .footer-social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .footer-social-link:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(0, 242, 254, 0.1);
        }

        .back-to-top-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .back-to-top-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.1);
          transform: translateY(-3px);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text strong {
          color: var(--text-muted);
        }

        .footer-location {
          font-family: var(--font-mono);
        }
      `}</style>
    </footer>
  );
}
