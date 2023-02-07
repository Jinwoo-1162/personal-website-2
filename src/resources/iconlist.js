import "../css/component_css/window_content.css";
import EmailService from "../components/EmailService";
import Projects from "../components/Projects";
import Experiences from "../components/Experience";
import Educations from "../components/Education";

const iconlist = [
  {
    img: "/recycle_icon.png",
    alt: "trash",
    title: "Recycling",
    active: false,
    minimized: false,
    fullscreen: false,
    content: (
      <div className="recycling-window-content">
        This is a Test
        <button>Push me</button>
      </div>
    ),
  },
  {
    img: "/folder_icon.png",
    alt: "introduction",
    title: "Introduction",
    active: false,
    minimized: false,
    fullscreen: false,
    content: (
      <div className="projects-window-content">
        My name is Jinwoo Park and I am a new grad software developer that is
        currently working for Amazon Web Services in the S3 Object Insights
        team. Feel free to take a look around my website to learn more about me!
      </div>
    ),
  },
  {
    img: "/mail_icon.png",
    alt: "mail",
    title: "Mail",
    active: false,
    minimized: false,
    fullscreen: false,
    content: <EmailService />,
  },
  {
    img: "/folder_icon.png",
    alt: "projects",
    title: "Projects",
    active: false,
    minimized: false,
    fullscreen: false,
    content: (
      <div className="projects-window-content">
        <Projects />
      </div>
    ),
  },
  {
    img: "/folder_icon.png",
    alt: "experience",
    title: "Experience",
    active: false,
    minimized: false,
    fullscreen: false,
    content: <Experiences />,
  },
  {
    img: "/document_icon.png",
    alt: "resume",
    title: "Resume",
    active: false,
    minimized: false,
    fullscreen: false,
    content: (
      <div className="resume-window-content">
        <object
          data="./ResumeJinParkSpring2023.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          className="pdf"
        >
          <p className="resume-alt-text">
            Whoops, looks like the resume is missing. Try the download button
            and if that does not work, reach out to me via the mail app
          </p>
        </object>
      </div>
    ),
  },
  {
    img: "/document_icon.png",
    alt: "education",
    title: "Education",
    active: false,
    minimized: false,
    fullscreen: false,
    content: <Educations />,
  },
];

export default iconlist;
