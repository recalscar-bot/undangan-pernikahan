gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Nama tamu
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");
if (guest) {
  document.getElementById("guestName").innerText = decodeURIComponent(guest);
  document.getElementById("rsvpName").value = decodeURIComponent(guest);
}

const panels = gsap.utils.toArray(".panel");
let current = 0;
let isAnimating = false;

// LOCKED FULLPAGE SCROLL
function goToPanel(index) {
  if (index < 0 || index >= panels.length || isAnimating) return;
  isAnimating = true;

  gsap.to(window, {
    scrollTo: { y: index * window.innerHeight },
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => isAnimating = false
  });

  current = index;
}

// Mouse wheel
window.addEventListener("wheel", e => {
  if (isAnimating) return;
  if (e.deltaY > 0) goToPanel(current + 1);
  else goToPanel(current - 1);
});

// Touch swipe (mobile)
let startY = 0;
window.addEventListener("touchstart", e => startY = e.touches[0].clientY);
window.addEventListener("touchend", e => {
  let endY = e.changedTouches[0].clientY;
  if (startY - endY > 50) goToPanel(current + 1);
  if (endY - startY > 50) goToPanel(current - 1);
});

// Open invitation
document.getElementById("openInvite").onclick = () => {
  document.getElementById("bgMusic").play();
  goToPanel(1);
};

// Fade animation per slide
panels.forEach(panel => {
  gsap.from(panel.children, {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: panel,
      start: "top center"
    }
  });
});

// Countdown
const target = new Date("2025-07-20T09:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;
  if (diff <= 0) {
    countdown.innerText = "Hari Bahagia Telah Tiba 🤍";
    return;
  }
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  countdown.innerText = `${d} Hari ${h} Jam ${m} Menit`;
}, 1000);

function submitRSVP(e) {
  e.preventDefault();
  alert("Terima kasih atas konfirmasi kehadiran Anda 🤍");
}
