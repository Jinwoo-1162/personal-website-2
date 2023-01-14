//deprecated

import Window from "../components/Window";
import "../css/component_css/WindowSpace.css";

function WindowSpace(props) {
  return (
    <div id="window-space">
      {props.appList.map((ele) => (
        <Window
          appList={props.appList}
          setAppList={props.setAppList}
          content={ele}
          style={
            ele.active && !ele.minimized
              ? { display: "initial" }
              : { display: "none" }
          }
        />
      ))}
    </div>
  );
}

export default WindowSpace;
