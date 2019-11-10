import React from "react";
import { API, CONTENT_FIELD } from "../utils/api";
import Hero from "../components/hero-section/Hero";
import IconLinkBlock from "../components/shared/IconLinkBlock";

const Home = props => {
  const page = props[CONTENT_FIELD];

  return page ? (
    <>
      <Hero className="home-hero" {...page.hero.content} />

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
