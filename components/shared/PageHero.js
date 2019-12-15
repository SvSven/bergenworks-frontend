const PageHero = props => {
  const { className, image, title, subtitle } = props;

  return (
    <section
      className={className || "page-hero"}
      style={{ backgroundImage: `url(${image.url})` }}
    >
      {title ? (
        <div className="hero-inner">
          <h1 className="hero-title">{title}</h1>
          {subtitle ? <p className="hero-subtitle">{subtitle}</p> : null}
        </div>
      ) : null}
    </section>
  );
};

export default PageHero;
