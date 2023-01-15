import "../css/component_css/window_content.css";

const iconlist = [
  {
    img: "/recycle_icon.png",
    alt: "trash",
    title: "Recycling",
    active: false,
    minimized: false,
    content: (
      <div>
        This is a Test
        <button>Push me</button>
      </div>
    ),
  },
  {
    img: "/mail_icon.png",
    alt: "mail",
    title: "Mail",
    active: false,
    minimized: false,
    content: (
      <div className="mail-window-content">
        <h3>Message Me!</h3>
        <input className="mail-subject" placeholder="Subject"></input>
        <textarea
          className="mail-content"
          placeholder="Type your message here"
        ></textarea>
        <button>Send</button>
      </div>
    ),
  },
  {
    img: "/folder_icon.png",
    alt: "projects",
    title: "Projects",
    active: false,
    minimized: false,
    content: "This is the window for Projects",
  },
  {
    img: "/folder_icon.png",
    alt: "experience",
    title: "Experience",
    active: false,
    minimized: false,
    content: "This is the window for Experience",
  },
  {
    img: "/document_icon.png",
    alt: "resume",
    title: "Resume",
    active: false,
    minimized: false,
    content: "This is the window for Resume",
  },
  {
    img: "/document_icon.png",
    alt: "education",
    title: "Education",
    active: false,
    minimized: false,
    content: "This is the window for Education",
  },
  {
    img: "/document_icon.png",
    alt: "Test",
    title: "Test",
    active: false,
    minimized: false,
    content: "This is the window for Test",
  },
];

export default iconlist;
