import Head from "next/head";

const Meta = props => {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
};

// TODO: Get default meta values from WP and set them here
Meta.defaultProps = {
  title: "BergenWorks"
};

export default Meta;
