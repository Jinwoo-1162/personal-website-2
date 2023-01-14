import "../css/views_css/Home.css";
// import Window from "../components/Window";
import Footer from "../components/Footer";
import AppBar from "../components/AppBar";
import IconGrid from "../components/IconGrid";
import ToolBar from "../components/ToolBar";

function Home() {
  return (
    <div id="home-background">
      <div className="intro-container">
        <span className="my-name">Jinwoo_Park_OS</span>
        <span className="intro-text">
          I'm a software developer currently working at Amazon on AWS S3 Tools.
          Click around to learn more about me
        </span>
      </div>
      <div id="main-screen">
        <ToolBar />
        <div id="main-content">
          <IconGrid />
          {/* <div id="window-space">
            <Window content={test_window_content} />
          </div> */}
        </div>
        <AppBar />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
