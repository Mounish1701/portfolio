import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto URI as clean fallback for static site
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Meaningful Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you are a recruiter looking for an AI/Full-Stack engineer, an internship coordinator, or seeking collaboration—feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card glass-card">
            <h3 className="info-card-title">Contact Information</h3>
            <p className="info-card-desc">
              I am currently based in Bangalore and actively open to internship and full-time software development, AI, and backend roles.
            </p>

            <div className="info-items-list">
              <a href={`mailto:${personal.email}`} className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-text-group">
                  <span className="item-label">Email Address</span>
                  <span className="item-value">{personal.email}</span>
                </div>
              </a>

              <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-text-group">
                  <span className="item-label">Phone Number</span>
                  <span className="item-value">{personal.phone}</span>
                </div>
              </a>

              <div className="contact-item no-click">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-text-group">
                  <span className="item-label">Current Location</span>
                  <span className="item-value">{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="contact-socials-wrapper">
              <span className="socials-title">Profiles & Portfolios</span>
              <div className="contact-social-btns">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary contact-social-btn"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary contact-social-btn"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="contact-form-card glass-card">
            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h3 className="success-title">Message Client Opened!</h3>
                <p className="success-desc">
                  Your default email client has been launched with your message formatted for <strong>{personal.email}</strong>.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">
                  <MessageSquare size={20} className="icon-cyan" />
                  <span>Send Me A Direct Message</span>
                </h3>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Opportunity Inquiry / Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Write your message details here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          background: linear-gradient(180deg, var(--bg-dark) 0%, rgba(15, 23, 42, 0.6) 100%);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
        }

        .contact-info-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        .info-card-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.75rem;
        }

        .info-card-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .info-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .contact-item:not(.no-click):hover {
          background: rgba(30, 41, 59, 0.8);
          border-color: rgba(0, 242, 254, 0.3);
          transform: translateX(4px);
        }

        .contact-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .contact-text-group {
          display: flex;
          flex-direction: column;
        }

        .item-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .item-value {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .contact-socials-wrapper {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .socials-title {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .contact-social-btns {
          display: flex;
          gap: 1rem;
        }

        .contact-social-btn {
          flex: 1;
        }

        /* Form Styling */
        .contact-form-card {
          padding: 2.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .form-input {
          padding: 0.85rem 1rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          color: var(--text-main);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.15);
        }

        .form-textarea {
          resize: vertical;
        }

        .form-submit-btn {
          margin-top: 0.5rem;
          width: 100%;
        }

        .form-success-box {
          text-align: center;
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon {
          color: #34D399;
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .success-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 450px;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-group-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
