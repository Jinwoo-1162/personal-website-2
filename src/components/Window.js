import "../css/component_css/Window.css";
// import Draggable from "react-draggable";
import { Rnd } from "react-rnd";
import { useEffect, useState } from "react";

function Window(props) {
  const [currDisplay, setCurrDisplay] = useState("initial");
  const [currStyle, setCurrStyle] = useState({ display: "initial" });

  useEffect(() => {
    if (props.content.active) {
      setCurrDisplay("initial");
    } else {
      setCurrDisplay("none");
    }
  }, [props.content.active]);

  const handleFocus = () => {
    [].slice
      .call(document.getElementsByClassName("main-window"))
      .forEach((ele) => {
        if (ele.classList.contains(`${props.content.title}-window`)) {
          ele.style.zIndex = "200";
        } else {
          ele.style.zIndex = "100";
        }
        console.log(`Setting zIndex for ${ele.classList}`);
        console.log(ele.style.zIndex);
      });
  };

  const handleFullscreen = () => {
    // handle fullscreening the window
    document.getElementsByClassName(
      `${props.content.title}-window`
    )[0].style.height = "calc(100vh - 4em - 3em - 3em)";
    document.getElementsByClassName(
      `${props.content.title}-window`
    )[0].style.width = "74em";
    document.getElementsByClassName("draggable-window")[0].style.top = "0px";
    document.getElementsByClassName("draggable-window")[0].style.left = "0px";

    setCurrStyle({ ...currStyle, height: "40em", width: "74em" });

    let newAppList = props.appList.map((ele) =>
      ele.title === props.content.title
        ? {
            ...ele,
            active: true,
            minimized: false,
            fullscreen: true,
          }
        : ele
    );
    props.setAppList(newAppList);
  };

  const handleMinimize = () => {
    // handle minimizing the window
    document.getElementsByClassName(
      `${props.content.title}-window`
    )[0].style.height = "initial";
    document.getElementsByClassName(
      `${props.content.title}-window`
    )[0].style.width = "initial";
    document.getElementsByClassName("draggable-window")[0].style.top = "0px";
    document.getElementsByClassName("draggable-window")[0].style.left = "0px";

    setCurrStyle({ ...currStyle, height: "initial", width: "initial" });

    let newAppList = props.appList.map((ele) =>
      ele.title === props.content.title
        ? {
            ...ele,
            active: true,
            minimized: true,
            fullscreen: false,
          }
        : ele
    );
    props.setAppList(newAppList);
  };

  const handleClose = () => {
    // close the window
    let newAppList = props.appList.map((ele) =>
      ele.title === props.content.title
        ? {
            ...ele,
            active: false,
            minimized: false,
            fullscreen: false,
          }
        : ele
    );
    props.setAppList(newAppList);
    props.setActiveCount((activeCount) => activeCount - 1);
    setCurrStyle({ ...currStyle, display: "none" });
    // console.log(props.appList);
  };

  return (
    // <Draggable bounds="parent" handle=".top-bar" cancel=".circle">
    <Rnd
      className={`draggable-window ${props.content.title}`}
      bounds="parent"
      dragHandleClassName="top-bar"
      cancel=".circle"
      enableResizing={false}
      style={{
        ...currStyle,
        display: currDisplay,
        // (props.content.active ?  display: "initial"  :  display: "none" )}
      }}
    >
      <div
        className={`main-window ${props.content.title}-window`}
        onClick={handleFocus}
      >
        <div className="top-bar">
          <div className="invisible-circle"></div>
          <div className="invisible-circle"></div>
          <div className="invisible-circle"></div>
          <div className="window-title">{props.content.title}</div>
          {/* <div className="circle green-circle" onClick={handleFullscreen}></div>
          <div className="circle yellow-circle" onClick={handleMinimize}></div>
          <div className="circle red-circle" onClick={handleClose}></div> */}
          <div className="invisible-circle"></div>
          <div className="invisible-circle"></div>
          <div className="square red-square" onClick={handleClose}></div>
        </div>
        <div className="window-content">{props.content.content}</div>
      </div>
    </Rnd>
    // </Draggable>
  );
}

export default Window;
