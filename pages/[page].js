import API from "../utils/api";

const Page = props => {
  return (
    <div>
      <h1>{props.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content.rendered }}></div>
    </div>
  );
};

Page.getInitialProps = async function(context) {
  const { page } = context.query;
  const content = await API.getPage(page);

  return content[0];
};

export default Page;
