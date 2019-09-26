import Meta from "../components/html-head/meta";

const MainLayout = props => {
  return (
    <>
      <Meta />
      <div>{props.children}</div>
    </>
  );
};

export default MainLayout;
