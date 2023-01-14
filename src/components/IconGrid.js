import "../css/component_css/IconGrid.css";
import Icon from "../components/Icon";

function IconGrid() {
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
    <div id="icon-grid">
      <Icon className="icon" icon_content={recycling_icon} />
      <Icon className="icon" icon_content={mail_icon} />
      <Icon className="icon" icon_content={projects_icon} />
      <Icon className="icon" icon_content={experience_icon} />
      <Icon className="icon" icon_content={resume_icon} />
      <Icon className="icon" icon_content={education_icon} />
    </div>
  );
}

export default IconGrid;
