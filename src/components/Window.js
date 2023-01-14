import "../css/component_css/Window.css";
// import Draggable from "react-draggable";
import { Rnd } from "react-rnd";

function Window(props) {
  const handleClose = () => {};

  return (
    // <Draggable bounds="parent" handle=".top-bar" cancel=".circle">
    <Rnd
      className={`draggable-window ${props.content.window_title}`}
      bounds="parent"
    >
      <div className="main-window">
        <div className="top-bar">
          <div className="invisible-circle"></div>
          <div className="invisible-circle"></div>
          <div className="invisible-circle"></div>
          <div className="window-title">{props.content.window_title}</div>
          <div className="circle green-circle"></div>
          <div className="circle yellow-circle"></div>
          <div className="circle red-circle" onClick={handleClose}></div>
        </div>
        <div className="window-content">{props.content.window_content}</div>
      </div>
    </Rnd>
    // </Draggable>
  );
}

export default Window;
