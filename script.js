// Nama tamu dari URL (?to=Nama)
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");
if (guest) {
  document.getElementById("guestName").innerText = decodeURIComponent(guest);
  document.getElementById("rsvpName").value = decodeURIComponent(guest);
}

function startInvite() {
  document.getElementById("bgMusic").play();
  document.getElementById("cover").scrollIntoView({behavior:"smooth"});
}

// Countdown
const targetDate = new Date("2025-07-20T09:00:00").getTime();
const countdownEl = document.getElementById("countdown");
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;
  if (diff < 0) {
    countdownEl.innerText = "Hari Bahagia Telah Tiba 🎉";
    return;
  }
  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff/(1000*60*60))%24);
  const m = Math.floor((diff/(1000*60))%60);
  countdownEl.innerText = `${d} Hari ${h} Jam ${m} Menit`;
}, 1000);

// Lightbox
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImg").src = src;
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// RSVP
function submitRSVP(e) {
  e.preventDefault();
  alert("Terima kasih atas konfirmasinya 🤍");
}
