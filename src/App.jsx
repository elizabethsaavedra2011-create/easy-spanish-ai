import { useState, useEffect, useRef } from "react";

const COLORS = {
  primary: "#0D24F3",
  primaryDark: "#0A1CC4",
  primaryLight: "#3D4FF5",
  accent: "#FF6B35",
  accentLight: "#FF8C5A",
  dark: "#0A0A1A",
  darkGray: "#1A1A2E",
  mediumGray: "#2D2D4A",
  lightGray: "#6B6B8A",
  lighter: "#A0A0C0",
  white: "#FFFFFF",
  offWhite: "#F5F5FF",
  cardBg: "#12122A",
  gradient1: "linear-gradient(135deg, #0D24F3 0%, #6B35FF 100%)",
  gradient2: "linear-gradient(135deg, #FF6B35 0%, #FF35A0 100%)",
  gradientDark: "linear-gradient(180deg, #0A0A1A 0%, #12122A 100%)",
};

const avatars = [
  {
    id: 1,
    name: "Sofía",
    role: "Tutora de Conversación",
    specialty: "Español Latinoamericano",
    color: "#FF6B35",
    emoji: "👩🏻‍🏫",
    level: "Principiante - Intermedio",
    description: "Especialista en conversación cotidiana y pronunciación natural.",
  },
  {
    id: 2,
    name: "Carlos",
    role: "Tutor de Gramática",
    specialty: "Español Europeo",
    color: "#0D24F3",
    emoji: "👨🏽‍💼",
    level: "Intermedio - Avanzado",
    description: "Experto en gramática avanzada y expresiones idiomáticas.",
  },
  {
    id: 3,
    name: "Valentina",
    role: "Tutora Cultural",
    specialty: "Español & Cultura",
    color: "#9B35FF",
    emoji: "👩🏽‍🎨",
    level: "Todos los niveles",
    description: "Combina el aprendizaje del idioma con la rica cultura hispana.",
  },
  {
    id: 4,
    name: "Miguel",
    role: "Tutor de Negocios",
    specialty: "Español Profesional",
    color: "#35BFF3",
    emoji: "👨🏻‍💻",
    level: "Avanzado",
    description: "Domina el vocabulario empresarial y presentaciones formales.",
  },
];

const features = [
  {
    icon: "🤖",
    title: "IA Conversacional 24/7",
    description: "Practica español a cualquier hora con avatares de IA que se adaptan a tu nivel y ritmo de aprendizaje.",
    color: "#0D24F3",
  },
  {
    icon: "🎯",
    title: "Plan Personalizado",
    description: "Cada sesión se adapta automáticamente a tus objetivos, errores frecuentes y áreas de mejora.",
    color: "#FF6B35",
  },
  {
    icon: "🗣️",
    title: "Pronunciación Perfecta",
    description: "Feedback instantáneo sobre tu pronunciación con análisis de voz en tiempo real.",
    color: "#9B35FF",
  },
  {
    icon: "📊",
    title: "Progreso Visible",
    description: "Estadísticas detalladas de tu avance, racha de días y áreas de dominio del idioma.",
    color: "#35BFF3",
  },
  {
    icon: "🌎",
    title: "Múltiples Dialectos",
    description: "Aprende español de España, México, Argentina y más variedades latinoamericanas.",
    color: "#FF35A0",
  },
  {
    icon: "🎮",
    title: "Aprendizaje Gamificado",
    description: "Gana puntos, desbloquea logros y compite con amigos mientras aprendes.",
    color: "#35F3A0",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    country: "🇺🇸 Estados Unidos",
    text: "En solo 3 meses con EasySpanish pasé de cero a mantener conversaciones completas. Los avatares de IA son increíblemente naturales.",
    rating: 5,
    avatar: "👩🏼",
  },
  {
    name: "James T.",
    country: "🇬🇧 Reino Unido",
    text: "Nunca pensé que aprender español pudiera ser tan entretenido. La IA corrige mis errores de pronunciación al instante.",
    rating: 5,
    avatar: "👨🏻",
  },
  {
    name: "Yuki M.",
    country: "🇯🇵 Japón",
    text: "EasySpanish entiende mis dificultades específicas como hablante de japonés. Es como tener un tutor personal a cualquier hora.",
    rating: 5,
    avatar: "👩🏻",
  },
];

