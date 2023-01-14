import "../css/views_css/Home.css";
import Footer from "../components/Footer";
import AppBar from "../components/AppBar";
import IconGrid from "../components/IconGrid";
import ToolBar from "../components/ToolBar";
import iconlist from "../resources/iconlist";
import { useEffect, useState } from "react";
import Window from "../components/Window";
import Typewriter from "typewriter-effect";

function Home() {
  const [numActiveApps, setNumActiveApps] = useState(0);
  const [appList, setAppList] = useState(iconlist);

  return (
    <div id="home-background">
      <div className="intro-container">
        <span className="my-name">Jinwoo_Park_OS</span>
        <div className="spacer" />
        <Typewriter
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
        />
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
          {appList.map((ele) => (
            <Window
              activeCount={numActiveApps}
              setActiveCount={setNumActiveApps}
              appList={appList}
              setAppList={setAppList}
              content={ele}
              style={ele.active ? { display: "initial" } : { display: "none" }}
            />
          ))}
        </div>
        {/* <AppBar showBar={numActiveApps !== 0} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
