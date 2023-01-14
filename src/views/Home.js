import "../css/views_css/Home.css";
import Window from "../components/Window";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const test_window_content = {
    window_title: "Test",
    window_content: <p className="text">This is an introduction of who I am</p>,
  };

  const recycling_icon = {
    img: "/recycle_icon.png",
    alt: "trash",
    title: "Recycling",
  };

  const mail_icon = {
    img: "/mail_icon.png",
    alt: "mail",
    title: "Mail",
  };

  const projects_icon = {
    img: "/folder_icon.png",
    alt: "projects",
    title: "Projects",
  };

  const experience_icon = {
    img: "/folder_icon.png",
    alt: "experience",
    title: "Experience",
  };

  const resume_icon = {
    img: "/document_icon.png",
    alt: "resume",
    title: "Resume",
  };

  const education_icon = {
    img: "/document_icon.png",
    alt: "education",
    title: "Education",
  };

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
        <div className="tool-bar">
          <div className="tool-bar-option">Home</div>
          <div className="tool-bar-option">File</div>
          <div className="tool-bar-option">Edit</div>
        </div>
        <div id="main-content">
          <div id="icon-grid">
            <Icon className="icon" icon_content={recycling_icon} />
            <Icon className="icon" icon_content={mail_icon} />
            <Icon className="icon" icon_content={projects_icon} />
            <Icon className="icon" icon_content={experience_icon} />
            <Icon className="icon" icon_content={resume_icon} />
            <Icon className="icon" icon_content={education_icon} />
          </div>
          {/* <div id="window-space">
            <Window content={test_window_content} />
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
