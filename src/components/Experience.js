import "../css/component_css/Experiences.css";
import { IoMdSchool } from "react-icons/io";
import { SiAmazonaws } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";

function Experiences() {
  const experiences = [
    {
      company: "Amazon AWS",
      role: "Software Developer (current)",
      desc: "Working on the Object Insights team developing mechanisms for cost-effective data storage mechanisms in S3",
      link: "https://aws.amazon.com/about-aws/",
      iconClass: "amazon",
    },
    {
      company: "Amazon",
      role: "SDE Intern",
      desc: "Created a tool for AWS S3 users to aggregate last access data across their storage buckets",
      link: "https://aws.amazon.com/about-aws/",
      iconClass: "amazon",
    },
    {
      company: "Georgia Institute of Technology",
      role: "Web Developer",
      desc: "Developed the TutorJS website for Georgia Tech's Intelligent Tutoring Systems lab",
      link: "https://www.vip-consortium.org/teams/intelligent-tutoring-systems",
      iconClass: "school",
    },
    {
      company: "Georgia Institute of Technology",
      role: "Tutor",
      desc: "Tutored students on topics ranging from object oriented programming to combinatorics",
      link: "https://tutoring.gatech.edu/",
      iconClass: "school",
    },
  ];

  const experienceItems = experiences.map((exp) => (
    <Experience experience={exp} />
  ));

  return <div className="experience-list">{experienceItems}</div>;
}

function Experience(props) {
  const iconReturn = (iconClass) => {
    switch (iconClass) {
      case "amazon":
        return <SiAmazonaws className="icon" />;
      case "school":
        return <IoMdSchool className="icon" />;
      default:
        return <MdOutlineWork className="icon" />;
    }
  };
  return (
    <div className="experience-item">
      <div className="experience-text">
        <div className="experience-title">{props.experience.company}</div>
        <div className="experience-role">
          <i>{props.experience.role}</i>
        </div>
        <div className="experience-desc">{props.experience.desc}</div>
      </div>
      <div className="icons">
        <a href={props.experience.link}>
          {iconReturn(props.experience.iconClass)}
        </a>
      </div>
    </div>
  );
}

export default Experiences;
