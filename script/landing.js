const hamburgeMenu = () => {
  const burgerMenu = document.querySelector(".hamburger-menu");
  const navbar = document.querySelector(".nav-links");
  const navbarLinks = document.querySelectorAll(".nav-links li");

  [burgerMenu, navbar].forEach((item) => {
    item.addEventListener("click", () => {
      navbar.classList.toggle("navbar-active");

      navbarLinks.forEach((link, index) => {
        if (navbar.contains(document.querySelector(".navbar-active"))) {
          link.style.animation = `linkAnimateIn 0.4s ease forwards ${index / 7 + 0.7}s`;
        } else {
          link.style.animation = `linkAnimateOut 0.8s 1s ease forwards 1s`;
        }
      });
    });
  });
};

hamburgeMenu();

// Video slowmo function

var video = (document.getElementById("heroVideo").playbackRate = 0.2);
