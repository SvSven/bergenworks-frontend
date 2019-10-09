import API from "../utils/api";

const Page = props => {
  return (
    <>
      {props.featured_image ? (
        <div
          className="page-hero"
          style={{ backgroundImage: `url(${props.featured_image})` }}
        ></div>
      ) : null}

      <div
        className={`page-content container ${
          props.featured_image ? "has-hero" : null
        }`}
      >
        <h1 className="page-title">
          {props.title ? props.title.rendered : null}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: props.content ? props.content.rendered : null
          }}
        ></div>
      </div>
    </>
  );
};

Page.getInitialProps = async function(context) {
  const { page } = context.query;
  const content = await API.getPage(page);

  return content;
};

export default Page;
