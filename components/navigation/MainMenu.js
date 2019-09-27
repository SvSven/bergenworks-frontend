import PageMenuItem from "./PageMenuItem";
import PostMenuItem from "./PostMenuItem";
import CustomMenuItem from "./CustomMenuItem";

const MainMenu = props => {
  return (
    <nav>
      {props.items ? (
        <ul>
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
  );
};

export default MainMenu;
