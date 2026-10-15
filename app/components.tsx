import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return <footer className="site-footer"><div className="section-wrap"><div className="footer-intro"><div><p className="eyebrow">CONSTRUISONS LA SUITE</p><h2>La technologie au service<br />de votre entreprise.</h2></div><Link href="/contact" className="button button-primary">Parlons de votre projet ↗</Link></div><div className="footer-grid"><div className="footer-brand"><Link href="/" className="brand"><span className="brand-image"><Image src="/siraj-logo.png" alt="" width={100} height={100}/></span><span>SIRAJ<span className="brand-ai">-AI</span></span></Link><p>Développement logiciel, systèmes internes et intelligence artificielle pour des opérations mieux organisées.</p><span className="footer-tagline">Technology. Intelligence. Impact.</span></div><div><h3>Découvrir</h3><Link href="/">Accueil</Link><Link href="/a-propos">À propos de SIRAJ-AI</Link><Link href="/notre-approche">Notre approche</Link><Link href="/contact">Nous contacter</Link></div><div><h3>Nos expertises</h3><Link href="/expertises#developpement">Sites & applications</Link><Link href="/expertises#systemes">Systèmes internes</Link><Link href="/expertises#ia">Intelligence artificielle</Link><Link href="/transit-logistique">Transit & logistique</Link></div><div><h3>Restons en contact</h3><a href="mailto:contact@siraj-ai.com">contact@siraj-ai.com</a><a href="tel:+22226578805">+222 26 57 88 05</a><address>Zone de TVZ CND</address><a className="whatsapp-link" href="https://wa.me/22226578805" target="_blank" rel="noopener noreferrer">Échanger sur WhatsApp ↗</a></div></div><div className="footer-bottom"><span>© 2026 SIRAJ-AI. Tous droits réservés.</span><span>Des solutions pensées pour votre métier.</span><a href="#contenu">Retour en haut ↑</a></div></div></footer>;
}

export function PageIntro({eyebrow, title, accent, description}:{eyebrow:string;title:string;accent:string;description:string}) {
 return <section className="page-intro section-wrap"><p className="breadcrumb"><Link href="/">Accueil</Link><span>/</span>{eyebrow}</p><p className="eyebrow">{eyebrow}</p><h1>{title}<br/><span>{accent}</span></h1><p className="lead">{description}</p></section>;
}

export function ContactCTA() {
 return <section className="section-wrap"><div className="project-cta"><div><p className="eyebrow">VOTRE PROJET, NOTRE PROCHAIN DÉFI</p><h2>Commençons par votre besoin.</h2><p>Présentez-nous votre activité et les opérations que vous souhaitez améliorer.</p></div><Link href="/contact" className="button button-primary">Échanger avec l’équipe ↗</Link></div></section>;
}
