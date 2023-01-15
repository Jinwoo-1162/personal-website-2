import "../css/views_css/Home.css";
import Footer from "../components/Footer";
// import AppBar from "../components/AppBar";
import IconGrid from "../components/IconGrid";
import ToolBar from "../components/ToolBar";
import iconlist from "../resources/iconlist";
import { useEffect, useState } from "react";
import Window from "../components/Window";
import Typewriter from "typewriter-effect";

function Home() {
  const [windowManager, setWindowManager] = useState();
  const [numActiveApps, setNumActiveApps] = useState(0);
  const [appList, setAppList] = useState(iconlist);

  useEffect(() => {
    let startingList = appList.map((ele) => (
      <Window
        activeCount={numActiveApps}
        setActiveCount={setNumActiveApps}
        appList={appList}
        setAppList={setAppList}
        content={ele}
      />
    ));

    setWindowManager(startingList);
    console.log(appList);
  }, [appList, numActiveApps]);

  return (
    <div id="home-background">
      <div className="intro-container">
        <span className="my-name">Jinwoo_Park_OS</span>
        <div className="spacer" />
        <span className="intro-text">
          I'm a software developer currently working at Amazon on AWS S3 Tools.
          Click around to learn more about me
        </span>
        {/* <Typewriter
          options={{
            delay: 50,
            wrapperClassName: "intro-text",
            cursorClassName: "intro-text",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "I'm a software developer currently working at Amazon on AWS S3 Tools. Click around to learn more about me"
              )
              .start();
          }}
        /> */}
      </div>
      <div id="main-screen">
        <ToolBar />
        <div id="main-content">
          <IconGrid
            activeCount={numActiveApps}
            setActiveCount={setNumActiveApps}
            appList={appList}
            setAppList={setAppList}
          />
          {/* <div class="custom-shape-divider-top-1673745794">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div> */}
          {windowManager}
          {/* <AppBar /> */}
          {/* <div id="window-overlap">{windowManager}</div> */}
        </div>
        {/* <AppBar showBar={numActiveApps !== 0} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
