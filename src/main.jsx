import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  CirclePlay,
  Cpu,
  Globe,
  Layers,
  Menu,
  MessageSquareCode,
  MoveUpRight,
  Send,
  Sparkles,
  Workflow,
  X,
  Zap,
} from 'lucide-react'
import './styles.css'

// Official ARXEN assets — matching uploaded brand asset sheet
const LOGO_WORDMARK_SVG = '/assets/logos/logo-wordmark-white.svg'
const LOGO_WORDMARK_PNG = '/assets/logos/logo-wordmark-white.png'
const LOGO_MARK_SVG = '/assets/logos/logo-mark-white.svg'

// Official ARXEN Contact & Social Media Information
const CONTACT_EMAIL = 'arxenaiservices@gmail.com'

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/arxenai?stkn=enA4dmVobXo4bDV2',
  linkedin: 'https://www.linkedin.com/in/rifat-kai-50a211390?utm_source=share_via&utm_content=profile&utm_medium=member_android',
}

function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function Logo({ compact = false, footer = false }) {
  const [imgSrc, setImgSrc] = useState(LOGO_WORDMARK_SVG)

  return (
    <a
      className={`brand-mark ${compact ? 'is-compact' : ''} ${footer ? 'is-footer' : ''}`}
      href="#top"
      aria-label="ARXEN home"
    >
      <img
        src={imgSrc}
        alt="ARXEN AI Systems"
        onError={() => {
          if (imgSrc !== LOGO_WORDMARK_PNG) {
            setImgSrc(LOGO_WORDMARK_PNG)
          }
        }}
      />
    </a>
  )
}

function GridTexture() {
  return <div className="grid-texture" aria-hidden="true" />
}

function SectionEyebrow({ children, number }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-dot" />
      <span>{number ? `${number} / ` : ''}{children}</span>
    </div>
  )
}

function Navbar({ onMenu }) {
  return (
    <header className="navbar">
      <div className="nav-shell">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Start a conversation <ArrowUpRight size={15} strokeWidth={1.6} />
        </a>
        <div className="nav-socials" aria-label="Official Social Channels">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            title="ARXEN on Instagram (@arxenai)"
            aria-label="Instagram"
          >
            <InstagramIcon size={14} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            title="ARXEN / Rifat Kai on LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={14} />
          </a>
        </div>
        <button className="menu-trigger" aria-label="Open menu" onClick={onMenu}>
          <Menu size={23} />
        </button>
      </div>
    </header>
  )
}

function MobileMenu({ open, onClose }) {
  if (!open) return null
  return (
    <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
      <div className="mobile-menu-head">
        <Logo compact />
        <button onClick={onClose} aria-label="Close menu">
          <X size={25} />
        </button>
      </div>
      <nav>
        <a href="#services" onClick={onClose}>Services <span>01</span></a>
        <a href="#approach" onClick={onClose}>Approach <span>02</span></a>
        <a href="#intelligence" onClick={onClose}>Intelligence <span>03</span></a>
        <a href="#about" onClick={onClose}>About <span>04</span></a>
      </nav>
      <a className="mobile-menu-contact" href="#contact" onClick={onClose}>
        Start a conversation <ArrowUpRight size={16} />
      </a>
      <div className="mobile-social-box">
        <span className="mobile-social-title">Connect with us</span>
        <div className="mobile-social-list">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-social-item"
            onClick={onClose}
          >
            <span><InstagramIcon size={16} /> Instagram (@arxenai)</span>
            <ArrowUpRight size={14} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-social-item"
            onClick={onClose}
          >
            <span><LinkedInIcon size={16} /> LinkedIn (Rifat Kai)</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

function SignalCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame
    let width = 0
    let height = 0
    const dots = []
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const makeDots = () => {
      dots.length = 0
      for (let i = 0; i < 44; i++) {
        dots.push({
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 1.5 + 0.4,
          phase: Math.random() * 6.28,
        })
      }
    }
    const draw = (time) => {
      ctx.clearRect(0, 0, width, height)
      const t = time / 1000
      const cx = width * 0.58
      const cy = height * 0.48
      const max = Math.max(width, height) * 0.61
      for (let i = 0; i < 15; i++) {
        const radius = (max * (i + 1)) / 15
        ctx.beginPath()
        ctx.arc(cx, cy, radius, Math.PI * 1.07, Math.PI * 1.93)
        ctx.strokeStyle = `rgba(143, 255, 154, ${0.025 + (i % 3) * 0.008})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
      ctx.beginPath()
      ctx.moveTo(width * 0.08, height * 0.84)
      ctx.bezierCurveTo(
        width * 0.28,
        height * 0.72,
        width * 0.45,
        height * 0.24,
        width * 0.88,
        height * 0.18
      )
      ctx.strokeStyle = 'rgba(133, 249, 147, 0.21)'
      ctx.lineWidth = 1
      ctx.stroke()
      dots.forEach((dot) => {
        const x = dot.x * width
        const y = dot.y * height
        const pulse = 0.35 + Math.sin(t * 1.7 + dot.phase) * 0.25
        ctx.beginPath()
        ctx.arc(x, y, dot.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(178, 255, 179, ${Math.max(0.1, pulse)})`
        ctx.fill()
      })
      frame = requestAnimationFrame(draw)
    }
    resize()
    makeDots()
    frame = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas className="signal-canvas" ref={canvasRef} aria-hidden="true" />
}

