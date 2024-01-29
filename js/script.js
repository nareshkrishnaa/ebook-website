function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("black-nav");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("black-nav");
    }
  });
}

// window.addEventListener("scroll", userScroll);

document.addEventListener("DOMContentLoaded", userScroll);
