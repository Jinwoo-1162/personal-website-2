import "../css/component_css/Icon.css";
import { useState } from "react";

function Icon(props) {
  const [active, setActive] = useState(false);

  const clickIcon = () => {
    // if (active) {
    // toggle minimizing the window
    //   let newAppList = props.appList.map((ele) =>
    //     ele.title === props.icon_content.title
    //       ? {
    //           ...ele,
    //           minimized: !ele.minimized,
    //         }
    //       : ele
    //   );
    //   props.setAppList(newAppList);
    // } else {
    // open a new window
    let newAppList = props.appList.map((ele) =>
      ele.title === props.icon_content.title
        ? {
            ...ele,
            active: true,
          }
        : ele
    );
    props.setAppList(newAppList);
    props.setActiveCount((activeCount) => activeCount + 1);
    // }
    // setActive((active) => !active);
  };

  return (
    <div className="icon-container" onClick={clickIcon}>
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
