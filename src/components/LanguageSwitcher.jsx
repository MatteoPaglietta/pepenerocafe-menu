import { useState, useRef, useEffect } from 'react';
export const getBrowserDefaultLanguage = () => {
  if (typeof navigator === 'undefined' || !navigator.language) {
    return 'it';
  }

  const browserLang = navigator.language.toLowerCase().split('-')[0];

  const supportedLangs = ['it', 'en', 'fr'];

  if (supportedLangs.includes(browserLang)) {
    return browserLang;
  }

  return 'en';
};


const ItalianFlag = (props) => (<svg viewBox="0 0 100 100" {...props}>
  <defs>
    <clipPath id="circleMask">
      <circle cx="50" cy="50" r="50" />
    </clipPath>
  </defs>
  <g clipPath="url(#circleMask)">
    <rect x="0" y="0" width="33.33" height="100" fill="#009246" />
    <rect x="33.33" y="0" width="33.33" height="100" fill="#ffffff" />
    <rect x="66.66" y="0" width="33.34" height="100" fill="#ce2b37" />
  </g>
  <circle cx="50" cy="50" r="49.5" fill="none" stroke="#ccc" strokeWidth="1" />
</svg>
);

const EnglishFlag = (props) => (<svg viewBox="0 0 100 100" {...props}>
  <defs>
    <clipPath id="circleMaskEN">
      <circle cx="50" cy="50" r="50" />
    </clipPath>
  </defs>
  <g clipPath="url(#circleMaskEN)">
    <rect x="0" y="0" width="100" height="100" fill="#00247d" />
    <rect x="-10" y="44" width="120" height="12" fill="#ffffff" transform="rotate(-45 50 50)" />
    <rect x="-10" y="44" width="120" height="12" fill="#ffffff" transform="rotate(45 50 50)" />
    <rect x="-10" y="46" width="120" height="8" fill="#cf142b" transform="rotate(-45 50 50)" />
    <rect x="-10" y="46" width="120" height="8" fill="#cf142b" transform="rotate(45 50 50)" />
    <rect x="43" y="0" width="14" height="100" fill="#ffffff" />
    <rect x="0" y="43" width="100" height="14" fill="#ffffff" />
    <rect x="45" y="0" width="10" height="100" fill="#cf142b" />
    <rect x="0" y="45" width="100" height="10" fill="#cf142b" />
  </g>
  <circle cx="50" cy="50" r="49.5" fill="none" stroke="#ccc" strokeWidth="1" />
</svg>
);

const FrenchFlag = (props) => (<svg viewBox="0 0 100 100" {...props}>
  <defs>
    <clipPath id="circleMaskFR">
      <circle cx="50" cy="50" r="50" />
    </clipPath>
  </defs>
  <g clipPath="url(#circleMaskFR)">
    <rect x="0" y="0" width="33.33" height="100" fill="#00539f" />
    <rect x="33.33" y="0" width="33.33" height="100" fill="#ffffff" />
    <rect x="66.66" y="0" width="33.34" height="100" fill="#ed2939" />
  </g>
  <circle cx="50" cy="50" r="49.5" fill="none" stroke="#ccc" strokeWidth="1" />
</svg>
);

const languages = {
  it: { component: ItalianFlag, text: 'Italiano' },
  en: { component: EnglishFlag, text: 'English' },
  fr: { component: FrenchFlag, text: 'Français' },
};


const LanguageSwitcher = ({ currentLang, onLangChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (lang) => {
    if (onLangChange) {
      onLangChange(lang);
    }
    setIsOpen(false);
  }
  const safeLang = languages[currentLang] ? currentLang : 'en';

  const ActiveFlagComponent = languages[safeLang].component;
  const dropdownLanguages = Object.keys(languages).filter(
    (langKey) => langKey !== safeLang
  );

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '25%', textAlign: 'center' }} ref={menuRef}>
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="lang-menu"
        className="flag-button"
      >
        <ActiveFlagComponent width="25" height="25" className="flag-icon" />
      </button>

      {isOpen && (
        <div id="lang-menu" className="language-menu">

          {dropdownLanguages.map((langKey) => {
            const LangMeta = languages[langKey];
            const DropdownFlagComponent = LangMeta.component;

            return (
              <button
                key={langKey}
                onClick={() => handleLanguageSelect(langKey)}
                className="flag-option"
              >
                <DropdownFlagComponent width="25" height="25" className="flag-icon" />
                <span className="lang-text">{LangMeta.text}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;