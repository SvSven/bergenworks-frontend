import React from "react";
import { API, CONTENT_FIELD } from "../utils/api";
import Hero from "../components/hero-section/Hero";
import IconLinkBlock from "../components/shared/IconLinkBlock";

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

      <div className="hero-blocks">
        <div className="hero-blocks-inner">
          {page.hero.blocks.map((block, index) => {
            return <IconLinkBlock key={index} {...block} />;
          })}
        </div>
      </div>
    </>
  ) : null;
};

Home.getInitialProps = async function() {
  return await API.getFrontpage();
};

export default Home;