const stats = [
  { value: "2M+", label: "Estudiantes activos" },
  { value: "150+", label: "Países" },
  { value: "95%", label: "Tasa de mejora" },
  { value: "4.9★", label: "Valoración media" },
];

const levels = [
  { name: "A1 - Principiante", desc: "Comienzas desde cero", color: "#35F3A0" },
  { name: "A2 - Básico", desc: "Frases y vocabulario básico", color: "#35BFF3" },
  { name: "B1 - Intermedio", desc: "Conversaciones cotidianas", color: "#0D24F3" },
  { name: "B2 - Avanzado", desc: "Temas complejos con fluidez", color: "#9B35FF" },
  { name: "C1 - Experto", desc: "Casi nativo", color: "#FF6B35" },
  { name: "C2 - Maestro", desc: "Dominio total del idioma", color: "#FF35A0" },
];

function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function AnimatedSection({ children, style = {} }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32.8024 7.29843C32.2173 5.87477 31.3801 4.59672 30.3152 3.50095C29.2498 2.40464 28.0083 1.54375 26.6247 0.941664C25.1895 0.316722 23.6681 0 22.1017 0H11.6153C10.0495 0 8.52751 0.316722 7.09283 0.941132C5.70928 1.54322 4.46724 2.40464 3.40233 3.50042C2.33691 4.59672 1.50027 5.87424 0.915138 7.29789C0.3078 8.77469 0 10.3408 0 11.952C0 13.5633 0.3078 15.1293 0.914621 16.6056C1.49975 18.0292 2.33691 19.3073 3.40181 20.4031C4.46724 21.4994 5.70877 22.3603 7.09232 22.9624C8.527 23.5868 10.049 23.9035 11.6148 23.9035H16.8583V28.5475C16.8583 28.902 17.2368 29.1182 17.5291 28.9312L19.2561 27.8274L27.496 22.5606L27.5259 22.5415L27.5559 22.5218C29.3861 21.3107 30.8368 19.8802 31.8677 18.2694C33.0942 16.3526 33.7165 14.2265 33.7165 11.9509C33.7165 10.3397 33.4087 8.77363 32.8019 7.29736L32.8024 7.29843Z"
        fill={COLORS.white}
      />
    </svg>
  );
}

