import { Instagram, Phone, MapPin } from 'lucide-react';
import { FOOTER_TEXTS } from '../data/footerData';
import { useEffect } from 'react';

const openingHours = [
    { key: 'DAY_MON', hours: '17:00 – 00:00' },
    { key: 'DAY_TUE', hours: '17:00 – 01:00' },
    { key: 'DAY_WED', hours: '17:00 – 01:00' },
    { key: 'DAY_THU', hours: '17:00 – 01:00' },
    { key: 'DAY_FRI', hours: '17:00 – 01:00' },
    { key: 'DAY_SAT', hours: '17:00 – 01:00' },
    { key: 'DAY_SUN', hours: '17:00 – 01:00' },
];

const CONTACT_INFO = {
    address: 'Piazza S. Donato, 16, 10064 Pinerolo TO',
    mapsUrl: 'https://www.google.com/maps/place/Pepenero+Caf%C3%A8/@44.8854713,7.3277635,17z/data=!3m2!4b1!5s0x478825052402f471:0xa26a5bfbc50f1a29!4m6!3m5!1s0x47882505244c18a1:0x2f29707d5ba2233d!8m2!3d44.8854713!4d7.3303384!16s%2Fg%2F1hc85l1lm?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D',
    phone: '0121 302472',
    instagramHandle: '@pepenerocafe_pinerolo',
    instagramLink: 'https://www.instagram.com/pepenerocafe_pinerolo/',
    reservationDM: 'https://ig.me/m/pepenerocafe_pinerolo',
};

const getLocalizedText = (textObject, lang) => {
    return (textObject && textObject[lang]) || (textObject && textObject['en']) || '';
};

export default function Footer({ currentLang }) {
    const date = new Date();
    const year = date.getFullYear();
    const handleReservationClick = () => {
        window.open(CONTACT_INFO.reservationDM, '_blank');
    };
    const translate = (key) => getLocalizedText(FOOTER_TEXTS[key], currentLang);
    const LegalLinks = () => {
        useEffect(() => {
            const handleLoad = () => {
                const s = document.createElement("script");
                const tag = document.getElementsByTagName("script")[0];
                s.src = "https://cdn.iubenda.com/iubenda.js";
                if (tag && tag.parentNode) {
                    tag.parentNode.insertBefore(s, tag);
                } else {
                    document.head.appendChild(s);
                }
            };
            if (document.readyState === "complete") {
                handleLoad();
            } else {
                window.addEventListener("load", handleLoad);
                return () => window.removeEventListener("load", handleLoad);
            }
        }, []);
    }
    return (
        <footer className="main-footer">
            <div className="footer-content-wrapper">
                <div className="footer-section hours-section">
                    <h3><span translate="no">{translate('HOURS_TITLE')}</span></h3>
                    <ul className="hours-list">
                        {openingHours.map((item) => (
                            <li key={item.key}>
                                <strong><span translate="no">{translate(item.key)}:</span></strong> <span>{item.hours}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-section contact-section">
                    <h3><span translate="no">{translate('CONTACTS_TITLE')}</span></h3>
                    <p className="footer-map">
                        <MapPin size={20} />
                        <a
                            href={CONTACT_INFO.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {CONTACT_INFO.address}
                        </a>
                    </p>
                    <p className="footer-phone">
                        <Phone size={20} />
                        <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                            {CONTACT_INFO.phone}
                        </a>
                    </p>
                    <div className="footer-social">
                        <Instagram size={20} />
                        <a
                            href={CONTACT_INFO.instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {CONTACT_INFO.instagramHandle}
                        </a>
                    </div>
                </div>
                <div className="footer-section actions-section">
                    <h3><span translate="no">{translate('ACTIONS_TITLE')}</span></h3>
                    <button
                        className="reservation-button"
                        onClick={handleReservationClick}
                    >
                        <span translate="no">{translate('RESERVATION_BUTTON')}</span>
                    </button>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="legal-links-container">
                    <p className="copyright-text" translate="no">©{year} Pepenero Cafè. <span translate="no">{translate('COPYRIGHT')}</span></p>
                    <a
                        href="https://www.iubenda.com/privacy-policy/62152832"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iubenda-white iubenda-noiframe iubenda-embed"
                        title="Privacy Policy"
                    > Privacy Policy  </a>
                    <a
                        href="https://www.iubenda.com/privacy-policy/62152832/cookie-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iubenda-white iubenda-noiframe iubenda-embed"
                        title="Cookie Policy"
                    > Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
}