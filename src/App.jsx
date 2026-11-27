import React, { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Menu, X, Check, Activity, ShieldCheck,
  Settings2, Headphones, Lightbulb, MessagesSquare, BrainCircuit,
  Code2, Users, BarChart3, Workflow, ChevronDown, Mail, Globe2,
  MonitorCog, Target, Sparkles
} from "lucide-react";

const email = "mohan@bellns.com";

const services = [
  { no: "01", title: "Implementation & Customization", icon: Settings2, desc: "Tailored implementation that aligns technology with the way your business works. We shape solutions around your goals, teams and processes." },
  { no: "02", title: "Monitoring Tools", icon: Activity, desc: "Get a clearer view of ongoing activities with timely updates, early issue detection and actionable information for better decisions." },
  { no: "03", title: "Integrity Enterprise", icon: ShieldCheck, desc: "Build confidence in business information with accurate, consistent and dependable data that supports informed decisions." },
  { no: "04", title: "Managed Services", icon: MonitorCog, desc: "Proactive technology management that helps improve operations, manage costs and keep your business moving forward." },
  { no: "05", title: "Consulting Services", icon: Lightbulb, desc: "Connect IT strategy with business outcomes through practical insights, experience and technology guidance." },
  { no: "06", title: "Unified Communication", icon: MessagesSquare, desc: "Bring calls, messages, meetings and collaboration together to help teams communicate and work more effectively." },
  { no: "07", title: "AI & Machine Learning", icon: BrainCircuit, desc: "Use intelligent automation and data insights to simplify tasks, support decisions and unlock new possibilities." },
  { no: "08", title: "Customized Software", icon: Code2, desc: "Purpose-built software designed around your unique workflows, requirements and business priorities." },
  { no: "09", title: "CRM Services", icon: Users, desc: "Improve customer relationships and business processes with a strategic approach to customer relationship management." }
];

