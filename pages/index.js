import React from "react";
import { API, CONTENT_FIELD } from "../utils/api";
import Hero from "../components/hero-section/Hero";

const Home = props => {
  const page = props[CONTENT_FIELD];

  return page ? (
    <>
      <Hero
        className="home-hero"
        title={page.hero.content.title}
        subtitle={page.hero.content.subtitle}
        image={page.hero.content.image.sizes.page_hero}
      />
    </>
  ) : null;
};

Home.getInitialProps = async function() {
  return await API.getFrontpage();
};

export default Home;
