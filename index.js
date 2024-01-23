/*Dark/lightmode*/
function Darkmode() {
  var element = document.body;
  var btn = document.getElementById("modeSwitcher");
  element.classList.toggle("dark-mode");
  if (element.classList.contains("dark-mode")) btn.innerHTML = "🌙";
  else btn.innerHTML = "💡";
}

/*Smooth scroll*/
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

/*Hamburger menu*/
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  // Toggle the 'show' class on the navigation list and the 'change' class on the mobile menu button when it is clicked
  mobileMenuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    navList.classList.toggle("show");
    toggleMenuIcon();
  });

  document.addEventListener("click", function (event) {
    if (mobileMenuButton.contains(event.target)) {
      // If click is inside the menu button, toggle the menu
      navList.classList.toggle("show");
      toggleMenuIcon();
    } else if (navList.classList.contains("show")) {
      // If click is outside the menu, close the menu if it's open
      navList.classList.remove("show");
      toggleMenuIcon();
    }
  });

  function toggleMenuIcon() {
    const iconBars = mobileMenuButton.querySelectorAll("span");
    iconBars.forEach((bar) => {
      bar.classList.toggle("change");
    });
  }
});
