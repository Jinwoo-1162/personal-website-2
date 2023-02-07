import "../css/component_css/Educations.css";
import { IoMdSchool } from "react-icons/io";

function Educations() {
  const educations = [
    {
      school: "Georgia Institute of Technology",
      degree: "B.S in Computer Science",
      gpa: "4.0",
      link: "https://www.gatech.edu/",
      iconClass: "school",
    },
    {
      school: "Northwood High School",
      degree: "High School Diploma",
      gpa: "4.0",
      link: "https://northwoodhigh.iusd.org/",
      iconClass: "school",
    },
  ];

  const educationItems = educations.map((exp) => <Education education={exp} />);

  return <div className="education-list">{educationItems}</div>;
}

function Education(props) {
  return (
    <div className="education-item">
      <div className="education-text">
        <div className="education-title">{props.education.school}</div>
        <div className="education-degree">
          <i>{props.education.degree}</i>
        </div>
        <div className="education-desc">GPA: {props.education.gpa}</div>
      </div>
      <div className="icons">
        <a href={props.education.link}>
          <IoMdSchool className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Educations;
