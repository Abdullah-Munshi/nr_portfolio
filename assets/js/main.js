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
    document.querySelector("body").classList.toggle("change");
  }
  if (document.getElementById("menu_trigger") !== null) {
    const hamburgerTrigger = document.getElementById("menu_trigger");
    const overlay = document.getElementById("overlay");
    const links = document.querySelectorAll(".hamburger_menu li a");
    hamburgerTrigger.addEventListener("click", hamburgerFn);
    overlay.addEventListener("click", hamburgerFn);

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
    breakpoints: {
      1280: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      480: {
        perPage: 1,
        gap: 16,
        padding: { left: 0, right: "60px" },
      },
    },
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
    breakpoints: {
      1024: {
        perPage: 2,
      },
      480: {
        perPage: 1,
        gap: 16,
        autoHeight: true,
      },
    },
  });

  testimonial.mount();

  // 4. Smooth scroll to next section
  let scroll = new SmoothScroll('a[href*="#"]', {
    offset: 70,
    speed: 500,
  });
});
