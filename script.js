gsap.registerPlugin(ScrollTrigger);

// Ambil nama tamu
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");
if (guest) {
  document.getElementById("guestName").innerText = decodeURIComponent(guest);
  document.getElementById("rsvpName").value = decodeURIComponent(guest);
}

const panels = document.querySelectorAll(".panel");
let currentIndex = 0;
let isAnimating = false;

// 🔥 FUNGSI PINDAH SLIDE (INI KUNCI)
function goTo(index) {
  if (index < 0 || index >= panels.length || isAnimating) return;
  isAnimating = true;

  gsap.to("#wrapper", {
    y: -index * window.innerHeight,
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      currentIndex = index;
      isAnimating = false;
    }
  });
}

// 🎵 BUKA UNDANGAN (SEKARANG PASTI JALAN)
document.getElementById("openInvite").addEventListener("click", () => {
  document.getElementById("bgMusic").play();
  goTo(1);
});

// 🖱️ SCROLL MOUSE
window.addEventListener("wheel", e => {
  if (isAnimating) return;
  if (e.deltaY > 0) goTo(currentIndex + 1);
  else goTo(currentIndex - 1);
});

// 📱 SWIPE MOBILE
let startY = 0;
window.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});
window.addEventListener("touchend", e => {
  let endY = e.changedTouches[0].clientY;
  if (startY - endY > 50) goTo(currentIndex + 1);
  if (endY - startY > 50) goTo(currentIndex - 1);
});

// ✨ ANIMASI ISI SETIAP SLIDE
panels.forEach(panel => {
  gsap.from(panel.children, {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: panel,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});
