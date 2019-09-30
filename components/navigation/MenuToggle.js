import "./menu-toggle.scss";

const MenuToggle = props => {
  return (
    <button className="navbar-toggle" onClick={props.handleOnClick}>
      <div
        className={`navbar-toggle-icon ${props.isToggled ? "toggled" : null}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default MenuToggle;
