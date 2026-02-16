import { useState } from 'react';

const MenuItemCard = ({ item, currentLang }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const lang = currentLang || 'it';
  const isNameObject = typeof item.name === 'object' && item.name !== null;
  const nameToDisplay = isNameObject
    ? item.name[lang] || item.name['it']
    : item.name || '';
  const localizedIngredients =
    (item.ingredients && typeof item.ingredients === 'object' && item.ingredients[lang]) ||
    (item.ingredients && typeof item.ingredients === 'object' && item.ingredients['it']);

  const localizedPrice =
    (item.price && typeof item.price === 'object' && item.price[lang]) ||
    (item.price && typeof item.price === 'object' && item.price['it']);  

  let ingredientsToDisplay;

  if (Array.isArray(localizedIngredients)) {
    ingredientsToDisplay = localizedIngredients;
  } else if (Array.isArray(item.ingredients)) {
    ingredientsToDisplay = item.ingredients;
  } else {
    ingredientsToDisplay = [];
  }
  const ingredientsString = ingredientsToDisplay.join(', ');

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="menu-item-card">
      <div className="item-image-container">
        {!imageLoaded && <div className="skeleton-loader"></div>}
        <img
          src={item.image}
          alt={nameToDisplay}
          className={`item-image ${imageLoaded ? 'loaded' : 'loading'}`}
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </div>
      <div className="item-details">
        <div className="item-header">
          <h3 className="item-name">
            <span translate="no">{nameToDisplay}</span>
          </h3>
          <span className="item-price" translate="no">
            {localizedPrice}
          </span>
        </div>
        <p className="item-ingredients">
          <span translate="no">{ingredientsString}</span>
        </p>
      </div>
    </div>
  );
};

export default MenuItemCard;