const PageHero = props => {
  return (
    <section
      className={props.className || "page-hero"}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {props.title ? (
        <div className="hero-inner">
          <h1 className="hero-title">{props.title}</h1>
          {props.subtitle ? (
            <p className="hero-subtitle">{props.subtitle}</p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
};

export default PageHero;
