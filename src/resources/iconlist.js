import "../css/component_css/window_content.css";

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
    content: (
      <div className="mail-window-content">
        <span>Message Me!</span>
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
    fullscreen: false,
    content: (
      <div className="projects-window-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit
        amet justo ante. Aliquam erat volutpat. Pellentesque turpis tellus,
        consequat eu tincidunt sit amet, posuere id ante. Proin consectetur in
        libero ac congue. Nunc sagittis mi in bibendum pellentesque. Sed semper,
        risus at pharetra laoreet, neque ex pretium justo, vel convallis neque
        tortor at nisl. Quisque mattis sollicitudin sem vel rhoncus. Vivamus
        cursus tortor at mattis maximus. Aenean dapibus, quam id faucibus
        molestie, augue nulla dictum est, non porta turpis nisi eget sapien.
        Donec luctus magna leo, ac pulvinar felis porttitor vitae. Phasellus
        facilisis sapien non purus malesuada, sit amet porttitor velit fe
        blandit ipsum. Sed non ligula id eros temporcursus. Pellentesque
        convallis leo sit amet diam ornare condimentum vel at nibh. Praesent et
        libero quis odio auctor interdum. In nec tristique dolor. Nullam at
        placerat erat, ac porta arcu. Nam quis justo eu erat dapibus hendrerit.
        Nunc eget porttitor eros, placerat tristique turpis. Praesent dolor
        augue, porta ut ligula vel, scelerisque condimentum ipsum. Sed non
        gravida augue. Ut viverra augue vitae scelerisque auctor. Vivamus eget
        nulla viverra, bibendum justo vitae, tincidunt odio.
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
    content: "This is the window for Experience",
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
    content: "This is the window for Education",
  },
  {
    img: "/document_icon.png",
    alt: "Test",
    title: "Test",
    active: false,
    minimized: false,
    fullscreen: false,
    content: <div className="test-window-content">Test </div>,
  },
];

export default iconlist;
