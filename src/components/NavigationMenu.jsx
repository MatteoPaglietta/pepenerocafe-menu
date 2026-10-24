import { getSeasonKey } from '../data/menuData';
import {getActiveMenu} from '../App';
import { isPartyActive } from './PartyHero';

const partyActive = isPartyActive();

const NavigationMenu = ({ categoriesMeta, activeCategoryKey, onCategorySelect, currentLang }) => {

  const categoryList = Object.keys(categoriesMeta).map(key => {
    const meta = categoriesMeta[key];

    const buttonText =
      meta.shortTitle?.[currentLang] ||
      meta.title?.[currentLang]?.split(' ')[0] ||
      '';

    return {
      key: key,
      buttonText: buttonText,
      iconUrl: meta.icon,
    };
  });

  const seasonClass = getSeasonKey();
  const activeMenu = getActiveMenu();

  return (
    <div className="nav-bar-container">
      <nav className={`category-tabs category-tabs-${activeMenu}`}>
        {categoryList.map((category) => (
          <button
            key={category.key}
            className={`category-button category-button-${seasonClass} ${category.key === activeCategoryKey ? 'active' : ''}`}
            onClick={() => onCategorySelect(category.key)}
          >
            {
              category.iconUrl && typeof category.iconUrl === 'string' && (partyActive ? (
                <span
                  role="img"
                  aria-label={category.buttonText}
                  className="button-icon party-icon"
                  style={{ WebkitMaskImage: `url(${category.iconUrl})`, maskImage: `url(${category.iconUrl})` }}
                />
              ) : (
                <img
                  src={category.iconUrl}
                  alt={category.buttonText}
                  className="button-icon"
                />
              ))
            }
            <span className="button-text" translate="no">{category.buttonText}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default NavigationMenu;