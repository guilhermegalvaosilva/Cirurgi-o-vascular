import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
  Heart,
  Activity,
  Shield,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const SERVICES = [
  {
    icon: Activity,
    title: "Varizes e Insuficiência Venosa",
    desc: "Tratamento minimamente invasivo com laser endovenoso, espuma química e radiofrequência para varizes de todos os graus.",
    detail: "EVLA · Escleroterapia · CHIVA",
  },
  {
    icon: Heart,
    title: "Doenças das Artérias",
    desc: "Diagnóstico e tratamento de doenças arteriais periféricas, aneurismas e estenoses com técnicas abertas e endovasculares.",
    detail: "Angioplastia · Stents · Bypass",
  },
  {
    icon: Shield,
    title: "Trombose Venosa Profunda",
    desc: "Tratamento especializado de TVP aguda e crônica, com anticoagulação guiada por exames de imagem avançados.",
    detail: "Duplex · Trombólise · Filtros",
  },
  {
    icon: Award,
    title: "Cirurgia Endovascular",
    desc: "Procedimentos percutâneos para tratamento de doenças vasculares complexas com menor risco e recuperação mais rápida.",
    detail: "EVAR · TEVAR · Embolização",
  },
];

const STATS = [
  { value: "18+", label: "Anos de experiência" },
  { value: "4.200+", label: "Cirurgias realizadas" },
  { value: "97%", label: "Satisfação dos pacientes" },
  { value: "3", label: "Hospitais credenciados" },
];

const TESTIMONIALS = [
  {
    name: "Maria Fernanda Costa",
    age: "58 anos",
    text: "Após anos sofrendo com dores nas pernas e varizes extensas, o Dr. Ricardo me devolveu a qualidade de vida. O procedimento foi rápido, sem dor e em poucos dias já estava caminhando normalmente.",
    stars: 5,
    proc: "Tratamento de varizes",
  },
  {
    name: "José Antônio Silva",
    age: "67 anos",
    text: "Fui encaminhado com diagnóstico de aneurisma de aorta. O Dr. Ricardo explicou cada etapa com clareza e o tratamento endovascular foi um sucesso. Profissional excepcional.",
    stars: 5,
    proc: "Cirurgia endovascular",
  },
  {
    name: "Carla Mendes",
    age: "43 anos",
    text: "Tive trombose venosa profunda e fiquei muito assustada. O atendimento foi cuidadoso, tranquilizador e o tratamento preciso. Me sinto em ótimas mãos.",
    stars: 5,
    proc: "Tratamento de TVP",
  },
];