const benefits = [
  ["01", "Proactive by design", "Spot potential issues early and keep operations on track."],
  ["02", "Built around your business", "Solutions shaped to your objectives, people and processes."],
  ["03", "Clearer decisions", "Monitoring and reliable information help teams act with confidence."],
  ["04", "Ready for what’s next", "Adopt modern technologies and keep pace with change."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const faqs = [
    ["What kind of businesses does Bell Networks support?", "Bell Networks provides technology consulting and tailored services for organizations looking to improve operations, communication and business performance."],
    ["Can services be customized to our requirements?", "Yes. The company profile emphasizes customized solutions designed around each business’s needs, goals and working environment."],
    ["Does Bell Networks provide ongoing support?", "Managed services and post-implementation support are part of the service offering. Contact the team to discuss the scope that fits your organization."]
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Website enquiry: ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Bell Networks home">
          <span className="brand-mark"><b>BELL</b><strong>NET</strong></span>
          <span className="brand-name">BELL <b>NETWORKS</b><small>TECHNOLOGY • CONSULTING • INNOVATION</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["Home", "About", "Services", "Our Approach", "Partners", "Contact"].map((item) =>
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href={`mailto:${email}`}>Let's talk <ArrowUpRight size={16}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid"></div>
          <div className="hero-content">
            <div className="eyebrow"><span></span> BUSINESS TECHNOLOGY PARTNER</div>
            <h1>Technology that<br/><em>moves business</em><br/>forward.</h1>
            <p className="hero-copy">Practical technology consulting and tailored digital solutions that help businesses work smarter, communicate better and grow with confidence.</p>
            <div className="hero-actions">
              <a className="btn btn-green" href="#services">Explore our services <ArrowRight size={18}/></a>
              <a className="text-link" href="#about">Discover Bell Networks <ArrowUpRight size={17}/></a>
            </div>
            <div className="hero-note"><span className="note-line"></span><span>Ideas into action. Technology into impact.</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo"></div>
            <div className="photo-shade"></div>
            <div className="visual-label"><span className="pulse"></span> CONNECTING WHAT'S NEXT</div>
            <div className="floating-card card-top"><span className="float-icon"><Activity size={19}/></span><div><b>Intelligent monitoring</b><small>Visibility for better decisions</small></div></div>
            <div className="floating-card card-bottom"><span className="float-icon"><BrainCircuit size={20}/></span><div><b>AI-powered thinking</b><small>Possibilities made practical</small></div></div>
            <div className="hero-index">01 <span>/ 04</span></div>
          </div>
          <div className="hero-bottom"><span>CONSULTING</span><i></i><span>MANAGED SERVICES</span><i></i><span>INTELLIGENT SOLUTIONS</span></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-kicker">01 / ABOUT BELL NETWORKS</div>
          <div className="intro-layout">
            <h2>Make technology<br/>work <span>for you.</span></h2>
            <div className="intro-text">
              <p className="lead">We’re a technology consulting partner focused on maximizing the impact and value of your IT investments.</p>
              <p>Bell Networks brings together implementation, monitoring, managed services and consulting with modern capabilities in unified communication, AI, machine learning and customized software development.</p>
              <a className="under-link" href="#contact">Let’s build what’s next <ArrowUpRight size={17}/></a>
            </div>
          </div>
          <div className="stat-strip">
            <div><strong>2016</strong><span>Service journey began</span></div>
            <div><strong>360°</strong><span>Business-focused approach</span></div>
            <div><strong>2023</strong><span>Expanded into AI & software</span></div>
            <div><strong>∞</strong><span>Room to innovate</span></div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-top">
            <div><div className="section-kicker light-kicker">02 / WHAT WE DO</div><h2>Solutions for a<br/><span>smarter business.</span></h2></div>
            <p>From everyday technology operations to intelligent transformation, we bring the right expertise together to help you move ahead.</p>
          </div>
          <div className="service-grid">
            {services.map(({no,title,icon:Icon,desc}) => (
              <article className="service-card" key={no}>
                <div className="service-card-top"><span>{no}</span><Icon size={24} strokeWidth={1.5}/></div>
                <h3>{title}</h3><p>{desc}</p>
                <a href="#contact" aria-label={`Enquire about ${title}`}><ArrowUpRight size={18}/></a>
              </article>
            ))}
          </div>
        </section>

        <section className="timeline section-pad" id="our-approach">
          <div className="section-kicker">03 / OUR JOURNEY</div>
          <div className="timeline-head"><h2>Built on experience.<br/><span>Focused on tomorrow.</span></h2><p>Our capabilities have grown with the changing needs of business and technology.</p></div>
          <div className="timeline-track">
            <div className="timeline-item"><b>2016</b><span className="dot"></span><h3>Our foundation</h3><p>Implementation, monitoring tools, Integrity Enterprise, managed services and consulting.</p></div>
            <div className="timeline-item"><b>2023</b><span className="dot"></span><h3>New capabilities</h3><p>Unified communication, AI & machine learning and customized software development.</p></div>
            <div className="timeline-item"><b>Today</b><span className="dot"></span><h3>What's next</h3><p>Bringing technology, people and business priorities together to create lasting value.</p></div>
          </div>
        </section>

        <section className="feature-band">
          <div className="feature-image"></div>
          <div className="feature-content">
            <div className="section-kicker light-kicker">THE BELL NETWORKS DIFFERENCE</div>
            <h2>Less reacting.<br/><span>More anticipating.</span></h2>
            <p>We believe technology should help you stay ahead—not just catch up. Our approach focuses on active management, continuous improvement and solutions that fit your business.</p>
            <a className="btn btn-outline" href="#contact">Talk to our team <ArrowUpRight size={17}/></a>
          </div>
        </section>

        <section className="benefits section-pad">
          <div className="section-kicker">04 / WHY WORK WITH US</div>
          <div className="benefit-layout">
            <h2>Good technology.<br/><span>Better outcomes.</span></h2>
            <div className="benefit-list">
              {benefits.map(([n,t,d]) => <div className="benefit-row" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={18}/></div>)}
            </div>
          </div>
        </section>

        <section className="partners section-pad" id="partners">
          <div className="section-kicker">05 / OUR ECOSYSTEM</div>
          <div className="partners-layout"><h2>Technology is<br/><span>better together.</span></h2><p>Our company profile highlights an ecosystem of technology and customer-experience partners.</p></div>
          <div className="partner-logos">
            <div className="partner-logo avaya">AVAYA</div>
            <div className="partner-logo amazon">amazon <b>connect</b></div>
            <div className="partner-logo genesys">GENESYS <small>Partner</small></div>
            <div className="partner-logo nice">NICE</div>
            <div className="partner-logo orange"><span></span> orange <b>Business Services</b></div>
          </div>
          <p className="partner-note">Partner names are presented as listed in the Bell Networks company profile.</p>
        </section>

        <section className="faq section-pad">
          <div className="section-kicker">06 / A FEW ANSWERS</div>
          <div className="faq-layout"><h2>Questions?<br/><span>Let’s clarify.</span></h2>
            <div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}>
              <button onClick={()=>setActiveFaq(activeFaq===i?-1:i)}><span>{q}</span><ChevronDown className={activeFaq===i?"rotate":""}/></button>
              {activeFaq===i&&<p>{a}</p>}
            </div>)}</div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-bg"></div>
          <div className="section-kicker light-kicker">07 / START A CONVERSATION</div>
          <div className="contact-layout">
            <div className="contact-copy"><h2>Have a challenge?<br/><span>Let’s talk solutions.</span></h2><p>Tell us what your business is working towards. We’d be glad to start a conversation.</p>
              <a className="email-link" href={`mailto:${email}`}><Mail size={19}/>{email}<ArrowUpRight size={17}/></a>
              <div className="web-link"><Globe2 size={18}/> www.bellns.com</div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row"><label>Your name<input name="name" placeholder="Enter your name" required/></label><label>Company<input name="company" placeholder="Company name"/></label></div>
              <label>Work email<input name="email" type="email" placeholder="you@company.com" required/></label>
              <label>What can we help with?
                <select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.no}>{s.title}</option>)}</select>
              </label>
              <label>Your message<textarea name="message" rows="4" placeholder="Tell us a little about your requirement..." required/></label>
              <button className="btn btn-green submit-btn" type="submit">Send enquiry <ArrowRight size={18}/></button>
              {sent&&<small className="form-note">Your email application should open with the enquiry details. Please send the message to complete your enquiry.</small>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><b>BELL</b><strong>NET</strong></span><span className="brand-name">BELL <b>NETWORKS</b><small>TECHNOLOGY • CONSULTING • INNOVATION</small></span></a>
        <span>© {new Date().getFullYear()} Bell Networks. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;