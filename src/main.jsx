import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Menu, Code2, Palette, Gauge, ShieldCheck, Layers3, Sparkles, CheckCircle2, Globe2, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import "./styles.css";

const services = [
  { icon: <Layers3 />, title: "Web design", text: "Beautiful, responsive websites that make your brand feel unmistakable." },
  { icon: <Code2 />, title: "Web development", text: "Fast, reliable digital experiences built around your business goals." },
  { icon: <Palette />, title: "Product & UX", text: "Clear user journeys and intuitive interfaces people love to use." },
  { icon: <Gauge />, title: "Care & optimization", text: "Ongoing improvements that keep your website secure and performing." },
];
const projects = [
  { tag: "E-COMMERCE · 2026", title: "Form & Function", text: "A thoughtful shopping experience for a modern homeware brand.", className: "project-one", mark: "F/F" },
  { tag: "SAAS PLATFORM · 2026", title: "Metricly", text: "A clearer way for growing teams to understand their numbers.", className: "project-two", mark: "metricly." },
  { tag: "BRAND & WEB · 2025", title: "Fieldnotes Studio", text: "A digital home for an independent creative studio.", className: "project-three", mark: "fieldnotes" },
];
const testimonials = [
  { quote: "NovaTech made a complicated process feel simple. The result is a site we’re genuinely proud to share.", name: "Priya Sharma", role: "Founder, Form & Function" },
  { quote: "Thoughtful design, clear communication, and a launch that was right on schedule.", name: "Rohit Mehta", role: "Co-founder, Metricly" },
  { quote: "They understood our vision and turned it into a digital experience that feels like us.", name: "Ananya Iyer", role: "Creative Director, Fieldnotes" },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nProject details:\n${data.get("message")}`);
    window.location.href = `mailto:hello@novatech.example?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return <div>
    <header className="header">
      <a className="brand" href="#home" aria-label="NovaTech home"><span className="brand-icon"><Sparkles size={19}/></span>nova<span>tech</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu /></button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        {["About", "Services", "Work", "Testimonials", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={16}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line"></span> INDEPENDENT DIGITAL STUDIO</div>
          <h1>Good ideas deserve<br/> <span>great digital.</span></h1>
          <p className="hero-copy">We help ambitious businesses turn big ideas into clear, memorable digital experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Start a project <ArrowUpRight size={17}/></a><a className="text-link" href="#work">Explore our work <ArrowRight size={17}/></a></div>
          <div className="hero-proof"><div className="avatar-stack"><i>J</i><i>M</i><i>A</i></div><span><b>Good people. Good work.</b><small>Built on collaboration and care.</small></span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract digital artwork">
          <div className="visual-top"><span>IDEAS INTO IMPACT</span><span>01 / 03</span></div>
          <div className="glass-shape shape-a"></div><div className="glass-shape shape-b"></div><div className="glass-shape shape-c"></div>
          <div className="visual-caption"><span className="caption-dot"></span><span>Design with purpose<br/><b>Build for what’s next.</b></span><ArrowUpRight size={22}/></div>
        </div>
        <div className="hero-bottom"><span>STRATEGY</span><span>DESIGN</span><span>DEVELOPMENT</span><span className="scroll-note">SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro section" id="about">
        <div className="section-kicker">01 — A LITTLE ABOUT US</div>
        <div className="intro-grid"><h2>We make digital<br/>feel <em>human.</em></h2><div className="intro-copy"><p className="lead">Technology should make things better, not more complicated.</p><p>We’re a creative digital studio partnering with growing teams to build thoughtful websites and products. From the first sketch to the final launch, we bring strategy, design, and technology together to make work that matters.</p><a className="under-link" href="#contact">Get to know us <ArrowUpRight size={16}/></a></div></div>
        <div className="stats"><div><strong>01<span>—</span></strong><p>Curious by nature</p></div><div><strong>100<span>%</span></strong><p>Care in every detail</p></div><div><strong>∞</strong><p>Room to make it better</p></div></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><div><div className="section-kicker">02 — WHAT WE DO</div><h2>Small details.<br/><em>Big difference.</em></h2></div><p>From the first conversation to the final pixel, we build the right things with the right people.</p></div>
        <div className="service-grid">{services.map((s, i) => <article className="service-card" key={s.title}><div className="service-number">0{i+1}</div><div className="service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" aria-label={`Ask about ${s.title}`}><ArrowUpRight size={18}/></a></article>)}</div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading"><div><div className="section-kicker">03 — SELECTED WORK</div><h2>Made with care.<br/><em>Built to work.</em></h2></div><p>A few imagined case studies showing the kind of thoughtful digital work we love to create.</p></div>
        <div className="project-grid">{projects.map((p, i) => <article className="project-card" key={p.title}><div className={`project-art ${p.className}`}><span className="project-index">0{i+1}</span><div className="project-art-mark">{p.mark}</div><div className="project-art-foot"><span>SELECTED CASE STUDY</span><ArrowUpRight size={19}/></div></div><div className="project-info"><div><span className="project-tag">{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p></div><span className="project-arrow"><ArrowUpRight size={20}/></span></div></article>)}</div>
        <p className="work-note">These are concept projects for this demo website, not client work.</p>
      </section>

      <section className="quote-section section" id="testimonials">
        <div className="section-kicker">04 — KIND WORDS</div><div className="quote-heading"><span>“</span><h2>Good work is a<br/><em>team sport.</em></h2></div>
        <div className="testimonial-grid">{testimonials.map(t => <article className="testimonial" key={t.name}><div className="stars">★★★★★</div><p>“{t.quote}”</p><div className="person"><div className="person-avatar">{t.name.split(" ").map(n=>n[0]).join("")}</div><div><b>{t.name}</b><small>{t.role}</small></div></div></article>)}</div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy"><div className="section-kicker">05 — YOUR TURN</div><h2>Have a good<br/>one in <em>mind?</em></h2><p>Tell us what you’re imagining. We’ll bring the questions, ideas, and a fresh perspective.</p><div className="contact-detail"><Mail size={18}/><span><small>EMAIL US</small>hello@novatech.example</span></div><div className="contact-detail"><MapPin size={18}/><span><small>BASED IN</small>Mumbai, India · Working everywhere</span></div></div>
        <form className="contact-form" onSubmit={handleSubmit}><div className="form-title"><span>LET’S MAKE IT HAPPEN</span><span>↗</span></div><label>Your name<input name="name" placeholder="What should we call you?" required/></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required/></label><label>What are you thinking about?<textarea name="message" placeholder="A new website, a fresh idea, a tricky challenge…" rows="4" required/></label><button className="button button-primary form-button" type="submit">Send your enquiry <ArrowUpRight size={17}/></button><p className="form-hint">{submitted ? "Your email app should open with your enquiry ready to send." : "This demo form opens your email app to send the message."}</p></form>
      </section>
    </main>

    <footer className="footer"><a className="brand" href="#home"><span className="brand-icon"><Sparkles size={19}/></span>nova<span>tech</span></a><p>Thoughtful digital for a world moving forward.</p><div className="footer-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#contact">Contact</a></div><small>© {new Date().getFullYear()} NovaTech Studio. Demo website.</small></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);