const CREDENTIALS = [
  "Graduação em Medicina — Universidade de São Paulo (USP)",
  "Residência em Cirurgia Vascular — InCor / HCFMUSP",
  "Membro titular da Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV)",
  "Fellowship em Cirurgia Endovascular — Hospital das Clínicas",
  "Membro do Colégio Brasileiro de Cirurgiões (CBC)",
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  function scrollTo(id: string) {
    setMobileOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span
              className="text-primary font-semibold text-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dr. Ronaldo Soares
            </span>
            <span className="text-muted-foreground text-xs tracking-widest uppercase">
              Cirurgia Vascular
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contato")}
              className="ml-2 px-5 py-2 bg-primary text-primary-foreground text-sm rounded-sm hover:bg-primary/90 transition-colors duration-200"
            >
              Agendar consulta
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-left text-sm text-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contato")}
              className="mt-2 px-5 py-2 bg-primary text-primary-foreground text-sm rounded-sm w-full"
            >
              Agendar consulta
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="inicio"
        className="pt-16 min-h-screen grid md:grid-cols-2"
      >
        {/* Left */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
          <p className="text-accent text-xs tracking-widest uppercase mb-4 font-medium">
            CRM-SP 123.456 · RQE 45678
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            Saúde vascular com cuidado e precisão
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
            Especialista em cirurgia vascular e endovascular com mais de 18 anos de
            experiência. Diagnóstico preciso, tratamento moderno e atenção individualizada
            para cada paciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#contato")}
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-all duration-200 hover:gap-3"
            >
              Agendar consulta <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("#especialidades")}
              className="flex items-center justify-center gap-2 px-8 py-3.5 border border-primary/30 text-primary text-sm font-medium rounded-sm hover:bg-secondary transition-colors duration-200"
            >
              Ver especialidades
            </button>
          </div>
          <div className="mt-12 flex items-center gap-2">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="#4a8fa8" stroke="none" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm ml-1">
              4.9 · mais de 380 avaliações verificadas
            </span>
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative hidden md:block bg-secondary overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&h=1000&fit=crop&auto=format"
            alt="Cirurgião vascular em ambiente clínico moderno"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
          {/* Floating card */}
          <div className="absolute bottom-12 left-8 bg-white/95 backdrop-blur-sm p-5 rounded-sm shadow-lg border border-border max-w-56">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent font-medium tracking-wide uppercase">Disponível</span>
            </div>
            <p className="text-primary text-sm font-medium">Consultas presenciais e telemedicina</p>
            <p className="text-muted-foreground text-xs mt-1">Seg – Sex, 08h às 18h</p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-primary py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-4xl text-primary-foreground mb-1"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                {s.value}
              </p>
              <p className="text-primary-foreground/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section id="especialidades" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-widest uppercase font-medium mb-3">
            Áreas de atuação
          </p>
          <h2
            className="text-3xl md:text-4xl text-primary"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            Especialidades
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Tratamentos completos para doenças do sistema vascular, com abordagem
            minimamente invasiva sempre que possível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-sm p-8 hover:border-accent/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-sm flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <s.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3
                    className="text-primary text-lg mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <p
                    className="text-xs text-accent/80 tracking-widest"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {s.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="bg-secondary py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] bg-secondary rounded-sm overflow-hidden order-2 md:order-1 flex items-center justify-center">
            <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" className="w-3/4 h-3/4 opacity-70">
              {/* head */}
              <circle cx="100" cy="72" r="42" fill="#1e3d5c" />
              {/* white coat body */}
              <path d="M30 260 Q30 175 58 160 L100 175 L142 160 Q170 175 170 260 Z" fill="#e8eff6" />
              {/* shirt/tie */}
              <path d="M100 175 L88 160 L100 148 L112 160 Z" fill="#1e3d5c" />
              <rect x="97" y="160" width="6" height="30" rx="3" fill="#4a8fa8" />
              {/* coat lapels */}
              <path d="M100 175 L75 155 L58 160 L100 185 Z" fill="white" />
              <path d="M100 175 L125 155 L142 160 L100 185 Z" fill="white" />
              {/* pocket */}
              <rect x="115" y="185" width="22" height="16" rx="2" fill="white" stroke="#d0dce8" strokeWidth="1" />
              <line x1="126" y1="184" x2="126" y2="178" stroke="#4a8fa8" strokeWidth="2.5" strokeLinecap="round" />
              {/* stethoscope */}
              <path d="M70 175 Q55 200 65 220 Q75 238 92 234" fill="none" stroke="#4a8fa8" strokeWidth="4" strokeLinecap="round" />
              <circle cx="92" cy="234" r="7" fill="#4a8fa8" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-accent text-xs tracking-widest uppercase font-medium mb-4">
              Sobre o médico
            </p>
            <h2
              className="text-3xl md:text-4xl text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Dr. Ronaldo Soares
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Com formação pela Universidade de São Paulo e residência no InCor — um dos
              maiores centros de cardiologia e cirurgia vascular do mundo — o Dr. Ricardo
              dedica sua carreira ao cuidado integral da saúde vascular.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Combina o domínio das técnicas abertas clássicas com as mais modernas
              abordagens endovasculares, sempre priorizando o bem-estar e a segurança
              do paciente. Atende em três hospitais de referência em São Paulo.
            </p>

            <div className="space-y-3">
              {CREDENTIALS.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{c}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#contato")}
              className="mt-10 flex items-center gap-2 text-sm text-primary font-medium border-b border-primary/40 pb-0.5 hover:border-primary transition-colors"
            >
              Agendar uma consulta <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section id="depoimentos" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-widest uppercase font-medium mb-3">
            Pacientes
          </p>
          <h2
            className="text-3xl md:text-4xl text-primary"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            O que dizem nossos pacientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-7">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} fill="#4a8fa8" stroke="none" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-primary font-medium text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  {t.age} · {t.proc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="bg-primary py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-accent text-xs tracking-widest uppercase font-medium mb-4">
              Contato
            </p>
            <h2
              className="text-3xl md:text-4xl text-primary-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Agende sua consulta
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-10">
              Entre em contato para agendar uma consulta presencial ou por telemedicina.
              Nossa equipe responderá em até 24 horas.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Telefone",
                  value: "(11) 3456-7890",
                  sub: "Seg – Sex, 08h às 18h",
                },
                {
                  icon: Mail,
                  label: "E-mail",
                  value: "contato@drriacardoalmeida.com.br",
                  sub: "Resposta em até 24h",
                },
                {
                  icon: MapPin,
                  label: "Consultório",
                  value: "Av. Brigadeiro Luís Antônio, 278, Bela Vista",
                  sub: "São Paulo – SP",
                },
                {
                  icon: Clock,
                  label: "Atendimento",
                  value: "Segunda a Sexta: 08h – 18h",
                  sub: "Sábado: 08h – 12h",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-primary-foreground/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-primary-foreground/70" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/50 text-xs uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-primary-foreground text-sm font-medium">{item.value}</p>
                    <p className="text-primary-foreground/50 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-background rounded-sm p-8 border border-white/5">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={28} className="text-accent" />
                </div>
                <h3
                  className="text-primary text-xl mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Mensagem enviada!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Nossa equipe entrará em contato em até 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wide font-medium block mb-1.5">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Maria da Silva"
                    className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wide font-medium block mb-1.5">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={form.telefone}
                      onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                      placeholder="(11) 99999-0000"
                      className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wide font-medium block mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wide font-medium block mb-1.5">
                    Motivo da consulta
                  </label>
                  <textarea
                    rows={4}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    placeholder="Descreva brevemente seu caso ou sintomas..."
                    className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors duration-200"
                >
                  Enviar mensagem
                </button>
                <p className="text-muted-foreground text-xs text-center">
                  Suas informações são tratadas com total sigilo e confidencialidade.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="text-background text-base font-medium"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dr. Ronaldo Soares
            </p>
            <p className="text-background/40 text-xs mt-0.5">
              Cirurgia Vascular e Endovascular · CRM-SP 123.456
            </p>
          </div>
          <p className="text-background/30 text-xs text-center md:text-right">
            © 2025 Dr. Ronaldo Soares. Todos os direitos reservados.
            <br />
            CFM Resolução nº 2.336/2023 — Publicidade médica
          </p>
        </div>
      </footer>
    </div>
  );
}
