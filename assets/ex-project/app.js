const headerElement = document.getElementById("header");
document.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    headerElement.classList.add("header-scroll");
    return;
  }
  headerElement.classList.remove("header-scroll");
});
// const slide = [
//   {
//     id: 1,
//     img: "assets/service-icon-01.png",
//     title: "useful Tricks",
//     desc: ` EduWell is the professional HTML5 template for your school or
//   university websites.`,
//   },
//   {
//     id: 2,
//     img: "assets/service-icon-02.png",
//     title: "Technology",
//     desc: ` EduWell is the professional HTML5 template for your school or
//   university websites.`,
//   },
//   {
//     id: 3,
//     img: "assets/service-icon-03.png",
//     title: "Ready target",
//     desc: `You can download and use this EduWell Template for your teaching
//   and learning stuffs.`,
//   },
//   {
//     id: 4,
//     img: "assets/service-icon-04.png",
//     title: "Creative Ideas",
//     desc: `You can download and use this EduWell Template for your teaching
//   and learning stuffs.`,
//   },
// ];

function slideShow(i) {
  setTimeout(function () {
    servicesBox.style.transform = `translateX(-${i * 370}px)`;
  }, 3000);
}
const servicesBox = document.getElementById("services-box");
let aloadCounterBox = 4;
for (let i = 1; i < aloadCounterBox; i++) {
  slideShow(i);
}

// function slideShow(){
//   servicesBox.style.transform="translateX(-300px)";
// }
