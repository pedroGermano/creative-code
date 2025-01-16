document.addEventListener("DOMContentLoaded", (event) => {
  const timeline = gsap
    .timeline({
      defaults: { duration: 1.8, ease: "expo.inOut" },
    })
    .from(".wipe, .menu-fs__nav", { xPercent: -100, stagger: 0.1 }, "<")
    .from(".fader", { opacity: 0 }, "<")
    .to(".hero", { xPercent: 35 }, "<")
    .from(".menu-fs__nav a", { yPercent: 88, stagger: 0.1 }, "40%")
    .from(".menu-fs__links a", { opacity: 0, y: 88, stagger: 0.06 }, "<")
    .reverse();

  document.querySelector(".trigger").addEventListener("click", function () {
    timeline.reversed(!timeline.reversed());
  });
});
