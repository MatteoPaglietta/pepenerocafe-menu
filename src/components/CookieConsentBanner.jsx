import { useState, useEffect } from 'react';
import '../App.css';

const STORAGE_KEY = 'cookie_consent';

function applyConsent(choice) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('consent', 'update', {
        analytics_storage: choice === 'accepted' ? 'granted' : 'denied',
    });
}

export function reopenCookiePreferences() {
    window.dispatchEvent(new Event('cookie-preferences-reopen'));
}

function CookieConsentBanner({ currentLang }) {
    const [isVisible, setIsVisible] = useState(false);

    const textMap = {
        it: {
            text: "Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per le finalità di misurazione come specificato nella",
            text2: "Puoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, tramite il link \"Preferenze Cookie\" in fondo alla pagina. Il rifiuto del consenso può rendere non disponibili le relative funzioni.",
            policyLink: "cookie policy",
            moreInfo: "Scopri di più",
            reject: "Rifiuta",
            accept: "Accetta",
        },
        en: {
            text: "We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, also for measurement purposes as specified in the",
            text2: "You can freely give, refuse or withdraw your consent at any time via the \"Cookie Preferences\" link at the bottom of the page. Refusing consent may make related features unavailable.",
            policyLink: "cookie policy",
            moreInfo: "Learn more",
            reject: "Reject",
            accept: "Accept",
        },
        fr: {
            text: "Nous et certains tiers sélectionnés utilisons des cookies ou des technologies similaires à des fins techniques et, avec votre consentement, également à des fins de mesure, comme indiqué dans la",
            text2: "Vous pouvez librement donner, refuser ou retirer votre consentement à tout moment via le lien \"Préférences Cookies\" en bas de page. Le refus du consentement peut rendre les fonctions associées indisponibles.",
            policyLink: "politique de cookies",
            moreInfo: "En savoir plus",
            reject: "Refuser",
            accept: "Accepter",
        },
    };

    const texts = textMap[currentLang] || textMap['it'];

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'accepted' || stored === 'rejected') {
            applyConsent(stored);
        } else {
            setIsVisible(true);
        }

        const reopen = () => setIsVisible(true);
        window.addEventListener('cookie-preferences-reopen', reopen);
        return () => window.removeEventListener('cookie-preferences-reopen', reopen);
    }, []);

    const choose = (choice) => {
        localStorage.setItem(STORAGE_KEY, choice);
        applyConsent(choice);
        setIsVisible(false);
        window.dispatchEvent(new Event('cookie-consent-decided'));
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent-banner">
              <div className="cookie-consent-content">
                <p className="cookie-consent-text">
                    <span translate="no">{texts.text}</span>{' '}
                    <a
                        href="https://www.iubenda.com/privacy-policy/62152832/cookie-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cookie-consent-link"
                    >
                        {texts.policyLink}
                    </a>.
                </p>
                <p className="cookie-consent-text"><span translate="no">{texts.text2}</span></p>
                <div className="cookie-consent-actions">
                    <a
                        href="https://www.iubenda.com/privacy-policy/62152832/cookie-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cookie-consent-more-info"
                    >
                        {texts.moreInfo}
                    </a>
                    <div className="cookie-consent-buttons">
                        <button className="cookie-consent-reject" onClick={() => choose('rejected')}>
                            {texts.reject}
                        </button>
                        <button className="cookie-consent-accept" onClick={() => choose('accepted')}>
                            {texts.accept}
                        </button>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
}

export default CookieConsentBanner;
