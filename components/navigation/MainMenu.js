import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

import MenuToggle from "./MenuToggle";
import PageMenuItem from "./PageMenuItem";
import PostMenuItem from "./PostMenuItem";
import CustomMenuItem from "./CustomMenuItem";
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
          <ul className={`navbar-menu ${menuVisible ? "is-active" : null}`}>
            {props.items.map(item => {
              // TODO: check if this works with custom post_types...
              switch (item.type) {
                case "page":
                  return <PageMenuItem key={item.id} {...item} />;
                case "post":
                  return <PostMenuItem key={item.id} {...item} />;
                case "custom":
                  return <CustomMenuItem key={item.id} {...item} />;
              }
            })}
          </ul>
        ) : null}
      </nav>
    </div>
  );
};

export default MainMenu;
