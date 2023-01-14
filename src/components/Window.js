import "../css/component_css/Window.css";

function Window(props) {
  return (
    <div className="main-window">
      <div className="top-bar">
        <div className="green-circle"></div>
        <div className="yellow-circle"></div>
        <div className="red-circle"></div>
      </div>
      <div className="main-content">
        <p className="text">This is an introduction of who I am</p>
      </div>
    </div>
  );
}

export default Window;
