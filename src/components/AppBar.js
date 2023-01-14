import "../css/component_css/AppBar.css";

function AppBar(props) {
  return (
    <div className="app-bar">
      <div className="default-app">Home</div>
      <div className="default-app">File</div>
      <div className="default-app">Edit</div>
      <div
        className="app-divider"
        style={props.showBar ? { display: "initial" } : { display: "none" }}
      ></div>
    </div>
  );
}

export default AppBar;
