import "../css/component_css/Projects.css";
import { GoMarkGithub } from "react-icons/go";
import { SiDevpost } from "react-icons/si";

function Projects() {
  const projects = [
    {
      name: "Step Dance",
      role: "Developer",
      desc: "Mixed media musical instrument that uses computer vision and AR tools to control a futuristic piano",
      github: "https://github.com/Ryan-K-Chen/StepDance",
      devpost: "https://devpost.com/software/step-dance",
    },
    {
      name: "Zen",
      role: "Developer",
      desc: "A modern reinterpretation of the classic hourglass with a data visualization twist",
      github: "https://github.com/Akash-Harapanahalli/the-modern-hourglass",
      devpost: "https://devpost.com/software/zen-k1w6ri",
    },
    {
      name: "Buzzer",
      role: "Project Manager",
      desc: "Twitter  for Georgia Tech students",
      github: "https://github.com/Jinwoo-1162/Buzzer",
      devpost: "",
    },
    {
      name: "March On Website",
      role: "Developer",
      desc: "Providing students an anonymous platform to advocate for the most pressing current issues",
      github: "https://github.com/Jinwoo-1162/March-On",
      devpost: "",
    },
    {
      name: "Trash Talker",
      role: "Developer",
      desc: "Giving recyclable glass bottles a beautiful second life using ",
      github: "https://github.com/Jinwoo-1162/Trash-Talker",
      devpost: "https://devpost.com/software/trashtalker",
    },
  ];

  const projectItems = projects.map((proj) => <Project project={proj} />);

  return <div className="project-list">{projectItems}</div>;
}

function Project(props) {
  return (
    <div className="project-item">
      <div className="project-text">
        <div className="project-title">{props.project.name}</div>
        <div className="project-role">
          <i>{props.project.role}</i>
        </div>
        <div className="project-desc">{props.project.desc}</div>
      </div>
      <div className="icons">
        {props.project.devpost === "" ? null : (
          <a href={props.project.devpost}>
            <SiDevpost className="icon" />
          </a>
        )}
        <a href={props.project.github}>
          <GoMarkGithub className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
