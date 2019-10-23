import React from "react";
import API from "../utils/api";
import Hero from "../components/hero-section/Hero";

const Home = props => {
  const content = props.acf;
  const hero = content.hero_section;

  return (
    <>
      <Hero
        className="home-hero"
        title={hero.content.title}
        subtitle={hero.content.subtitle}
        image={hero.content.image.sizes.page_hero}
      />

      <h1>{props.title ? props.title.rendered : null}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: props.content ? props.content.rendered : null
        }}
      ></div>
    </>
  );
};

Home.getInitialProps = async function() {
  return await API.getFrontpage();
};

export default Home;
