document.addEventListener("DOMContentLoaded", function () {
  // 1. Script for header Sticky
  const stickyTarget = document.querySelector(".sticky-target");
  const stickyWrapper = document.querySelector("header");
  const stickyWatch = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        stickyWrapper.classList.add("stuck");
      } else {
        stickyWrapper.classList.remove("stuck");
      }
    });
  };
  const observer = new IntersectionObserver(stickyWatch);
  observer.observe(stickyTarget);

  // 2. Script for Mobile toggle button
  function hamburgerFn(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("extra");
  }
  if (document.getElementById("hamburger_trigger") !== null) {
    const hamburgerTrigger = document.getElementById("hamburger_trigger");
    const overlay = document.getElementById("overlay");
    const closeMenu = document.getElementById("close_m");
    const links = document.querySelectorAll(".hamburger_menu li a");
    hamburgerTrigger.addEventListener("click", hamburgerFn);
    overlay.addEventListener("click", hamburgerFn);
    closeMenu.addEventListener("click", hamburgerFn);

    links.forEach((link) => link.addEventListener("click", hamburgerFn));
  }

  // 3. Splide JS plugin activation for carousel(homepage)
  let showcase = new Splide("#showcase", {
    speed: 1000,
    type: "loop",
    perPage: 4,
    gap: 30,
    rewind: true,
    padding: { left: 0, right: "10vw" },
    pagination: false,
  });
  showcase.mount();

  let testimonial = new Splide("#testimonialCarousel", {
    speed: 1000,
    type: "loop",
    perPage: 3,
    gap: 30,
    rewind: true,
    arrows: false,
    centerMode: true,
  });

  testimonial.mount();

  // 4. Smooth scroll to next section
  let scroll = new SmoothScroll('a[href*="#"]', {
    offset: 60,
    speed: 500,
  });
});
