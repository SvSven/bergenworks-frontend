import PageMenuItem from "./PageMenuItem";
import PostMenuItem from "./PostMenuItem";
import CustomMenuItem from "./CustomMenuItem";
import Link from "next/link";

import "./main-menu.scss";

const MainMenu = props => {
  return (
    <div className="navbar">
      <nav className="navbar-inner container">
        <div className="navbar-brand">
          <Link href="/">
            <a>BW</a>
          </Link>
        </div>

        {props.items ? (
          <ul className="navbar-menu">
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
