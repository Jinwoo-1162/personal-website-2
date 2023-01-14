import "../css/component_css/AppBar.css";

function AppBar() {
  return (
    <div className="app-bar">
      <div className="default-app">Home</div>
      <div className="default-app">File</div>
      <div className="default-app">Edit</div>
      <div id="app-divider" />
    </div>
  );
}

export default AppBar;
