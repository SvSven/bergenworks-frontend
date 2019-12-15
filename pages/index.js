import React from "react";
import { API, CONTENT_FIELD } from "../utils/api";
import PageHero from "../components/shared/PageHero";
import IconLinkBlock from "../components/shared/IconLinkBlock";

const Home = props => {
  const page = props[CONTENT_FIELD];

  return page ? (
    <>
      <PageHero className="home-hero" {...page.hero_section} />

      <div className="hero-blocks">
        <div className="hero-blocks-inner">
          {page.hero_section.blocks.map((block, index) => {
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
