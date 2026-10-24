import { useState, useEffect, useRef } from 'react';
import '../party.css';
import partyPoster from '../assets/party/poster-20-years.webp';

// Festa 20 anni: tema attivo solo in questa finestra
const PARTY_START = new Date(2026, 9, 24, 0, 0);
const PARTY_END = new Date(2026, 9, 25, 12, 0);
const PARTY_COUNTDOWN_TARGET = new Date(2026, 9, 25, 0, 30);

const SCROLL_HINT = {
  it: 'Scorri per il menù',
  en: 'Scroll for the menu',
  fr: 'Faites défiler pour le menu',
};

const TICKER_TEXT = 'SAT 24.10 ✶ FREE ENTRY ✶ START 00.30 ✶ 20 YEARS OF PEPE ✶ ';

export function isPartyActive() {
  const now = new Date();
  return now >= PARTY_START && now < PARTY_END;
}

const pad = (n) => String(n).padStart(2, '0');

function getRemaining() {
  const diff = Math.max(0, PARTY_COUNTDOWN_TARGET - new Date());
  return {
    h: Math.floor(diff / 3600000),
    m: Math.floor(diff / 60000) % 60,
    s: Math.floor(diff / 1000) % 60,
  };
}

const PartyHero = ({ currentLang }) => {
  const [remaining, setRemaining] = useState(getRemaining);
  const fadeRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToMenu = () => {
    const fade = fadeRef.current;
    const container = fade?.closest('.app-main-container');
    const header = container?.querySelector('.main-header');
    if (!container || !header) return;
    const offset = fade.getBoundingClientRect().bottom - header.getBoundingClientRect().bottom;
    container.scrollBy({ top: offset, behavior: 'smooth' });
  };

  return (
    <div className="party-hero">
      <div className="party-poster">
        <img src={partyPoster} alt="20 Years of Pepe - Sat 24.10 - Free entry - Start 00:30" width="896" height="930" />
        <div className="party-countdown" role="timer" aria-label="Countdown 00:30">
          <span>{pad(remaining.h)}h</span>
          <span>{pad(remaining.m)}m</span>
          <span>{pad(remaining.s)}s</span>
        </div>
      </div>
      <div className="party-ticker" aria-hidden="true">
        <div>{TICKER_TEXT.repeat(4)}</div>
      </div>
      <div className="party-fade" ref={fadeRef}>
        <button type="button" className="party-scroll-hint" onClick={scrollToMenu}>
          {SCROLL_HINT[currentLang] || SCROLL_HINT.it}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PartyHero;