function Navbar({ onCTAClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,26,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Logo size={32} />
        <span style={{ color: COLORS.white, fontWeight: 700, fontSize: "20px", letterSpacing: "-0.5px" }}>
          Easy<span style={{ color: COLORS.primary }}>Spanish</span>
        </span>
      </div>

      {/* Desktop nav */}
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
        {["Características", "Avatares", "Niveles", "Testimonios"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: COLORS.lighter,
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = COLORS.white)}
            onMouseLeave={(e) => (e.target.style.color = COLORS.lighter)}
          >
            {item}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button
          onClick={onCTAClick}
          style={{
            background: COLORS.gradient1,
            color: COLORS.white,
            border: "none",
            borderRadius: "50px",
            padding: "10px 24px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 4px 20px rgba(13,36,243,0.4)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 30px rgba(13,36,243,0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 20px rgba(13,36,243,0.4)";
          }}
        >
          Comenzar Gratis
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            color: COLORS.white,
            cursor: "pointer",
            fontSize: "24px",
            padding: "4px",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10,10,26,0.98)",
            backdropFilter: "blur(20px)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {["Características", "Avatares", "Niveles", "Testimonios"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ color: COLORS.white, textDecoration: "none", fontSize: "16px", fontWeight: 500 }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection({ onCTAClick }) {
  const [typedText, setTypedText] = useState("");
  const phrases = ["¡Hola! ¿Cómo estás?", "Me llamo Carlos.", "¿Dónde está el baño?", "Quiero aprender español."];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setTypedText(current.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIdx > 0) {
        setTypedText(current.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setPhraseIdx((phraseIdx + 1) % phrases.length);
      }
    }, deleting ? 60 : 100);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
        background: COLORS.gradientDark,
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13,36,243,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(13,36,243,0.15)",
          border: "1px solid rgba(13,36,243,0.4)",
          borderRadius: "50px",
          padding: "8px 20px",
          marginBottom: "32px",
          color: COLORS.primaryLight,
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        <span>✨</span> Tutores de IA generativa — 100% personalizados
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: "clamp(36px, 8vw, 80px)",
          fontWeight: 900,
          color: COLORS.white,
          lineHeight: 1.1,
          marginBottom: "24px",
          maxWidth: "900px",
          letterSpacing: "-2px",
        }}
      >
        Aprende Español con
        <br />
        <span
          style={{
            background: COLORS.gradient1,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Avatares de IA
        </span>
      </h1>

      {/* Typing effect */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px",
        }}
      >
        <span style={{ fontSize: "28px" }}>🤖</span>
        <div
          style={{
            background: COLORS.cardBg,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "12px 20px",
            fontSize: "clamp(16px, 3vw, 22px)",
            color: COLORS.white,
            fontStyle: "italic",
            minWidth: "280px",
            textAlign: "left",
          }}
        >
          "{typedText}
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              background: COLORS.primary,
              marginLeft: "2px",
              animation: "blink 1s step-end infinite",
              verticalAlign: "text-bottom",
            }}
          />
          "
        </div>
      </div>

      <p
        style={{
          fontSize: "clamp(16px, 2.5vw, 20px)",
          color: COLORS.lighter,
          maxWidth: "600px",
          lineHeight: 1.7,
          marginBottom: "48px",
        }}
      >
        Tutorías 1 a 1 automatizadas con avatares de IA generativa. Practica conversaciones
        reales, corrige tu pronunciación y avanza a tu ritmo — las 24 horas, los 7 días de la semana.
      </p>

      {/* CTA Buttons */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={onCTAClick}
          style={{
            background: COLORS.gradient1,
            color: COLORS.white,
            border: "none",
            borderRadius: "50px",
            padding: "18px 40px",
            fontSize: "18px",
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 8px 40px rgba(13,36,243,0.5)",
            transition: "all 0.3s ease",
            letterSpacing: "-0.5px",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px) scale(1.02)";
            e.target.style.boxShadow = "0 16px 50px rgba(13,36,243,0.7)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = "0 8px 40px rgba(13,36,243,0.5)";
          }}
        >
          🚀 Empezar Gratis
        </button>
        <button
          onClick={onCTAClick}
          style={{
            background: "transparent",
            color: COLORS.white,
            border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: "50px",
            padding: "18px 40px",
            fontSize: "18px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = COLORS.white;
            e.target.style.background = "rgba(255,255,255,0.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = "rgba(255,255,255,0.3)";
            e.target.style.background = "transparent";
          }}
        >
          Ver Demo
        </button>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          gap: "48px",
          marginTop: "80px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                fontWeight: 900,
                color: COLORS.white,
                letterSpacing: "-1px",
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: "14px", color: COLORS.lighter, marginTop: "4px" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section
      id="características"
      style={{
        padding: "100px 24px",
        background: COLORS.dark,
      }}
    >
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(13,36,243,0.15)",
              border: "1px solid rgba(13,36,243,0.3)",
              borderRadius: "50px",
              padding: "6px 18px",
              color: COLORS.primaryLight,
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Características
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900,
              color: COLORS.white,
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Todo lo que necesitas para
            <br />
            <span
              style={{
                background: COLORS.gradient1,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              dominar el español
            </span>
          </h2>
          <p style={{ color: COLORS.lighter, fontSize: "18px", maxWidth: "500px", margin: "0 auto" }}>
            Tecnología de punta al servicio de tu aprendizaje
          </p>
        </div>
      </AnimatedSection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {features.map((feature, i) => (
          <AnimatedSection key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <FeatureCard feature={feature} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? COLORS.cardBg : "rgba(255,255,255,0.03)",
        border: hovered ? `1px solid ${feature.color}40` : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "32px",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${feature.color}20` : "none",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "16px",
          background: `${feature.color}20`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          marginBottom: "20px",
          border: `1px solid ${feature.color}30`,
        }}
      >
        {feature.icon}
      </div>
      <h3 style={{ color: COLORS.white, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>
        {feature.title}
      </h3>
      <p style={{ color: COLORS.lighter, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
        {feature.description}
      </p>
    </div>
  );
}

function AvatarsSection({ onCTAClick }) {
  const [selected, setSelected] = useState(0);
  const current = avatars[selected];

  return (
    <section
      id="avatares"
      style={{
        padding: "100px 24px",
        background: COLORS.darkGray,
      }}
    >
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,107,53,0.15)",
              border: "1px solid rgba(255,107,53,0.3)",
              borderRadius: "50px",
              padding: "6px 18px",
              color: COLORS.accent,
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Tus Tutores de IA
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900,
              color: COLORS.white,
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Conoce a tus{" "}
            <span
              style={{
                background: COLORS.gradient2,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              avatares
            </span>
          </h2>
          <p style={{ color: COLORS.lighter, fontSize: "18px" }}>
            Tutores de IA especializados, cada uno con su propio estilo de enseñanza
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "center",
          }}
          className="avatars-grid"
        >
          {/* Avatar display */}
          <div
            style={{
              background: COLORS.cardBg,
              borderRadius: "32px",
              padding: "48px 32px",
              textAlign: "center",
              border: `2px solid ${current.color}40`,
              boxShadow: `0 0 80px ${current.color}20`,
              transition: "all 0.4s ease",
            }}
          >
            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                background: `${current.color}20`,
                border: `3px solid ${current.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "72px",
                margin: "0 auto 24px",
                transition: "all 0.3s ease",
              }}
            >
              {current.emoji}
            </div>
            <h3 style={{ color: COLORS.white, fontSize: "28px", fontWeight: 800, marginBottom: "8px" }}>
              {current.name}
            </h3>
            <div
              style={{
                display: "inline-block",
                background: `${current.color}25`,
                border: `1px solid ${current.color}50`,
                borderRadius: "50px",
                padding: "4px 16px",
                color: current.color,
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              {current.role}
            </div>
            <p style={{ color: COLORS.lighter, fontSize: "15px", marginBottom: "8px" }}>
              📍 {current.specialty}
            </p>
            <p style={{ color: COLORS.lighter, fontSize: "15px", marginBottom: "16px" }}>
              📈 {current.level}
            </p>
            <p style={{ color: COLORS.white, fontSize: "15px", lineHeight: 1.7 }}>
              {current.description}
            </p>

            {/* Chat preview */}
            <div
              style={{
                background: COLORS.dark,
                borderRadius: "16px",
                padding: "16px",
                marginTop: "24px",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", gap: "8px", marginBottom: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "20px" }}>{current.emoji}</span>
                <div
                  style={{
                    background: `${current.color}20`,
                    borderRadius: "12px 12px 12px 0",
                    padding: "10px 14px",
                    color: COLORS.white,
                    fontSize: "14px",
                  }}
                >
                  ¡Hola! Soy {current.name}. ¿Comenzamos con la lección de hoy?
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", alignItems: "flex-start" }}>
                <div
                  style={{
                    background: COLORS.primary,
                    borderRadius: "12px 12px 0 12px",
                    padding: "10px 14px",
                    color: COLORS.white,
                    fontSize: "14px",
                  }}
                >
                  ¡Sí, estoy listo!
                </div>
                <span style={{ fontSize: "20px" }}>🙋</span>
              </div>
            </div>

            <button
              onClick={onCTAClick}
              style={{
                marginTop: "24px",
                width: "100%",
                background: `${current.color}`,
                color: COLORS.white,
                border: "none",
                borderRadius: "12px",
                padding: "14px",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Practicar con {current.name} →
            </button>
          </div>

          {/* Avatar selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {avatars.map((avatar, i) => (
              <div
                key={avatar.id}
                onClick={() => setSelected(i)}
                style={{
                  background: selected === i ? `${avatar.color}15` : "rgba(255,255,255,0.03)",
                  border: selected === i ? `2px solid ${avatar.color}` : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "20px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  transform: selected === i ? "scale(1.02)" : "scale(1)",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: `${avatar.color}20`,
                    border: `2px solid ${avatar.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    flexShrink: 0,
                  }}
                >
                  {avatar.emoji}
                </div>
                <div>
                  <div style={{ color: COLORS.white, fontWeight: 700, fontSize: "17px" }}>
                    {avatar.name}
                  </div>
                  <div style={{ color: avatar.color, fontSize: "13px", fontWeight: 600 }}>
                    {avatar.role}
                  </div>
                  <div style={{ color: COLORS.lighter, fontSize: "12px", marginTop: "2px" }}>
                    {avatar.level}
                  </div>
                </div>
                {selected === i && (
                  <div
                    style={{
                      marginLeft: "auto",
                      color: avatar.color,
                      fontSize: "20px",
                    }}
                  >
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

function LevelsSection({ onCTAClick }) {
  const [activeLevel, setActiveLevel] = useState(null);

  return (
    <section
      id="niveles"
      style={{
        padding: "100px 24px",
        background: COLORS.dark,
      }}
    >
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(155,53,255,0.15)",
              border: "1px solid rgba(155,53,255,0.3)",
              borderRadius: "50px",
              padding: "6px 18px",
              color: "#9B35FF",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Todos los Niveles
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900,
              color: COLORS.white,
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Desde cero hasta{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9B35FF 0%, #35BFF3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              experto nativo
            </span>
          </h2>
          <p style={{ color: COLORS.lighter, fontSize: "18px" }}>
            El sistema se adapta a tu nivel actual y te lleva al siguiente
          </p>
        </div>
      </AnimatedSection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto 60px",
        }}
      >
        {levels.map((level, i) => (
          <AnimatedSection key={i}>
            <div
              onMouseEnter={() => setActiveLevel(i)}
              onMouseLeave={() => setActiveLevel(null)}
              style={{
                background: activeLevel === i ? `${level.color}15` : "rgba(255,255,255,0.03)",
                border: activeLevel === i ? `2px solid ${level.color}` : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "28px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: activeLevel === i ? "translateY(-6px)" : "translateY(0)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    background: `${level.color}25`,
                    border: `1px solid ${level.color}50`,
                    borderRadius: "8px",
                    padding: "4px 10px",
                    color: level.color,
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                >
                  {level.name.split(" - ")[0]}
                </span>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: level.color,
                    boxShadow: `0 0 10px ${level.color}`,
                  }}
                />
              </div>
              <h3 style={{ color: COLORS.white, fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>
                {level.name.split(" - ")[1]}
              </h3>
              <p style={{ color: COLORS.lighter, fontSize: "14px", lineHeight: 1.6 }}>
                {level.desc}
              </p>
              <div
                style={{
                  marginTop: "16px",
                  height: "4px",
                  borderRadius: "4px",
                  background: "rgba(255,255,255,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${(i + 1) * 16.6}%`,
                    height: "100%",
                    background: level.color,
                    borderRadius: "4px",
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onCTAClick}
            style={{
              background: "linear-gradient(135deg, #9B35FF 0%, #35BFF3 100%)",
              color: COLORS.white,
              border: "none",
              borderRadius: "50px",
              padding: "18px 48px",
              fontSize: "18px",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 8px 40px rgba(155,53,255,0.4)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 16px 50px rgba(155,53,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 40px rgba(155,53,255,0.4)";
            }}
          >
            Descubre tu nivel →
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      style={{
        padding: "100px 24px",
        background: COLORS.darkGray,
      }}
    >
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(53,191,243,0.15)",
              border: "1px solid rgba(53,191,243,0.3)",
              borderRadius: "50px",
              padding: "6px 18px",
              color: "#35BFF3",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Testimonios
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900,
              color: COLORS.white,
              letterSpacing: "-1px",
            }}
          >
            Lo que dicen{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #35BFF3 0%, #0D24F3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              nuestros estudiantes
            </span>
          </h2>
        </div>
      </AnimatedSection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
            <TestimonialCard testimonial={t} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? COLORS.cardBg : "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "32px",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
        {Array(testimonial.rating).fill(0).map((_, i) => (
          <span key={i} style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
        ))}
      </div>
      <p
        style={{
          color: COLORS.white,
          fontSize: "16px",
          lineHeight: 1.7,
          fontStyle: "italic",
          marginBottom: "24px",
        }}
      >
        "{testimonial.text}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "rgba(13,36,243,0.2)",
            border: "2px solid rgba(13,36,243,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div style={{ color: COLORS.white, fontWeight: 700, fontSize: "15px" }}>
            {testimonial.name}
          </div>
          <div style={{ color: COLORS.lighter, fontSize: "13px" }}>
            {testimonial.country}
          </div>
        </div>
      </div>
    </div>
  );
}

function CTASection({ onCTAClick }) {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: COLORS.dark,
        textAlign: "center",
      }}
    >
      <AnimatedSection>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(13,36,243,0.2) 0%, rgba(155,53,255,0.2) 100%)",
            border: "1px solid rgba(13,36,243,0.3)",
            borderRadius: "40px",
            padding: "80px 40px",
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-20%",
              width: "60%",
              height: "100%",
              background: "radial-gradient(circle, rgba(13,36,243,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-50%",
              right: "-20%",
              width: "60%",
              height: "100%",
              background: "radial-gradient(circle, rgba(155,53,255,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <div style={{ fontSize: "64px", marginBottom: "24px" }}>🎯</div>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 900,
                color: COLORS.white,
                marginBottom: "20px",
                letterSpacing: "-1px",
              }}
            >
              Comienza tu viaje al
              <br />
              <span
                style={{
                  background: COLORS.gradient1,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                español fluido hoy
              </span>
            </h2>
            <p
              style={{
                color: COLORS.lighter,
                fontSize: "18px",
                maxWidth: "500px",
                margin: "0 auto 40px",
                lineHeight: 1.7,
              }}
            >
              Únete a más de 2 millones de estudiantes que ya aprenden con EasySpanish AI.
              Primeros 7 días completamente gratis.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={onCTAClick}
                style={{
                  background: COLORS.gradient1,
                  color: COLORS.white,
                  border: "none",
                  borderRadius: "50px",
                  padding: "20px 48px",
                  fontSize: "20px",
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: "0 8px 40px rgba(13,36,243,0.5)",
                  transition: "all 0.3s",
                  letterSpacing: "-0.5px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px) scale(1.02)";
                  e.target.style.boxShadow = "0 16px 50px rgba(13,36,243,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "0 8px 40px rgba(13,36,243,0.5)";
                }}
              >
                🚀 Empezar Gratis — 7 días sin cargo
              </button>
            </div>
            <p style={{ color: COLORS.lightGray, fontSize: "13px", marginTop: "16px" }}>
              Sin tarjeta de crédito • Cancela cuando quieras
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#050510",
        padding: "60px 24px 32px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "60px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Logo size={28} />
              <span style={{ color: COLORS.white, fontWeight: 700, fontSize: "18px" }}>
                Easy<span style={{ color: COLORS.primary }}>Spanish</span>
              </span>
            </div>
            <p style={{ color: COLORS.lighter, fontSize: "14px", lineHeight: 1.7, maxWidth: "220px" }}>
              Tutorías 1 a 1 automatizadas con avatares de IA generativa. Aprende español de forma natural.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              {["𝕏", "📘", "📸", "▶️"].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {[
            {
              title: "Producto",
              links: ["Características", "Avatares de IA", "Precios", "Novedades"],
            },
            {
              title: "Aprendizaje",
              links: ["Todos los niveles", "Conversación", "Gramática", "Cultura hispana"],
            },
            {
              title: "Easy Spanish AI",
              links: ["Sobre nosotros", "Blog", "Carreras", "Contacto"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  color: COLORS.white,
                  fontSize: "15px",
                  fontWeight: 700,
                  marginBottom: "16px",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: COLORS.lighter,
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = COLORS.white)}
                      onMouseLeave={(e) => (e.target.style.color = COLORS.lighter)}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ color: COLORS.lightGray, fontSize: "13px", margin: 0 }}>
            © 2024 Easy Spanish AI. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacidad", "Términos", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: COLORS.lightGray, fontSize: "13px", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = COLORS.white)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.lightGray)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Modal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: COLORS.darkGray,
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "28px",
          padding: "48px 40px",
          maxWidth: "460px",
          width: "100%",
          position: "relative",
          boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: COLORS.white,
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌟</div>
          <h2 style={{ color: COLORS.white, fontSize: "26px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.5px" }}>
            Comienza Gratis
          </h2>
          <p style={{ color: COLORS.lighter, fontSize: "15px" }}>
            7 días gratis. Sin tarjeta de crédito.
          </p>
        </div>

        {/* TODO: Conectar formulario con sistema de autenticación real */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            { placeholder: "Tu nombre", icon: "👤", type: "text" },
            { placeholder: "Correo electrónico", icon: "📧", type: "email" },
            { placeholder: "Contraseña", icon: "🔒", type: "password" },
          ].map((field) => (
            <div key={field.placeholder} style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "16px",
                }}
              >
                {field.icon}
              </span>
              <input
                type={field.type}
                placeholder={field.placeholder}
                style={{
                  width: "100%",
                  padding: "14px 16px 14px 44px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: COLORS.white,
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
          ))}

          <select
            style={{
              width: "100%",
              padding: "14px 16px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              color: COLORS.lighter,
              fontSize: "15px",
              outline: "none",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <option value="" style={{ background: COLORS.darkGray }}>¿Cuál es tu nivel de español?</option>
            {levels.map((l) => (
              <option key={l.name} value={l.name} style={{ background: COLORS.darkGray }}>
                {l.name}
              </option>
            ))}
          </select>

          <button
            style={{
              width: "100%",
              background: COLORS.gradient1,
              color: COLORS.white,
              border: "none",
              borderRadius: "12px",
              padding: "16px",
              fontSize: "17px",
              fontWeight: 800,
              cursor: "pointer",
              marginTop: "8px",
              boxShadow: "0 8px 30px rgba(13,36,243,0.4)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.boxShadow = "0 12px 40px rgba(13,36,243,0.6)")}
            onMouseLeave={(e) => (e.target.style.boxShadow = "0 8px 30px rgba(13,36,243,0.4)")}
          >
            Crear cuenta gratis →
          </button>

          <div style={{ textAlign: "center", position: "relative" }}>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "8px" }} />
            <span
              style={{
                background: COLORS.darkGray,
                color: COLORS.lightGray,
                padding: "0 12px",
                fontSize: "13px",
                position: "relative",
                top: "-10px",
              }}
            >
              o continúa con
            </span>
          </div>

          <button
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.05)",
              color: COLORS.white,
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "14px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.08)")}
            onMouseLeave={(e) => (e.target.style.background = "rgba(255,255,255,0.05)")}
          >
            {/* TODO: Implementar inicio de sesión con Google OAuth real */}
            <span>🔍</span> Continuar con Google
          </button>
        </div>

        <p style={{ textAlign: "center", color: COLORS.lightGray, fontSize: "12px", marginTop: "20px" }}>
          Al registrarte aceptas nuestros{" "}
          <a href="#" style={{ color: COLORS.primaryLight }}>Términos de servicio</a>{" "}
          y{" "}
          <a href="#" style={{ color: COLORS.primaryLight }}>Política de privacidad</a>
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: COLORS.dark,
        color: COLORS.white,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(13,36,243,0.4); }
          70% { box-shadow: 0 0 0 20px rgba(13,36,243,0); }
          100% { box-shadow: 0 0 0 0 rgba(13,36,243,0); }
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0A1A; }
        ::-webkit-scrollbar-thumb { background: #0D24F3; border-radius: 3px; }

        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .avatars-grid { grid-template-columns: 1fr !important; }
        }

        input::placeholder { color: rgba(160,160,192,0.5); }
      `}</style>

      <Navbar onCTAClick={() => setModalOpen(true)} />
      <HeroSection onCTAClick={() => setModalOpen(true)} />
      <FeaturesSection />
      <AvatarsSection onCTAClick={() => setModalOpen(true)} />
      <LevelsSection onCTAClick={() => setModalOpen(true)} />
      <TestimonialsSection />
      <CTASection onCTAClick={() => setModalOpen(true)} />
      <Footer />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}