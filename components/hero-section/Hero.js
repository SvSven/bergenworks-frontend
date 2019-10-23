const Hero = props => {
  return (
    <section
      className={props.className}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="hero-inner">
        {props.title ? <h1 className="hero-title">{props.title}</h1> : null}
        {props.title ? <p className="hero-subtitle">{props.subtitle}</p> : null}
      </div>
    </section>
  );
};

export default Hero;
