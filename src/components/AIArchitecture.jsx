import React, { useState } from 'react';
import { MessageSquare, Layout, Server, Search, Bot, CheckCircle2, ChevronRight, ArrowDown } from 'lucide-react';

export default function AIArchitecture() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNum: "01",
      title: "User Query & Input",
      short: "User Query",
      icon: <MessageSquare size={22} />,
      desc: "Patient or developer submits a query, voice input, or uploads medical document/prescription.",
      details: [
        "Multilingual natural text or voice audio input",
        "Prescription image upload for OCR parsing",
        "Document-specific medical question submission"
      ]
    },
    {
      stepNum: "02",
      title: "Application Interface",
      short: "App Interface",
      icon: <Layout size={22} />,
      desc: "Next.js / React / Mobile UI captures input, validates schema, and formats payload.",
      details: [
        "Responsive, low-latency UI rendering",
        "Local input sanitization & character validation",
        "Centralized state dispatch to processing pipeline"
      ]
    },
    {
      stepNum: "03",
      title: "Backend & AI Processing",
      short: "Backend API",
      icon: <Server size={22} />,
      desc: "FastAPI / NestJS / Node.js handles request routing, OCR extraction, and payload structuring.",
      details: [
        "Optical Character Recognition (OCR) text extraction",
        "REST API microservices & prompt template formatting",
        "On-device local execution routing (Offline mode)"
      ]
    },
    {
      stepNum: "04",
      title: "Context Retrieval (RAG)",
      short: "RAG Retrieval",
      icon: <Search size={22} />,
      desc: "LangChain queries vector database (PostgreSQL / SQLite) to pull exact factual context.",
      details: [
        "Vector embedding generation & similarity search",
        "Retrieval-Augmented Generation (RAG) pipeline",
        "Medical document context anchoring to prevent hallucination"
      ]
    },
    {
      stepNum: "05",
      title: "LLM / AI Model Execution",
      short: "AI Model",
      icon: <Bot size={22} />,
      desc: "Fine-tuned Gemma LLM or domain model synthesizes factual response with context payload.",
      details: [
        "Fine-tuned Gemma LLM model inference",
        "Offline on-device AI processing without internet dependency",
        "Output Parsers enforce structured JSON / natural response"
      ]
    },
    {
      stepNum: "06",
      title: "Contextual Response",
      short: "Final Response",
      icon: <CheckCircle2 size={22} />,
      desc: "Delivers verified response, symptom guidance, alert reminder, or cited answer back to user.",
      details: [
        "Multilingual text & voice feedback generation",
        "Automated medicine reminder & vital tracking logging",
        "Document citation reference rendering"
      ]
    }
  ];

  return (
    <section className="section-padding ai-arch-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">System Design</div>
          <h2 className="section-title">
            How I Build <span className="gradient-text">AI Applications</span>
          </h2>
          <p className="section-subtitle">
            A conceptual step-by-step pipeline demonstrating how my AI solutions combine offline inference, LangChain RAG, and microservice APIs.
          </p>
        </div>

        {/* Workflow Pipeline Diagram */}
        <div className="arch-pipeline-container glass-card">
          <div className="pipeline-steps-row">
            {steps.map((s, idx) => (
              <React.Fragment key={s.stepNum}>
                <div
                  className={`pipeline-step-node ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="step-node-header">
                    <span className="step-num">{s.stepNum}</span>
                    <div className="node-icon">{s.icon}</div>
                  </div>
                  <span className="step-title-short">{s.short}</span>
                </div>

                {idx < steps.length - 1 && (
                  <div className="step-connector">
                    <ChevronRight size={18} className="desktop-arrow" />
                    <ArrowDown size={18} className="mobile-arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Active Step Detail Inspector Box */}
          <div className="step-inspector-box">
            <div className="inspector-header">
              <div className="inspector-badge">
                <span>Phase {steps[activeStep].stepNum}</span>
              </div>
              <h3 className="inspector-title">{steps[activeStep].title}</h3>
            </div>

            <p className="inspector-desc">{steps[activeStep].desc}</p>

            <div className="inspector-details-list">
              <span className="details-heading">Pipeline Capabilities:</span>
              <div className="details-grid">
                {steps[activeStep].details.map((detail, dIdx) => (
                  <div key={dIdx} className="detail-item">
                    <CheckCircle2 size={16} className="detail-check" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ai-arch-section {
          position: relative;
        }

        .arch-pipeline-container {
          padding: 2.5rem;
        }

        .pipeline-steps-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .pipeline-step-node {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem 0.5rem;
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
          text-align: center;
        }

        .pipeline-step-node:hover {
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(30, 41, 59, 0.7);
          transform: translateY(-3px);
        }

        .pipeline-step-node.active {
          background: rgba(0, 242, 254, 0.1);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.2);
        }

        .step-node-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .node-icon {
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }

        .pipeline-step-node.active .node-icon {
          color: var(--accent-cyan);
        }

        .step-title-short {
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .step-connector {
          color: var(--text-dim);
          flex-shrink: 0;
        }

        .mobile-arrow {
          display: none;
        }

        /* Inspector */
        .step-inspector-box {
          padding: 2rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: var(--radius-md);
        }

        .inspector-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .inspector-badge {
          padding: 0.3rem 0.8rem;
          background: rgba(0, 242, 254, 0.15);
          border: 1px solid rgba(0, 242, 254, 0.3);
          border-radius: 50px;
          font-size: 0.8rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .inspector-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .inspector-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .details-heading {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.75rem;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          padding: 0.75rem 1rem;
          background: rgba(30, 41, 59, 0.4);
          border-radius: var(--radius-sm);
        }

        .detail-check {
          color: var(--accent-cyan);
          margin-top: 0.15rem;
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .pipeline-steps-row {
            flex-direction: column;
          }
          .desktop-arrow {
            display: none;
          }
          .mobile-arrow {
            display: block;
            margin: 0.4rem 0;
          }
          .pipeline-step-node {
            width: 100%;
          }
          .details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