function Hero() {
  return (
    <section className="hero" id="top">
      <GridTexture />
      <div className="hero-glow" />
      <SignalCanvas />
      <div className="hero-shell">
        <div className="hero-copy">
          <SectionEyebrow>AI SYSTEMS / EST. 2024</SectionEyebrow>
          <h1>
            Intelligence,<br />
            <em>engineered.</em>
          </h1>
          <p className="hero-description">
            We design, develop, and automate world-class AI systems that turn complex operations into an undeniable competitive advantage.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">
              Explore our services <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#approach">
              <CirclePlay size={17} strokeWidth={1.5} /> See how we think
            </a>
          </div>
        </div>
        <div className="hero-meta">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
        </div>
      </div>
      <div className="hero-bottom-line">
        <span>BUILDING THE INFRASTRUCTURE OF INTELLIGENCE</span>
        <span>01 — 04</span>
      </div>
    </section>
  )
}

// Arxen AI Core Services definition
const services = [
  {
    icon: Globe,
    no: '01',
    title: 'AI Website and<br />App Development',
    category: 'Development',
    description:
      'We architect and build bespoke, high-performance web and mobile applications with native artificial intelligence capabilities engineered into the foundation.',
    features: [
      'Custom AI web applications & SaaS platforms',
      'Modern, high-conversion responsive UX/UI',
      'Scalable full-stack Next.js & React architectures',
      'Seamless LLM & multimodal API integrations',
    ],
    tags: ['Web & Mobile', 'Next.js / React', 'AI-Native UI', 'Full-Stack'],
    highlightTag: 'Full-Stack AI',
  },
  {
    icon: Workflow,
    no: '02',
    title: 'AI Automation<br />Workflows',
    subtitle: 'Automating client workflows using n8n, Make.com, and Zapier',
    category: 'Automation',
    description:
      'We eliminate manual operational drag by building custom automated pipelines using n8n, Make.com, and Zapier to connect tools, sync data, and run operations on autopilot.',
    features: [
      'Enterprise workflow orchestration via n8n & Make.com',
      'Zapier multi-step logic & custom webhooks',
      'Cross-platform CRM, ERP, and database sync',
      'Self-healing, zero-touch operational pipelines',
    ],
    tags: ['n8n', 'Make.com', 'Zapier', 'Pipelines', 'Zero-Touch'],
    highlightTag: 'n8n • Make.com • Zapier',
  },
  {
    icon: MessageSquareCode,
    no: '03',
    title: 'AI Agents and<br />Chatbots',
    category: 'Agents',
    description:
      'Autonomous multi-agent ecosystems and intelligent conversational chatbots trained on your proprietary data to handle customer inquiries, execute tasks, and operate 24/7.',
    features: [
      '24/7 intelligent customer care & lead generation',
      'Autonomous multi-agent execution & task handoff',
      'RAG systems grounded in your enterprise knowledge',
      'Tool-calling agents with API & database execution',
    ],
    tags: ['Autonomous Agents', '24/7 Chatbots', 'RAG Knowledge', 'Tool Calling'],
    highlightTag: 'Autonomous Agents',
  },
]

