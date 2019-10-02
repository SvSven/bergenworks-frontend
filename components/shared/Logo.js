const Logo = props => {
  return (
    <img
      src={props.src}
      alt={props.alt || null}
      className={props.className || null}
    />
  );
};

export default Logo;
