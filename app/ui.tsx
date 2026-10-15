"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const navigation = [["Accueil", "/"], ["Expertises", "/expertises"], ["Transit & logistique", "/transit-logistique"], ["À propos", "/a-propos"], ["Notre approche", "/notre-approche"]];

function ArrowIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="header" onKeyDown={event => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="SIRAJ-AI, accueil" onClick={() => setOpen(false)}>
          <span className="brand-image"><Image src="/siraj-logo.png" alt="" width={100} height={100} priority /></span>
          <span>SIRAJ<span className="brand-ai">-AI</span><small>TECHNOLOGY · INTELLIGENCE · IMPACT</small></span>
        </Link>
        <button ref={menuButton} className="menu-toggle" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={open ? "m6 6 12 12M6 18 18 6" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
        </button>
        <nav id="navigation" className={open ? "nav open" : "nav"} aria-label="Navigation principale">
          <div className="nav-links">{navigation.map(([label, href]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>
          ))}</div>
          <Link className="nav-contact" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Parlons de votre projet <span className="nav-contact-icon"><ArrowIcon /></span></Link>
        </nav>
      </div>
    </header>
  );
}

export function ProjectBrief() {
  const [prepared, setPrepared] = useState(false);

  return (
    <section className="project-panel project-form" aria-labelledby="project-form-title">
      <p className="eyebrow">FAISONS LE PREMIER PAS</p>
      <h2 id="project-form-title">Parlez-nous de <span>votre idée.</span></h2>
      <p className="form-intro">Décrivez votre besoin. Nous préparerons un e-mail à contact@siraj-ai.com dans votre application de messagerie, que vous pourrez relire avant de l’envoyer.</p>
      <form onSubmit={event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const brief = `BRIEF PROJET — SIRAJ-AI\n\nNom : ${data.get("name")}\nE-mail : ${data.get("email")}\nExpertise : ${data.get("service")}\n\nVotre projet :\n${data.get("project")}\n`;
        const subject = `Demande de projet — ${data.get("service")}`;
        window.location.href = `mailto:contact@siraj-ai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;
        setPrepared(true);
      }}>
        <label>Votre nom<input name="name" autoComplete="name" required placeholder="Nom et prénom" maxLength={120}/></label>
        <label>Votre e-mail<input name="email" type="email" autoComplete="email" required placeholder="vous@entreprise.com" maxLength={254}/></label>
        <label>Votre besoin<select name="service"><option>Développement digital</option><option>Intelligence artificielle</option><option>Systèmes internes</option><option>Transit & logistique</option><option>Conseil & stratégie IT</option><option>J’ai besoin d’être guidé</option></select></label>
        <label>Votre projet<textarea name="project" required minLength={15} maxLength={5000} rows={5} placeholder="Votre idée, vos objectifs, vos délais…"/></label>
        <button className="button button-primary" type="submit">Préparer mon e-mail <ArrowIcon /></button>
        <p className="form-note" role="status">{prepared ? "Si votre messagerie ne s’ouvre pas, contactez-nous directement à contact@siraj-ai.com ou sur WhatsApp." : "L’envoi se fait depuis votre messagerie, après votre validation."}</p>
      </form>
    </section>
  );
}