function Services({ onSelectService }) {
  return (
    <section className="systems services-section section-pad" id="services">
      {/* Anchor alias so existing links to #systems also work seamlessly */}
      <span id="systems" style={{ position: 'absolute', top: 0 }} />
      <div className="section-shell">
        <div className="section-intro">
          <SectionEyebrow number="01">OUR CORE SERVICES</SectionEyebrow>
          <h2>
            Beyond automation.<br />
            <span>Advantage.</span>
          </h2>
          <p>
            Arxen AI’s core capabilities span three dedicated disciplines — engineered from first principles to scale your business with intelligence.
          </p>
        </div>
        <div className="system-list service-list">
          {services.map(({ icon: Icon, no, title, subtitle, description, features, tags, highlightTag }) => (
            <article className="service-card" key={no}>
              <div className="card-top">
                <span className="card-no">{no}</span>
                <Icon size={26} strokeWidth={1.2} />
              </div>
              <h3 dangerouslySetInnerHTML={{ __html: title }} />
              {subtitle && (
                <div style={{ color: 'var(--green)', fontSize: '11px', fontFamily: 'var(--mono)', marginTop: '8px', letterSpacing: '0.04em' }}>
                  {subtitle}
                </div>
              )}
              <p className="service-desc">{description}</p>
              
              <ul className="service-features">
                {features.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={13} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-tags">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`service-tag ${tag === 'n8n' || tag === 'Make.com' || tag === 'Zapier' || tag === 'Autonomous Agents' || tag === 'Full-Stack' ? 'is-highlight' : ''}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="service-action"
                onClick={() => onSelectService && onSelectService(title.replace('<br />', ' '))}
                aria-label={`Inquire about ${title.replace('<br />', ' ')}`}
              >
                Inquire about this service <MoveUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section className="approach section-pad" id="approach">
      <GridTexture />
      <div className="section-shell approach-shell">
        <div className="approach-title">
          <SectionEyebrow number="02">OUR APPROACH</SectionEyebrow>
          <h2>
            Make the<br />
            <em>complex</em><br />
            inevitable.
          </h2>
        </div>
        <div className="approach-body">
          <p className="large-copy">
            The most powerful technology disappears into the work. We pair deep technical craft with a clear-eyed view of your business to build intelligence that feels inevitable.
          </p>
          <div className="approach-detail">
            <div className="detail-rule" />
            <p>
              Every engagement begins with a sharp question: <strong>what becomes possible when intelligence is native to the operation?</strong>
            </p>
          </div>
          <a className="text-link green-link" href="#contact">
            Our point of view <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="approach-orbit" aria-hidden="true">
        <div className="orbit-core">
          A<span>X</span>
        </div>
        <i />
        <i />
        <i />
      </div>
    </section>
  )
}

function Intelligence() {
  return (
    <section className="intelligence section-pad" id="intelligence">
      <div className="section-shell">
        <div className="intel-head">
          <SectionEyebrow number="03">THE DIFFERENCE</SectionEyebrow>
          <h2>
            Built for the<br />
            <em>edge.</em>
          </h2>
        </div>
        <div className="intel-grid">
          <div className="intel-statement">
            <p>Most organizations are asking AI to do more.</p>
            <p className="faded">We ask it to see more.</p>
            <div className="statement-line" />
          </div>
          <div className="intel-points">
            <div>
              <span>01</span>
              <div>
                <h3>Native, not bolted on</h3>
                <p>Intelligence designed into the architecture, not layered over the legacy.</p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <h3>Specific, not generic</h3>
                <p>Purpose-built systems tuned to your world, your workflows, and your decisions.</p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <h3>Human, by design</h3>
                <p>The best systems amplify human judgment. They do not replace the people who have it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact({ selectedService, setSelectedService }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const serviceOptions = [
    'AI Website and App Development',
    'AI Automation (n8n, Make.com, Zapier)',
    'AI Agents and Chatbots',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open email client with pre-filled content
    const subject = encodeURIComponent(`Inquiry: ${selectedService || 'AI Systems'} - ${name || 'Prospective Client'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterested Service: ${selectedService}\n\nProject Details:\n${message}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-glow" />
      <div className="section-shell contact-shell">
        <div>
          <SectionEyebrow number="04">BEGIN HERE</SectionEyebrow>
          <h2>
            Ready to build<br />
            <em>what's next?</em>
          </h2>
          <div className="contact-inquiry-box">
            <span className="inquiry-label">Select Service Interest:</span>
            <div className="inquiry-pills">
              {serviceOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  className={`inquiry-pill ${selectedService === opt ? 'active' : ''}`}
                  onClick={() => setSelectedService(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="inquiry-fields">
              <input
                type="text"
                placeholder="Your Name"
                className="inquiry-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Work Email"
                className="inquiry-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Tell us about your project or workflow goals..."
                className="inquiry-input inquiry-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
              <button type="submit" className="button button-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={14} /> Send Project Inquiry
              </button>
            </form>
            {submitted && (
              <p className="inquiry-status">Opening your mail client. We respond within 24 hours.</p>
            )}
          </div>
        </div>
        <div className="contact-side">
          <p>
            Tell us where you want to go. Whether you need a full-scale AI application, end-to-end workflow automation with n8n/Make/Zapier, or custom conversational AI agents, we'll architect the exact system.
          </p>
          <a className="button button-primary" href={`mailto:${CONTACT_EMAIL}`}>
            Email: {CONTACT_EMAIL} <ArrowUpRight size={17} />
          </a>
          <div className="contact-social-block">
            <span className="contact-social-label">Connect Directly:</span>
            <div className="contact-social-grid">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-channel-card"
              >
                <div className="channel-left">
                  <div className="channel-icon">
                    <InstagramIcon size={16} />
                  </div>
                  <div>
                    <div className="channel-title">Instagram</div>
                    <span className="channel-handle">@arxenai</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-channel-card"
              >
                <div className="channel-left">
                  <div className="channel-icon">
                    <LinkedInIcon size={16} />
                  </div>
                  <div>
                    <div className="channel-title">LinkedIn</div>
                    <span className="channel-handle">Rifat Kai • ARXEN AI</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-shell">
        <div className="footer-brand">
          <Logo footer />
          <p>
            Infrastructure<br />
            for intelligence.
          </p>
          <div className="footer-social-icons">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="Instagram @arxenai"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="LinkedIn Rifat Kai"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <span>EXPLORE</span>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#intelligence">Intelligence</a>
          </div>
          <div>
            <span>SERVICES</span>
            <a href="#services">AI Web & Apps</a>
            <a href="#services">AI Automation</a>
            <a href="#services">AI Agents & Bots</a>
          </div>
          <div>
            <span>CONNECT</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href="#contact">Project Inquiry</a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-with-icon"
            >
              <InstagramIcon size={12} /> Instagram
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-with-icon"
            >
              <LinkedInIcon size={12} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 ARXEN AI SYSTEMS</span>
        <span>INFRASTRUCTURE FOR INTELLIGENCE</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#8c9890', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <InstagramIcon size={12} /> Instagram
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#8c9890', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <LinkedInIcon size={12} /> LinkedIn
          </a>
          <a href="#top">
            Back to top <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('AI Website and App Development')

  const handleSelectService = (serviceName) => {
    if (serviceName.includes('Automation')) {
      setSelectedService('AI Automation (n8n, Make.com, Zapier)')
    } else if (serviceName.includes('Agent') || serviceName.includes('Chatbot')) {
      setSelectedService('AI Agents and Chatbots')
    } else {
      setSelectedService('AI Website and App Development')
    }
  }

  return (
    <>
      <Navbar onMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <Services onSelectService={handleSelectService} />
        <Approach />
        <Intelligence />
        <Contact selectedService={selectedService} setSelectedService={setSelectedService} />
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
