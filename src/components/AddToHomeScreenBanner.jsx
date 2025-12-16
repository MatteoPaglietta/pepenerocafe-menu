import { useState, useEffect } from 'react';
import '../App.css'

const STORAGE_KEY = 'a2hs_dismissed';

function AddToHomeScreenBanner({ currentLang }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    const textMap = {
        it: {
            titleCollapsed: "Salva il Menù nella Home",
            prompt: "Migliora la tua esperienza salvando il sito nella home del tuo telefono per aver sempre a portata di mano le informazioni più importanti del Pepenero Cafè.",
            moreInfo: "Scopri di più",
            close: "Chiudi",
            installTitle: "Come salvare il menu del Pepenero Cafè sulla tua Home:",
            instructionsAndroid: (
                <>
                    <p>Apri il menu del browser (di solito <strong>tre puntini</strong> in alto a destra).</p>
                    <p>Seleziona l'opzione "<strong>Aggiungi a schermata Home</strong>" (o simile).</p>
                    <p>Conferma l'aggiunta.</p>
                </>
            ),
            instructionsIOS: (
                <>
                    <p>Tocca l'icona "<strong>Condividi</strong>" nella barra del browser (in basso o in alto).</p>
                    <p>Scorri in basso e tocca "<strong>Aggiungi alla schermata Home</strong>".</p>
                    <p>Conferma l'aggiunta (puoi modificare il nome se vuoi).</p>
                </>
            ),
        },
        en: {
            titleCollapsed: "Save Menu to Home",
            prompt: "Improve your experience by saving the site to your phone's home screen to always have the most important information about Pepenero Cafè at your fingertips.",
            moreInfo: "Learn More",
            close: "Close",
            installTitle: "How to add Pepenero Cafè Menu to your Home Screen:",
            instructionsAndroid: (
                <>
                    <p>Open the browser menu (usually the <strong>three dots</strong> in the top right).</p>
                    <p>Select the "<strong>Add to Home Screen</strong>" option.</p>
                    <p>Confirm the addition.</p>
                </>
            ),
            instructionsIOS: (
                <>
                    <p>Tap the "<strong>Share</strong>" icon in the browser's toolbar (bottom or top).</p>
                    <p>Scroll down and tap "<strong>Add to Home Screen</strong>".</p>
                    <p>Confirm the addition (you can change the name if you wish).</p>
                </>
            ),
        },
        fr: {
            titleCollapsed: "Enregistrer le Menu sur l'écran d'accueil",
            prompt: "Améliorez votre expérience en enregistrant le site sur l'écran d'accueil de votre téléphone afin d'avoir toujours à portée de main les informations les plus importantes sur Pepenero Cafè.",
            moreInfo: "En savoir plus",
            close: "Fermer",
            installTitle: "Comment enregistrer le menu du Pepenero Café sur votre page d'accueil :",
            instructionsAndroid: (
                <>
                    <p>Ouvrez le menu du navigateur (généralement les <strong>trois points</strong> en haut à droite).</p>
                    <p>Sélectionnez l'option "<strong>Ajouter à l'écran d'accueil</strong>".</p>
                    <p>Confirmez l'ajout.</p>
                </>
            ),
            instructionsIOS: (
                <>
                    <p>Appuyez sur l'icône "<strong>Partager</strong>" dans la barre d'outils du navigateur (en bas ou en haut).</p>
                    <p>Faites défiler et appuyez sur "<strong>Ajouter à l'écran d'accueil</strong>".</p>
                    <p>Confirmez l'ajout (vous pouvez changer le nom si vous le souhaitez).</p>
                </>
            ),
        }
    };

    const texts = textMap[currentLang] || textMap['it'];

    useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobile = /Mobi|Android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsMobile(mobile);
    const iOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsIOS(iOS);
    const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    setIsStandalone(standalone);
    const dismissed = localStorage.getItem(STORAGE_KEY) === 'true';
    if (mobile && !standalone && !dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 2000); 
      return () => clearTimeout(timer);
    }
  }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem(STORAGE_KEY, 'true');
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`a2hs-banner-overlay ${isExpanded ? 'expanded' : ''}`}>
            <div className={`a2hs-banner ${isExpanded ? 'expanded-content' : 'collapsed-content'}`}>
                {isExpanded ? (
                    <div className="a2hs-details">
                        <h2 className="a2hs-expanded-title"><span translate='no'>{texts.installTitle}</span></h2>
                        <p className="a2hs-prompt"><span translate='no'>{texts.prompt}</span></p>
                        {isIOS ? (
                            <>

                                <span translate='no'>{texts.instructionsIOS}</span>
                            </>
                        ) : (
                            <>

                                <span translate='no'>{texts.instructionsAndroid}</span>
                            </>
                        )}
                        <div className="flex">
                            
                            <button
                                className="a2hs-back-button"
                                onClick={() => setIsExpanded(false)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button className="a2hs-close-expanded" onClick={handleClose}>
                                <span translate='no'>{texts.close}</span>
                            </button>
                        </div>
                    </div>

                ) : (
                    <div className="a2hs-collapsed-wrapper">
                        <div className="a2hs-text-container">
                            <div className="a2hs-close-container">
                                <button className="a2hs-close-collapsed" onClick={handleClose}>
                                    &times;
                                </button>
                            </div>
                            <h2 className="a2hs-collapsed-title"><span translate='no'>{texts.titleCollapsed}</span></h2> 
                            <p className="a2hs-prompt"><span translate='no'>{texts.prompt}</span></p>
                        </div>

                        <div className="a2hs-actions">
                            <button
                                className="a2hs-info-toggle"
                                onClick={() => setIsExpanded(true)}
                                aria-expanded={isExpanded}
                            >
                                <span translate='no'>{texts.moreInfo}</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddToHomeScreenBanner;