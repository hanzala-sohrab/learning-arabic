import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: "var(--gradient-hero)",
          borderRadius: "var(--radius-xl)",
          padding: "3.5rem 2.5rem",
          marginBottom: "2.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        {/*<div
          style={{
            position: "absolute",
            top: "-20px",
            right: "40px",
            fontFamily: "var(--font-arabic)",
            fontSize: "8rem",
            opacity: 0.04,
            color: "var(--accent-gold)",
            direction: "rtl",
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          بسم الله
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "20px",
            fontFamily: "var(--font-arabic)",
            fontSize: "6rem",
            opacity: 0.03,
            color: "var(--accent-gold)",
            direction: "rtl",
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          العربية
        </div>*/}

        <div className="animate-fade-in-up">
          <div style={{ fontFamily: "var(--font-arabic)", marginBottom: "1rem", fontSize: '52px' }}>ٱلسَّلَامُ عَلَيْكُمْ</div>
          <div
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--accent-gold)",
              marginBottom: "0.75rem",
              fontWeight: 600,
            }}
          >
            ✦ Begin Your Journey
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1rem",
              maxWidth: "600px",
            }}
          >
            <span className="text-gradient-gold">Master Arabic</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>
              One Letter at a Time
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "520px",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            Explore the beauty of the Arabic language through interactive
            lessons, flashcards, and quizzes. From the alphabet to
            conversations — we&apos;ve got you covered.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/alphabet" className="btn-primary" id="cta-start">
              Start Learning →
            </Link>
            <Link href="/lessons" className="btn-secondary" id="cta-lessons">
              Browse Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stat-grid">
        {[
          { number: "28", label: "Arabic Letters", color: "var(--accent-gold)" },
          {
            number: "60+",
            label: "Vocabulary Words",
            color: "var(--accent-emerald)",
          },
          {
            number: "6",
            label: "Structured Lessons",
            color: "var(--accent-blue)",
          },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`glass-card stat-card animate-fade-in-up stagger-${i + 1}`}
          >
            <div className="stat-number" style={{ color: stat.color }}>
              {stat.number}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Feature Cards */}
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "1.25rem",
          color: "var(--text-primary)",
        }}
      >
        What You&apos;ll Learn
      </h2>
      <div className="grid-features">
        {[
          {
            icon: "أ",
            title: "Arabic Alphabet",
            desc: "Master all 28 letters — their shapes, sounds, and how they change position in a word.",
            href: "/alphabet",
            color: "gold",
            isArabic: true,
          },
          {
            icon: "📖",
            title: "Vocabulary",
            desc: "Build your word bank with 60+ essential words organized by categories like greetings, numbers, and more.",
            href: "/vocabulary",
            color: "emerald",
            isArabic: false,
          },
          {
            icon: "🎯",
            title: "Practice & Quiz",
            desc: "Test your knowledge with interactive quizzes. Track your score and build a learning streak.",
            href: "/practice",
            color: "blue",
            isArabic: false,
          },
          {
            icon: "📚",
            title: "Structured Lessons",
            desc: "Follow a guided curriculum from alphabet basics to everyday conversations.",
            href: "/lessons",
            color: "purple",
            isArabic: false,
          },
        ].map((feature, i) => (
          <Link
            key={feature.title}
            href={feature.href}
            style={{ textDecoration: "none", color: "inherit" }}
            id={`feature-${feature.title.toLowerCase().replace(/ /g, "-")}`}
          >
            <div
              className={`glass-card feature-card ${feature.color} animate-fade-in-up stagger-${i + 1}`}
              style={{ height: "100%" }}
            >
              <div className={`feature-icon ${feature.color}`}>
                <span
                  style={{
                    fontFamily: feature.isArabic
                      ? "var(--font-arabic)"
                      : "inherit",
                    fontSize: feature.isArabic ? "1.75rem" : "1.5rem",
                  }}
                >
                  {feature.icon}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "var(--text-primary)",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {feature.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <section
        className="glass-card-static"
        style={{
          marginTop: "3rem",
          padding: "2.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-arabic)",
            fontSize: "2.5rem",
            color: "var(--accent-gold-light)",
            direction: "rtl",
            marginBottom: "0.75rem",
          }}
        >
          بسم الله الرحمن الرحيم
        </div>
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "1.5rem",
            fontSize: "1rem",
          }}
        >
          &ldquo;In the name of God, the Most Gracious, the Most
          Merciful&rdquo; — Begin your journey with purpose.
        </p>
        <Link href="/alphabet" className="btn-primary" id="cta-bottom">
          Let&apos;s Begin →
        </Link>
      </section>
    </div>
  );
}
