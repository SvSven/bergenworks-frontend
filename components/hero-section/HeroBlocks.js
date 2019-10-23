const HeroBlocks = props => {
  return (
    <>
      {props.blocks ? (
        <div className="hero-blocks">
          {props.blocks.map(block => {
            return <p key={block.url.title}>{block.url.title}</p>;
          })}
        </div>
      ) : null}
    </>
  );
};

export default HeroBlocks;
