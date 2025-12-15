import { useState, useEffect, useRef } from 'react';
import Section from './components/Section';
import NavigationMenu from './components/NavigationMenu';
import { InstagramIcon } from './components/AnimatedInstagram';
import { productsAperitif, productsNight, categoriesMetaAperitif, categoriesMetaNight, getSeasonKey, categoriesMetaAperitifHot, categoriesMetaNightHot } from './data/menuData';
import LogoSVG from './components/LogoSVG';
import Footer from './components/Footer';

import './App.css';
import LanguageSwitcher, { getBrowserDefaultLanguage } from './components/LanguageSwitcher';

const stagioneCorrente = getSeasonKey();

export function getActiveMenu() {
  const currentHour = new Date().getHours();
  if (currentHour >= 6 && currentHour < 21) {
    return 'aperitif';
  } else {
    return 'night';
  }
};

const ERROR_MESSAGES = {
  it: 'Pagina non trovata. Chiama il personale per informarlo.',
  en: 'Page not found. Please inform the staff.',
  fr: 'Page non trouvée. Veuillez en informer le personnel.',
};

function App() {
  const [activeMenuType, setActiveMenuType] = useState(getActiveMenu);
  const [currentLang, setCurrentLang] = useState(getBrowserDefaultLanguage);

  const containerRef = useRef(null);

  let allCategoriesMeta = '';

    if (activeMenuType === 'aperitif' && (stagioneCorrente === 'inverno' || stagioneCorrente === 'autunno'))
    {
      allCategoriesMeta = categoriesMetaAperitifHot;
    } else if (activeMenuType === 'night' && (stagioneCorrente === 'inverno' || stagioneCorrente === 'autunno')){
      allCategoriesMeta = categoriesMetaNightHot;
    }
    else if (activeMenuType === 'aperitif' && (stagioneCorrente === 'estate' || stagioneCorrente === 'primavera')) {
      allCategoriesMeta = categoriesMetaAperitif;
    }
    else if (activeMenuType === 'night' && (stagioneCorrente === 'estate' || stagioneCorrente === 'primavera')) {
      allCategoriesMeta = categoriesMetaNight;
    }

    const allProducts = activeMenuType === 'aperitif' ? productsAperitif : productsNight;

    const initialCategoryKey = Object.keys(allCategoriesMeta)[0] || 'classici';
    const [activeCategoryKey, setActiveCategoryKey] = useState(initialCategoryKey);

    useEffect(() => {
      setActiveCategoryKey(Object.keys(allCategoriesMeta)[0] || 'classici');
    }, [activeMenuType, allCategoriesMeta]);

    const handleCategorySelect = (key) => {
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
      setActiveCategoryKey(key);
    };

    const handleLangChange = (lang) => {
      setCurrentLang(lang);
    };

    const getLocalizedText = (textObject) => {
      return (textObject && textObject[currentLang]) || (textObject && textObject['it']) || '';
    };

    const meta = allCategoriesMeta[activeCategoryKey];
    const items = allProducts[activeCategoryKey];

    const localizedTitle = meta ? getLocalizedText(meta.title) : '';
    const localizedSubtitle = meta ? getLocalizedText(meta.subtitle) : '';

    const localizedError = getLocalizedText(ERROR_MESSAGES);


    if (!meta || !items) {
      return (
        <div className="app-main-container">
          <header className="main-header">
            <div className="social-logo">
              <a
                href="https://www.instagram.com/pepenerocafe_pinerolo/"
                target="_blank"
                rel="noopener noreferrer"
                className='social-links'
              >
                <InstagramIcon
                  size={25}
                  className="mia-icona-social"
                />
              </a>
              <LogoSVG className='logo-svg' />
              <LanguageSwitcher currentLang={currentLang} onLangChange={handleLangChange} />
            </div>

            <NavigationMenu
              categoriesMeta={allCategoriesMeta}
              activeCategoryKey={activeCategoryKey}
              onCategorySelect={handleCategorySelect}
              currentLang={currentLang}
            />
          </header>

          <main className="menu-content">
            <p className='page-error'>{localizedError}</p>
          </main>
        </div>
      );
    }

    return (
      <>
        <div className="app-main-container" ref={containerRef}>
          <header className="main-header">
            <div className="social-logo">
              <a
                href="https://www.instagram.com/pepenerocafe_pinerolo/"
                target="_blank"
                rel="noopener noreferrer"
                className='social-links'
              >
                <InstagramIcon
                  size={25}
                  className="mia-icona-social"
                />
              </a>
              <LogoSVG className='logo-svg' />
              <LanguageSwitcher currentLang={currentLang} onLangChange={handleLangChange} />
            </div>

            <NavigationMenu
              categoriesMeta={allCategoriesMeta}
              activeCategoryKey={activeCategoryKey}
              onCategorySelect={handleCategorySelect}
              currentLang={currentLang}
            />
          </header>

          <main className="menu-content">
            <Section
              key={activeCategoryKey}
              title={localizedTitle}
              subtitle={localizedSubtitle}
              items={items}
              currentLang={currentLang}
            />
          </main>
          <Footer currentLang={currentLang} />
        </div>
      </>
    );
  }

  export default App;