import { ReactSVG } from "react-svg";
import "../css/component_css/Icon.css";

function Icon(props) {
  return (
    <div className="icon-container">
      <img
        className="icon-image"
        src={process.env.PUBLIC_URL + props.icon_content.img}
        alt={props.icon_content.alt}
      />
      <span className="icon-title">{props.icon_content.title}</span>
    </div>
  );
}

export default Icon;
