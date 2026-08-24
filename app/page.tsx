import ContactDialog from "./contact-dialog";
import ThemeToggle from "./theme-toggle";

type Plan = {
  id: string;
  name: string;
  price: number;
  billing: "weekly" | "one-time";
  copy: string;
  featured?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    id: "lite-audit",
    name: "Lite Audit",
    price: 199,
    billing: "one-time",
    copy: "A compact one-time review to uncover your next infrastructure wins.",
    features: [
      "Focused infrastructure review",
      "CI/CD and reliability checks",
      "Top three improvement opportunities",
      "Short written action plan",
    ],
  },
  {
    id: "audit",
    name: "Audit",
    price: 399,
    billing: "weekly",
    featured: true,
    copy: "A focused health check for your current cloud and delivery setup.",
    features: [
      "Infrastructure & CI/CD review",
      "Security and reliability checks",
      "Cost-saving opportunities",
      "Prioritized action plan",
    ],
  },
  {
    id: "launch",
    name: "Launch",
    price: 899,
    billing: "weekly",
    copy: "For teams shipping their first reliable production stack.",
    features: [
      "CI/CD pipeline setup",
      "Cloud infrastructure baseline",
      "Monitoring & alerts",
      "8 engineering hours / week",
    ],
  },
];
const capabilities = [
  [
    "01",
    "Continuous delivery",
    "Fast, repeatable releases with tested pipelines, previews, and safe rollbacks.",
  ],
  [
    "02",
    "Infrastructure as code",
    "Versioned Terraform modules that make every environment predictable.",
  ],
  [
    "03",
    "Cloud operations",
    "Practical architecture and cost control across AWS, GCP, and Azure.",
  ],
  [
    "04",
    "Platform reliability",
    "Kubernetes, observability, backups, and incident playbooks built in.",
  ],
];
const deliverables = [
  {
    title: "CI/CD pipeline",
    description:
      "A working deployment flow with test checks, build steps, and production-safe release automation.",
  },
  {
    title: "Cloud infrastructure",
    description:
      "Infrastructure defined in code so dev, staging, and production behave consistently and can be recreated.",
  },
  {
    title: "Monitoring & alerts",
    description:
      "Dashboards, uptime checks, and notifications that tell you when things break before users do.",
  },
  {
    title: "Reliability upgrades",
    description:
      "Health checks, backups, rollback plans, and performance fixes that make the system easier to trust.",
  },
];
const experience = [
  "Automated key approval-heavy workflows, reducing processing time by 30–40% across internal teams.",
  "Improved system reliability by designing Spring Boot microservices with 20–25% faster response time and fewer production incidents.",
  "Integrated DevSecOps checks (SAST, SCA, secrets hygiene) into CI/CD pipelines, helping cut vulnerability occurrences by ~35%.",
  "Collaborated with cross-functional tech + operations teams to streamline deployments, shrinking release cycles from weekly to 2–3 days.",
];
const scope = {
  included: [
    "Infrastructure and delivery work in your existing cloud accounts",
    "CI/CD, IaC, containers, observability, reliability, and cloud-cost tasks",
    "Implementation, documentation, reviews, and async progress updates",
    "Work up to the capacity or deliverables included in your selected plan",
  ],
  excluded: [
    "Application feature development or product design",
    "24/7 help desk, guaranteed on-call coverage, or unlimited incident response",
    "Cloud-provider, SaaS, domain, or other third-party charges",
    "Large migrations or projects beyond plan capacity without a separately agreed scope",
  ],
};
const faqs = [
  [
    "How does the one-request model work?",
    "Add as many requests as you like to the queue. We work on one active request at a time, in priority order, so focus stays high and handoffs stay low. You can reprioritize anything that has not started.",
  ],
  [
    "What does async-only mean?",
    "All requests, feedback, approvals, and progress updates are handled through your dedicated Trello board, which remains the single source of truth. You will also receive Slack access for lightweight coordination and notifications. There are no recurring meetings; focused calls can be arranged when a decision genuinely needs one.",
  ],
  [
    "How quickly will work be completed?",
    "Most focused requests move within a few business days. Larger work is broken into visible milestones. Timing depends on complexity, access, feedback, and the weekly capacity in your plan.",
  ],
  [
    "Can I pause or cancel?",
    "For weekly plans, cancel before your next renewal to stop future charges. You can request a pause at the end of the current billing period for up to three weeks; work and billing resume afterward unless you cancel. Lite Audit is a one-time offer with no renewal.",
  ],
  [
    "How do I pay?",
    "Secure manual payment via UPI or bank transfer after project confirmation.",
  ],
  [
    "Who operates ShipOps, and is GST charged?",
    "ShipOps is currently operated by Mridul Roy as an independent DevOps consulting service. GST is not charged while the service provider is not registered under GST.",
  ],
  [
    "What happens to unused capacity?",
    "Weekly capacity reserves our availability for that billing week and does not roll over. If priorities change, use the queue to direct the remaining time to documentation, reliability, security, or cost improvements.",
  ],
  [
    "Who owns the work?",
    "You do. Work is delivered into your accounts and repositories. Once outstanding invoices are paid, the implementation and project-specific documentation are yours.",
  ],
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top">
          <span className="brand-mark">S</span> SHIPOPS
          <span className="dot">.</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#scope">Scope</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-actions">
          <span className="nav-profile-name">Mridul Roy</span>
          <a className="social-link" href="https://github.com/d4rkr0n1n" target="_blank" rel="noreferrer" aria-label="Mridul Roy on GitHub" title="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.47.09.64-.2.64-.45v-1.67c-2.62.57-3.17-1.11-3.17-1.11-.43-1.09-1.05-1.38-1.05-1.38-.86-.59.07-.58.07-.58.95.07 1.45.98 1.45.98.85 1.45 2.23 1.03 2.77.79.09-.62.33-1.03.6-1.27-2.09-.24-4.29-1.05-4.29-4.67 0-1.03.37-1.87.98-2.53-.1-.24-.42-1.2.09-2.5 0 0 .8-.26 2.62.97a9.1 9.1 0 0 1 4.77 0c1.82-1.23 2.62-.97 2.62-.97.51 1.3.19 2.26.09 2.5.61.66.98 1.5.98 2.53 0 3.63-2.2 4.43-4.3 4.66.34.3.64.87.64 1.76v2.61c0 .25.17.54.65.45A9.5 9.5 0 0 0 12 2.5Z" />
            </svg>
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/d4rkr0n1n/" target="_blank" rel="noreferrer" aria-label="Mridul Roy on LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5.2 6.8A1.7 1.7 0 1 0 5.2 3.4a1.7 1.7 0 0 0 0 3.4ZM3.7 20.6h3V8.5h-3v12.1ZM8.6 8.5h2.9v1.65h.04c.4-.76 1.38-1.96 3.03-1.96 3.24 0 3.84 2.13 3.84 4.9v7.51h-3v-6.66c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.72-2.55 3.51v6.78h-3V8.5Z" />
            </svg>
          </a>
        <ThemeToggle />
        <a className="nav-cta" href="#pricing">
          View plans <span>↗</span>
        </a>
      </div>
      </header>
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Your senior DevOps partner, on subscription
          </p>
          <h1>
            SHIP FASTER.
            <br />
            SLEEP <em>BETTER.</em>
          </h1>
          <p className="hero-lede">
            Senior DevOps expertise without the hiring cycle. I design, build,
            and operate the cloud platform behind your product.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#pricing">
              Start shipping <span>↗</span>
            </a>
            <a className="text-link" href="#services">
              Explore the service <span>↓</span>
            </a>
          </div>
        </div>
        <div className="engagement-panel">
          <div className="engagement-heading">
            <span className="panel-kicker">HOW WE WORK</span>
            <span className="panel-status">● ACCEPTING WORK</span>
          </div>
          <h2>Focused infrastructure work, made visible.</h2>
          <div className="engagement-list">
            <div>
              <span>01</span>
              <p>
                <strong>One active request</strong>
                Keep a prioritized queue and move through it without competing
                handoffs.
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>Async by default</strong>
                Trello is the source of truth, with Slack for lightweight
                coordination and notifications.
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>Delivered to your stack</strong>
                Work, documentation, and implementation stay in your accounts
                and repositories.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="tech-strip">
        <div>
          CI/CD <span>✦</span> TERRAFORM <span>✦</span> DOCKER <span>✦</span>{" "}
          KUBERNETES <span>✦</span> AWS / GCP / AZURE <span>✦</span> GITOPS
        </div>
      </div>
      <section className="about shell" id="about">
        <div className="about-card">
          <div className="about-copy">
            <p className="eyebrow">
              <span /> About me
            </p>
            <h2>
              MRIDUL <em>ROY</em>
            </h2>
            <p className="about-location">Navi Mumbai, Maharashtra, India</p>
            <p>
              I’m a DevOps-minded engineer focused on cloud systems, automation,
              and dependable delivery. My work sits at the intersection of
              infrastructure operations, backend engineering, and developer
              experience—building the foundations that help teams ship faster
              without introducing chaos.
            </p>
            <p>
              From CI/CD pipelines and container workflows to infrastructure as
              code and service reliability, I build practical systems that are
              easy to operate, easy to trust, and ready to scale with the product.
            </p>
            <div className="about-stats">
              <div>
                <strong>852</strong>
                <span>followers</span>
              </div>
              <div>
                <strong>500+</strong>
                <span>connections</span>
              </div>
              <div>
                <strong>Cloud</strong>
                <span>DevOps & automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="deliverables shell" id="deliverables">
        <div className="section-intro">
          <div>
            <p className="eyebrow">
              <span /> Examples of deliverables
            </p>
            <h2>
              WHAT YOU CAN
              <br />
              <em>ACTUALLY GET.</em>
            </h2>
          </div>
        </div>
        <div className="deliverable-grid">
          {deliverables.map((item) => (
            <article key={item.title} className="deliverable-card">
              <span className="deliverable-tag">Example</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="services shell" id="services">
        <div className="section-intro">
          <div>
            <p className="eyebrow">
              <span /> What we operate
            </p>
            <h2>
              YOUR PLATFORM.
              <br />
              <em>ENGINEERED.</em>
            </h2>
          </div>
        </div>
        <div className="capability-grid">
          {capabilities.map(([num, title, text]) => (
            <article key={num}>
              <span className="cap-num">{num}</span>
              <div className="cap-icon">
                {num === "01"
                  ? "↗"
                  : num === "02"
                    ? "⌘"
                    : num === "03"
                      ? "☁"
                      : "◉"}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="experience shell" id="experience">
        <div className="experience-intro">
          <p className="eyebrow">
            <span /> Relevant experience
          </p>
          <h2>
            RESULTS THAT
            <br />
            <em>MOVE SYSTEMS.</em>
          </h2>
        </div>
        <ul className="experience-list">
          {experience.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </section>
      <section className="scope" id="scope">
        <div className="shell">
          <div className="scope-head">
            <div>
              <p className="eyebrow light">
                <span /> Clear boundaries
              </p>
              <h2>
                KNOW EXACTLY
                <br />
                <em>WHAT YOU GET.</em>
              </h2>
            </div>
            <p>
              ShipOps is focused DevOps delivery—not an open-ended staff
              augmentation contract. Every plan follows the same operating
              rules.
            </p>
          </div>
          <div className="scope-grid">
            <article>
              <p className="scope-label included">✓ Included</p>
              <ul>
                {scope.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <p className="scope-label excluded">× Not included</p>
              <ul>
                {scope.excluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="operating-rules">
            <article>
              <span>01</span>
              <h3>One active request</h3>
              <p>
                Keep an unlimited prioritized queue; we execute one request at a
                time and move to the next after approval.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Async by default</h3>
              <p>
                Your dedicated Trello board is the single source of truth for
                all requests, feedback, approvals, and updates. Slack access is
                also included for lightweight coordination and notifications.
                Most small requests are completed within 48–72 hours. Larger
                implementations are broken into weekly delivery milestones.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Pause or cancel</h3>
              <p>
                Cancel before renewal or pause at a billing boundary for up to
                three weeks. Your current paid period remains active.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="process" id="process">
        <div className="shell process-inner">
          <div>
            <p className="eyebrow light">
              <span /> How it works
            </p>
            <h2>
              ONE SUBSCRIPTION.
              <br />
              <em>FEWER INFRASTRUCTURE BOTTLENECKS.</em>
            </h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <div>
                <strong>Share your roadmap</strong>
                <p>
                  We audit the stack and prioritize the highest-leverage
                  infrastructure work.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>We build in your stack</strong>
                <p>
                  Most small work ships in 48–72 hours; larger work moves in
                  weekly milestones with full visibility in your existing tools.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Scale without surprises</strong>
                <p>
                  Pause, upgrade, or change priorities as your product evolves.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="pricing shell" id="pricing">
        <div className="pricing-head">
          <div>
            <p className="eyebrow">
              <span /> Weekly plans + a one-time offer
            </p>
            <h2>
              THE RIGHT CAPACITY.
              <br />
              <em>RIGHT NOW.</em>
            </h2>
          </div>
          <p>
            No contracts. No hidden retainers. Choose weekly senior DevOps
            capacity or start with a one-time Lite Audit.
          </p>
        </div>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article
              className={plan.featured ? "plan featured" : "plan"}
              key={plan.id}
            >
              {plan.featured && <div className="popular">MOST POPULAR</div>}
              {plan.billing === "one-time" && <div className="popular">ONE-TIME OFFER</div>}
              <p className="plan-name">{plan.name}</p>
              <p className="plan-copy">{plan.copy}</p>
              <div className="price">
                <sup>₹</sup>
                {plan.price.toLocaleString("en-IN")}
                <span>{plan.billing === "one-time" ? "one time" : "/week"}</span>
              </div>
              <ContactDialog planName={plan.name} billing={plan.billing} />
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="plan-note">
          Choose a plan, then get in touch to confirm fit and availability.
        </p>
      </section>
      <section className="faq shell" id="faq">
        <div className="faq-intro">
          <p className="eyebrow">
            <span /> The fine print, plainly
          </p>
          <h2>
            QUESTIONS.
            <br />
            <em>ANSWERED.</em>
          </h2>
          <p>
            Still unsure whether a request fits? Send it before subscribing and
            we’ll give you a direct answer.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="legal shell" id="legal">
        <div className="legal-intro">
          <p className="eyebrow">
            <span /> Legal &amp; policies
          </p>
          <h2>
            CLEAR TERMS.
            <br />
            <em>NO SURPRISES.</em>
          </h2>
          <p>
            The basics of working with ShipOps, written plainly. These policies
            apply to the website and consulting services operated by Mridul Roy.
          </p>
        </div>
        <div className="legal-list">
          <details open>
            <summary>
              Terms of Service
              <span aria-hidden="true">+</span>
            </summary>
            <div className="legal-content">
              <p>
                By requesting or engaging ShipOps services, you agree to confirm
                the scope, plan, price, access, and delivery expectations before
                work begins. A plan selection is an enquiry, not a completed
                purchase. Work starts after project confirmation and payment
                arrangements are agreed.
              </p>
              <p>
                ShipOps provides DevOps consulting and implementation within the
                agreed plan capacity. Delivery depends on scope, access,
                approvals, and third-party systems. Cloud-provider, SaaS, domain,
                and other third-party charges are paid by the client.
              </p>
              <p>
                Work is delivered into the client&apos;s accounts and repositories.
                After outstanding invoices are paid, the client owns the
                project-specific implementation and documentation. Either party
                may pause or end the engagement according to the agreed billing
                terms.
              </p>
            </div>
          </details>
          <details>
            <summary>
              Privacy Policy
              <span aria-hidden="true">+</span>
            </summary>
            <div className="legal-content">
              <p>
                ShipOps collects information you choose to share, such as your
                name, email address, company details, project requirements, and
                messages sent through the contact flow. This information is used
                only to respond to enquiries, assess fit, and deliver requested
                services.
              </p>
              <p>
                ShipOps does not sell your personal information. Information may
                be shared with service providers needed to communicate or deliver
                the work, and only for that purpose. You should not send
                passwords, private keys, payment credentials, or other secrets
                through the website or email enquiry.
              </p>
              <p>
                To ask about, correct, or delete information you have shared,
                contact <a href="mailto:midlry.mr@gmail.com">midlry.mr@gmail.com</a>.
                This policy may be updated when the service or its tools change.
              </p>
            </div>
          </details>
        </div>
      </section>
      <section className="cta" id="contact">
        <div className="shell">
          <p className="eyebrow light">
            <span /> Ready when you are
          </p>
          <h2>
            YOUR NEXT DEPLOY
            <br />
            STARTS <em>HERE.</em>
          </h2>
          <a className="button light-button" href="#pricing">
            Choose a plan <span>↗</span>
          </a>
        </div>
      </section>
      <footer className="shell footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">S</span> SHIPOPS
          <span className="dot">.</span>
        </a>
        <div className="footer-copy">
          <p>Subscription DevOps for Indian startups and small product teams that need reliable cloud infrastructure without hiring a full-time DevOps engineer.</p>
          <p>By Mridul Roy.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/d4rkr0n1n" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/d4rkr0n1n/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>© 2026 ShipOps</span>
        </div>
      </footer>
    </main>
  );
}
