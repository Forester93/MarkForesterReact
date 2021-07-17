import React from "react";
import { imgs, certs } from "../../../assets/images";

let projects = [
  {
    name: "Thy Will",
    type: "Full Stack",
    role: "Project Manager",
    technologies: [
      "NodeJS",
      "ExpressJS",
      "Handlebars",
      "JQuery",
      "MySQL",
      "BootStrap",
    ],
    description:
      "A tool to help people draft wills in PDF format according to the laws of NSW.",
    repository: "",
    link: "http://www.thywill.com.au/",
    linkDescription: "Link to Deployed Application",
  },
  {
    name: "Job Genie",
    type: "Front End",
    role: "Project Manager",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    description:
      "A website that helps developers look for programming jobs based on a specific location.",
    repository: "https://github.com/Forester93/job-genie",
    link: "https://forester93.github.io/job-genie",
    linkDescription: "Link to Deployed Application",
  },
  {
    name: "Manager's Pal",
    type: "Back End",
    role: "Sole Author",
    technologies: ["NodeJS", "MySQL"],
    description:
      "A tool to manage employees, departments and roles in a database.",
    repository: "https://github.com/Forester93/managers-pal",
    link: "https://drive.google.com/file/d/1Q7YaK-90JPLOMlYu3O01KUs2OJU_oPym/view?usp=sharing",
    linkDescription: "Video Tutorial",
  },
  {
    name: "My Team Profile",
    type: "Back End",
    role: "Sole Author",
    technologies: ["NodeJS", "HTML", "CSS"],
    description:
      "A tool to generate quality an HTML profile page for a development team.",
    repository: "https://github.com/Forester93/managers-pal",
    link: "https://drive.google.com/file/d/1Q7YaK-90JPLOMlYu3O01KUs2OJU_oPym/view?usp=sharing",
    linkDescription: "Video Tutorial",
  },
  {
    name: "README Maker",
    type: "Back End",
    role: "Sole Author",
    technologies: ["NodeJS", "Markdown"],
    description:
      "A tool to generate quality README.md files to make the developers time more efficient by letting the developer focus on actual coding.",
    repository: "https://github.com/Forester93/readme-maker",
    link: "https://drive.google.com/file/d/1X3BBRRSoSYuGzYdHcTewfOAO3Ur8Km-6/view?usp=sharing",
    linkDescription: "Video Tutorial",
  },
  {
    name: "E-Comm Server",
    type: "Back End",
    role: "Back-end Developer",
    technologies: ["NodeJS", "Express"],
    description: "A back-end server for an e-commerce application.",
    repository: "https://github.com/Forester93/e-comm-server",
    link: "https://drive.google.com/file/d/17YcdN_S-Q61S81CktGrRYgcvfqCIKVG2/view?usp=sharing",
    linkDescription: "Server Test Video",
  },
  {
    name: "Post-It",
    type: "Full Stack",
    role: "Back-end Developer",
    technologies: ["HTML", "CSS", "NodeJS", "ExpressJS"],
    description:
      "A tool to post ‘sticky notes’, retrieve, edit and delete them from a deployed server.",
    repository: "https://github.com/Forester93/post-it",
    link: "https://shrouded-spire-81983.herokuapp.com/",
    linkDescription: "Link to Deployed Application",
  },
  {
    name: "Task-It",
    type: "Front End",
    role: "Sole Author",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A day planner tool that uses Moment JS library to track the hour and the progress of tasks throughout the day.",
    repository: "https://github.com/Forester93/Task-It",
    link: "https://forester93.github.io/Task-It",
    linkDescription: "Link to Deployed Application",
  },
  {
    name: "Always Sunny",
    type: "Front End",
    role: "Sole Author",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A weather dashboard tool that uses local storage to store user’s searches.",
    repository: "https://github.com/Forester93/always-sunny",
    link: "https://forester93.github.io/always-sunny",
    linkDescription: "Link to Deployed Application",
  },
  {
    name: "Riddle Me Quiz",
    type: "Front End",
    role: "Sole Author",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A timed quiz that tests the developers knowledge on JavaScript.",
    repository: "https://github.com/Forester93/riddle-me-quiz",
    link: "https://forester93.github.io/riddle-me-quiz",
    linkDescription: "Link to Deployed Application",
  },
  {
    name: "Hang'D Man",
    type: "Front End",
    role: "Sole Author",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "An online version of the word guessing game Hanged-man.",
    repository: "https://github.com/Forester93/hangdman",
    link: "https://forester93.github.io/hangdman",
    linkDescription: "Link to Deployed Application",
  },
  {
    name: "Gatekeeper Password Generator",
    type: "Front End",
    role: "Sole Author",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "Online tool to generate a secure password based on a series of criteria the user has to answer.",
    repository: "https://github.com/Forester93/gatekeeper-password-generator",
    link: "https://forester93.github.io/gatekeeper-password-generator/",
    linkDescription: "Link to Deployed Application",
  },
  {
    name: "BlogO4 Tech Hub",
    type: "Full Stack",
    role: "Sole Author",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "MySQL",
      "MySQL2",
    ],
    description:
      "An online tech blog where one gets to share their great ideas with the world.",
    repository: "",
    link: "https://blogo4-notfound.herokuapp.com/home",
    linkDescription: "Link to Deployed Application",
  },
  {
    name: "Ready Set Go",
    type: "Full Stack",
    role: "Backend Developer",
    technologies: ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS", "NoSQL"],
    description:
      "A lightweight fitness tracker tool to help you be on top of your exercises and fitness goals!",
    repository: "https://github.com/Forester93/ready-set-go",
    link: "https://readysetgoau.herokuapp.com/",
    linkDescription: "Link to Deployed Application",
  },
  {
    name: "How Much Dollar",
    type: "Full Stack",
    role: "Full Stack Developer",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "NoSQL",
      "IndexedDB",
      "PWA",
    ],
    description:
      "Light-weight PWA application that you can install to your phone or desktop to seamlessly track your expenditures progressively.",
    repository: "https://github.com/Forester93/howmuchdollars",
    link: "https://howmuchdollars.herokuapp.com/",
    linkDescription: "Link to Deployed Application",
  },
];

function Projects() {
  return (
    <div class="main-section align-items-center" id="projects">
      <p class="about-me text-2">
        A list of projects authored or contributed thereto by Mark.
      </p>
      <br />
      <div class="card-columns container" id="projectsContainer">
        {projects.map((project, index) => (
          <div class="card container my-2" style={{ display: "inline-block" }}>
            <img class="card-img-top" src={imgs[index]} alt={project.name} />
            <div class="card-body">
              <h5 class="card-header">
                <strong>{project.name}</strong>
              </h5>
              <div class="card-body">
                <p class="card-text">
                  Project Description: {project.description}
                </p>
                <p class="card-text">
                  <strong>
                    Technologies Used: {project.technologies.concat(", ")}.
                  </strong>
                </p>
                <p class="card-text">
                  <strong class="text-muted">
                    Project Type: {project.type}
                  </strong>
                </p>
                <p class="card-text">
                  <strong>Mark's Role: {project.role}</strong>
                </p>
                <hr />
                <a
                  href={project.link}
                  target="_blank"
                  style={{ fontSize: "large" }}
                >
                  <button>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>{" "}
                    {project.linkDescription}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
