import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

import MenuToggle from "./MenuToggle";
import MenuList from "./MenuList";
import Logo from "../shared/Logo";

import "./main-menu.scss";

const MainMenu = props => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setMenuVisible(false);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <div className="navbar">
      <nav className="navbar-inner container">
        <div className="navbar-brand">
          <Link href="/">
            <a>{props.logo ? <Logo src={props.logo} /> : "Bergen.Works"}</a>
          </Link>

          <MenuToggle handleOnClick={toggleMenu} isToggled={menuVisible} />
        </div>

        {props.items ? (
          <MenuList
            items={props.items}
            className={`navbar-menu ${menuVisible ? "is-active" : null}`}
          />
        ) : null}
      </nav>
    </div>
  );
};

export default MainMenu;
