gsap.registerPlugin(ScrollTrigger);

// ===============================
// INIT
// ===============================
const panels = document.querySelectorAll(".panel");
const wrapper = document.getElementById("wrapper");

let current = 0;
let isAnimating = false;

// Pastikan posisi awal
gsap.set(wrapper, { y: 0 });

// ===============================
// NAVIGASI SLIDE
// ===============================
function goTo(index) {
  if (index < 0 || index >= panels.length || isAnimating) return;
  isAnimating = true;

  gsap.to(wrapper, {
    y: -index * window.innerHeight,
    duration: 1,
    ease: "power3.inOut",
    onComplete: () => {
      current = index;
      isAnimating = false;
    }
  });
}

// ===============================
// BUKA UNDANGAN
// ===============================
const openBtn =
