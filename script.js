const lenis = new Lenis({
  smooth: true,
  duration: 3.0,
  smoothTouch: true,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Example GSAP animation (optional)
let tl = gsap.timeline();
tl.from("header", {
  opacity: 0,
  y: -10,
  duration: 0.5,
  ease: "easeInOutQuad",
  stagger: 0.2,
  scrub: 1,
});
tl.from(
  ".home_text h1",
  {
    opacity: 0,
    x: -10,
    duration: 0.5,
    ease: "easeInOutQuad",
    stagger: 1,
  },
  "tl"
);
tl.from(".home_text h2", {
  opacity: 0,
  x: -10,
  duration: 0.5,
  ease: "easeInOutQuad",
  stagger: 1,
});
tl.from(".home_text p", {
  opacity: 0,
  x: -10,
  duration: 0.5,
  ease: "easeInOutQuad",
  stagger: 1,
});
tl.from(".home_text .home_btn", {
  opacity: 0,
  x: -10,
  duration: 0.5,
  ease: "easeInOutQuad",
  stagger: 1,
});
tl.from(
  ".home_img",
  {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "easeInOutQuad",
    stagger: 0.2,
  },
  "tl"
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".skill_item",
    // markers: true,
    start: "top 100%",
    end: "top 90%",
  },
});

tl2.from(".skill_item", {
  width: "0%",
  duration: 1,
  stagger: 0.3,
});

gsap.to(".projects_container", {
  x: "-300vw",
  ease: "power1.inOut", // Slow and smooth easing
  scrollTrigger: {
    trigger: ".projects_container",
    start: "top top",
    end: "300%", // Increased duration
    pin: true,
    scrub: 2, // Smooth and slow
  },
});

gsap.to(".projects_subtitle svg", {
  rotate: 90,
  scrollTrigger: {
    trigger: ".projects_subtitle",
    start: "top 0%",
    end: "top 30%",
    scrub: 3,
  },
});

// contact

// Animate Btn
document.querySelectorAll(".animate_btn").forEach((ball) => {
  let posX = 0,
    posY = 0; // Track position for smooth animation
  let targetX = 0,
    targetY = 0; // Target position to move to

  // Update the target position on mousemove
  ball.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let ballWidth = ball.clientWidth;
    let ballHeight = ball.clientHeight;
    targetX = x - ballWidth / 2;
    targetY = y - ballHeight / 2;
  });

  // Reset position on mouseout
  ball.addEventListener("mouseout", () => {
    targetX = 0;
    targetY = 0;
  });

  // Smoothly animate the movement using requestAnimationFrame
  function animate() {
    posX += (targetX - posX) * 0.1; // Interpolation for smoothness
    posY += (targetY - posY) * 0.1;

    ball.style.transform = `translateX(${posX}px) translateY(${posY}px)`;

    requestAnimationFrame(animate);
  }

  animate();
});

// Footer

// GSAP ScrollTrigger Animation
gsap.registerPlugin(ScrollTrigger);

// Footer animation: pops up when scroll reaches the bottom
gsap.to(".footer", {
  opacity: 1,
  bottom: 0,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#contact", // The entire document
    start: "top 30%", // Start when the top of the page reaches the bottom of the viewport
    end: "bottom bottom", // End when the bottom of the page reaches the bottom of the viewport
    scrub: 2, // Smooth scrolling
    markers: false, // Remove markers if you don't want to see them
  },
});
