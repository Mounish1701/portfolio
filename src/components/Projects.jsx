import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Sparkles, Layers, Cpu, CheckCircle } from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'AI & Healthcare', 'AI & Full-Stack', 'Web & Productivity', 'Backend & Database'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.includes(selectedCategory));

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Featured Work</div>
          <h2 className="section-title">
            Academic & Production <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Exploring healthcare AI models, offline-first LLMs, Retrieval-Augmented Generation, and full-stack database architectures.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card glass-card ${project.isFlagship ? 'flagship-card' : ''}`}
            >
              {/* Card Header & Badge */}
              <div className="card-top">
                <span className={`project-badge ${project.isFlagship ? 'flagship-badge' : ''}`}>
                  {project.isFlagship && <Sparkles size={14} />}
                  <span>{project.badge}</span>
                </span>
                <span className="project-category">{project.category}</span>
              </div>

              {/* Title & Description */}
              <div className="card-main-info">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-subtitle">{project.subtitle}</p>
                <p className="project-card-desc">{project.shortDescription}</p>
              </div>

              {/* Highlights Bullet List */}
              <div className="project-card-highlights">
                <div className="highlight-item">
                  <CheckCircle size={14} className="highlight-icon" />
                  <span>{project.keyFeatures[0]}</span>
                </div>
                {project.keyFeatures[1] && (
                  <div className="highlight-item">
                    <CheckCircle size={14} className="highlight-icon" />
                    <span>{project.keyFeatures[1]}</span>
                  </div>
                )}
              </div>

              {/* Tech Stack Tags */}
              <div className="project-tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div className="project-card-actions">
                <button
                  className="btn btn-primary card-details-btn"
                  onClick={() => setActiveModalProject(project)}
                >
                  <span>View Project Details</span>
                  <ArrowRight size={16} />
                </button>

                <div className="card-external-links">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-icon-link"
                    title="View GitHub Source"
                  >
                    <Github size={18} />
                  </a>

                  {project.links.demo && project.links.demo !== '#' && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-icon-link"
                      title="View Live App / Testing Link"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

      <style>{`
        .projects-section {
          position: relative;
        }

        .project-filters {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.6rem 1.25rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50px;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .filter-btn:hover {
          color: var(--text-main);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .filter-btn.active {
          background: rgba(0, 242, 254, 0.12);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          padding: 2.25rem;
          height: 100%;
        }

        .flagship-card {
          border-color: rgba(0, 242, 254, 0.3);
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.4) 100%);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(0, 242, 254, 0.08);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          gap: 0.5rem;
        }

        .project-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.8rem;
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50px;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .flagship-badge {
          background: rgba(0, 242, 254, 0.1);
          border-color: rgba(0, 242, 254, 0.3);
          color: var(--accent-cyan);
        }

        .project-category {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
        }

        .card-main-info {
          margin-bottom: 1.25rem;
        }

        .project-card-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .project-card-subtitle {
          font-size: 0.95rem;
          color: var(--accent-cyan);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .project-card-desc {
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .project-card-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.4);
          border-radius: var(--radius-sm);
          border-left: 2px solid var(--accent-cyan);
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .highlight-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
          margin-top: auto;
        }

        .tech-pill {
          padding: 0.3rem 0.7rem;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .project-card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .card-details-btn {
          padding: 0.65rem 1.25rem;
          font-size: 0.88rem;
        }

        .card-external-links {
          display: flex;
          gap: 0.5rem;
        }

        .card-icon-link {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .card-icon-link:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.4);
          background: rgba(0, 242, 254, 0.1);
        }

        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
