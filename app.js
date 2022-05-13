const projects = [
  {
    img: "assets/pro1.JPG",
    category: "projects",
    link:"assets/project5",
  },
  {
    img: "assets/pro2.JPG",
    category: "projects",
    link:"assets/project-7",
  },
  {
    img: "assets/pro3.JPG",
    category: "projects",
    link:"assets/project-8",
  },
  {
    img: "assets/pro4.JPG",
    category: "projects",
    link:"",
  },
];
const skillsMe = [
  {
    title: `HTML`,
    details: `Advanced`,
    category: "skills",
  },

  {
    title: `Bootstrap`,
    details: `Basic`,
    category: "skills",
  },
  {
    title: `Css`,
    details: `Advanced`,
    category: "skills",
  },
  {
    title: `Javascript`,
    details: `Basic`,
    category: "skills",
  },
  {
    title: `Git`,
    details: `Basic`,
    category: "skills",
  },
];
const tabContent = document.getElementById("tab-content");

document.addEventListener("DOMContentLoaded", function () {
  setButtonCategories();
  displayMenuItems(projects);
});
function activateTheButton(item) {
  document.querySelectorAll(".tab-button").forEach(function (btn) {
    btn.classList.remove("tab-header-active");
  });
  if (item) {
    item.classList.add("tab-header-active");
  }
}

function setButtonCategories() {
  const categoryHeader = document.getElementById("tab-header");
  let categories = [];
  projects.forEach(function (item) {
    if (item && item.category && !categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  skillsMe.forEach(function (ability) {
    if (ability && ability.category && !categories.includes(ability.category)) {
      categories.push(ability.category);
    }
  });
  const buttons = categories.map(function (category) {
    const classList =
      category === "projects" ? "tab-button tab-header-active" : "tab-button";
    return `<div class="${classList}" data-id=${category}> ${category} </div>`;
  });
  categoryHeader.innerHTML = buttons.join("");

  document.querySelectorAll(".tab-button").forEach(function (item) {
    const categoryType = item.getAttribute("data-id");
    item.addEventListener("click", function () {
      activateTheButton(item);
      if (categoryType === "projects") {
        displayMenuItems(projects);
        return;
      }
      const filteredMenu = skillsMe.filter(function (item) {
        return item.category === categoryType;
      });
      displaySkills(filteredMenu);
    });
  });
}

function displayMenuItems(items) {
  displayProjects();
}
function displayProjects() {
  const allProjects = projects.map(function (project) {
    return `<figure class="projects animate__animated animate__flipInX wow">
         <img src="${project.img}" alt="" class="project-pic1">
           <figcaption class="project-detail">
            <a target="_blank" href="${project.link}"><i class="fas fa-link"></i></a>
           </figcaption>
         </figure>`;
  });
  tabContent.innerHTML = `<div class="projects-gallery">${allProjects.join(
    ""
  )}</div>`;
}
function displaySkills() {
  const allSkills = skillsMe.map(function (skill) {
    return `<div>
    <p class="skill-details animate__fadeInUp animate__animated animate__delay-0.5s" ><i class="fas fa-check-circle check-skills"></i> ${skill.title}</p>
    <p class="number-details animate__fadeInDown animate__animated animate__delay-0.5s">${skill.details}</p>
  </div>`;
  });
  tabContent.innerHTML = ` <div class="tab-skills" id="tab-skills">
            <h4 class="header-skills">Frontend Developer</h4><div class="content-details">${allSkills.join(
              ""
            )}</div>`;
}
const element = document.getElementById("main");
const buttons = document.querySelectorAll(".link-mode");
const btnDark = document.getElementById("dark");
const headerSite = document.getElementById("header-title");
const contactTitle = document.getElementById("contact-title");
const linkIcon = document.getElementById("link-icon");
const gitIcon = document.getElementById("git-icon");
const emailIcon = document.getElementById("email-icon");
const titleAbout = document.getElementById("tite-about");
const titleAge = document.getElementById("title-age");
const titleEdu = document.getElementById("title-edu");

function myFunction(e) {
  element.classList.toggle("dark");
  e.classList.toggle("fa-sun");
  headerSite.classList.toggle("dark-text");
  contactTitle.classList.toggle("dark-text");
  linkIcon.classList.toggle("dark-icon");
  gitIcon.classList.toggle("dark-icon");
  emailIcon.classList.toggle("dark-icon");
  titleAge.classList.toggle("dark-text");
  titleEdu.classList.toggle("dark-text");
  titleAbout.classList.toggle("dark-icon");
  skillColor();
}
function skillColor() {
  const nodeList = document.querySelectorAll(".skill-details");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.toggle("dark-text");
  }
}
