/*Dark/lightmode*/
// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      var targetId = link.getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

/*hamburgermenu*/
// const hamMenu = document.querySelector(".ham-menu");

// const hiddenMenu = document.querySelector(".hiddenmenu");

// hamMenu.addEventListener("click", () => {
//   hamMenu.classList.toggle("active");
//   hiddenMenu.classList.toggle("active");
// });
