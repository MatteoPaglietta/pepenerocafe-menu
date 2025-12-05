import { getSeasonKey } from '../data/menuData';

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


  return (
    <div className="nav-bar-container">
      <nav className="category-tabs">
        {categoryList.map((category) => (
          <button
            key={category.key}
            className={`category-button category-button-${seasonClass} ${category.key === activeCategoryKey ? 'active' : ''}`}
            onClick={() => onCategorySelect(category.key)}
          >
            {
              category.iconUrl && typeof category.iconUrl === 'string' && (
                <img
                  src={category.iconUrl}
                  alt={category.buttonText}
                  className="button-icon"
                />
              )
            }
            <span className="button-text">{category.buttonText}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default NavigationMenu;