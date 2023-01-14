import "../css/component_css/Window.css";
// import Draggable from "react-draggable";
import { Rnd } from "react-rnd";

function Window(props) {
  const handleClose = () => {
    // close the window
    let newAppList = props.appList.map((ele) =>
      ele.title === props.content.title
        ? {
            ...ele,
            active: false,
            minimized: false,
          }
        : ele
    );
    props.setAppList(newAppList);
    props.setActiveCount((activeCount) => activeCount - 1);
    console.log(props.appList);
  };

  return (
    // <Draggable bounds="parent" handle=".top-bar" cancel=".circle">
    <Rnd
      className={`draggable-window ${props.content.title}`}
      bounds="parent"
      dragHandleClassName="top-bar"
      cancel=".circle"
    >
      <div className="main-window">
        <div className="top-bar">
          <div className="invisible-circle"></div>
          <div className="invisible-circle"></div>
          <div className="invisible-circle"></div>
          <div className="window-title">{props.content.title}</div>
          <div className="circle green-circle"></div>
          <div className="circle yellow-circle"></div>
          <div className="circle red-circle" onClick={handleClose}></div>
        </div>
        <div className="window-content">{props.content.content}</div>
      </div>
    </Rnd>
    // </Draggable>
  );
}

export default Window;
