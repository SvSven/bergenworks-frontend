const CustomMenuItem = props => {
  return (
    <li>
      <a href={props.custom_link_url} target="_blank" rel="noopener noreferrer">
        {props.title}
      </a>
    </li>
  );
};

export default CustomMenuItem;
