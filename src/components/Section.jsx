import MenuItemCard from './MenuItemCard';

const Section = ({ title, subtitle, items, currentLang }) => {
  return (
    <section className="menu-section mb-4">
      <h2 className="section-title">
        <span translate="no">{title}</span>
      </h2>
      <p className="section-subtitle">
        <span translate="no">{subtitle}</span>
      </p>

      <div className="items-grid">
        {items.map(item => (
          <MenuItemCard
            key={item.id}
            item={item}
            currentLang={currentLang}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;