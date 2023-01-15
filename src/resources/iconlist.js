import AppBar from "../components/AppBar";
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
        facilisis sapien non purus malesuada, sit amet porttitor velit
        fermentum. Etiam pellentesque nulla a quam mollis, non vestibulum massa
        mollis. Nam nec dui justo. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Sed in egestas
        justo. Phasellus ac nulla quis lorem tincidunt ultricies. Nunc turpis
        quam, viverra quis faucibus nec, dapibus eget quam. Quisque imperdiet eu
        libero sed dictum. Donec nec porta lorem, a semper neque. Cras lacinia
        sapien ut lectus aliquet, eu euismod lorem efficitur. Etiam non luctus
        sem. Nulla ut tortor non eros convallis posuere a a ante. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Donec efficitur massa at lectus aliquam convallis. Nullam eu
        imperdiet lorem. Ut eu semper nunc. In ac blandit ex. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Aliquam molestie mattis enim a
        consectetur. Nam vehicula justo sit amet suscipit elementum. Maecenas
        faucibus risus sed odio consequat, in dictum turpis maximus. Nam vel
        consequat mi. Nunc eget nulla nec mi blandit gravida. Pellentesque
        iaculis augue nisl, ut elementum diam sollicitudin sit amet. In
        scelerisque erat mauris, eget viverra sem sodales id. Nam sollicitudin
        mattis lacus, id pharetra lectus. Curabitur ut dui quis ex varius tempus
        et vel mauris. Fusce bibendum volutpat facilisis. Suspendisse auctor
        lacinia risus sit amet bibendum. Maecenas at tincidunt turpis. Morbi
        porttitor laoreet dui quis iaculis. Praesent consectetur lorem nisl, et
        tincidunt risus mattis quis. Maecenas laoreet tristique ex in congue.
        Suspendisse porta metus quis ante vulputate luctus. Donec porta magna
        nec felis feugiat, a consequat ante accumsan. Suspendisse ipsum mi,
        volutpat in suscipit eget, auctor quis elit. Pellentesque convallis
        tellus ut pulvinar congue. Cras hendrerit placerat metus, eget lobortis
        orci efficitur nec. Nulla urna massa, pulvinar ac varius et, faucibus
        nec sem. Morbi semper ex at sem laoreet efficitur. Morbi interdum
        imperdiet vulputate. In ac rhoncus tortor, eu finibus elit. Sed id mi
        metus. Sed vestibulum nunc tortor, non maximus sapien rutrum et.
        Suspendisse molestie blandit ipsum. Sed non ligula id eros tempor
        cursus. Pellentesque convallis leo sit amet diam ornare condimentum vel
        at nibh. Praesent et libero quis odio auctor interdum. In nec tristique
        dolor. Nullam at placerat erat, ac porta arcu. Nam quis justo eu erat
        dapibus hendrerit. Nunc eget porttitor eros, placerat tristique turpis.
        Praesent dolor augue, porta ut ligula vel, scelerisque condimentum
        ipsum. Sed non gravida augue. Ut viverra augue vitae scelerisque auctor.
        Vivamus eget nulla viverra, bibendum justo vitae, tincidunt odio.
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
    content: "This is the window for Resume",
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
    content: (
      <div className="test-window-content">
        <AppBar />
      </div>
    ),
  },
];

export default iconlist;
