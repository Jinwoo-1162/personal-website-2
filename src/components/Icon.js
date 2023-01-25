import "../css/component_css/Icon.css";
import { useState } from "react";

function Icon(props) {
  // eslint-disable-next-line
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

    // focuses new window
    [].slice
      .call(document.getElementsByClassName("main-window"))
      .forEach((ele) => {
        if (ele.classList.contains(`${props.icon_content.title}-window`)) {
          ele.style.zIndex = "200";
        } else {
          ele.style.zIndex = "100";
        }
        console.log(`Setting zIndex for ${ele.classList}`);
        console.log(ele.style.zIndex);
      });

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
