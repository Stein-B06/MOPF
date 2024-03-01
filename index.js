/*Dark/lightmode*/
function Darkmode() {
  let element = document.body;
  let btn = document.getElementById("modeSwitcher");
  element.classList.toggle("dark-mode");
  if (element.classList.contains("dark-mode")) btn.innerHTML = "🌙";
  else btn.innerHTML = "💡";
}

/*Smooth scroll*/
document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let targetId = link.getAttribute("href").substring(1);
      let targetSection = document.getElementById(targetId);

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

// For filling the experience bars in the tool section based on the fillPercentages
document.addEventListener("DOMContentLoaded", function () {
  // Define an object to store fill percentages for each experience bar
  let fillPercentages = {
    1: 90, // Fill percentage for experiencebar in the tools section with data-id="1" id="2" etc.
    2: 90,
    3: 50,
    4: 30,
    5: 50,
    6: 60,
    7: 90,
    8: 20,
    9: 20,
  };

  // Loop through each entry in the fillPercentages of the experiencebar
  for (let id in fillPercentages) {
    // Select the experience bar element with the id
    let experienceBar = document.querySelector(
      '.experience-bar[data-id="' + id + '"]'
    );

    // Set the width of the experience bar dynamically based on the filled percentages
    experienceBar.style.width = fillPercentages[id] + "%";
  }
});
