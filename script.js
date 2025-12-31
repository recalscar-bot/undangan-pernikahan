// Ambil nama tamu dari URL (?to=Nama)
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
  document.getElementById("guestName").innerText = decodeURIComponent(guest);
  document.getElementById("rsvpName").value = decodeURIComponent(guest);
}

// Buka undangan
function openInvitation() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
}

// Countdown
const weddingDate = new Date("2025-07-20T09:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.innerText = "Hari Bahagia Telah Tiba 🤍";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  countdown.innerText = `${d} Hari ${h} Jam ${m} Menit`;
}, 1000);

// RSVP
function submitRSVP(e) {
  e.preventDefault();
  alert("Terima kasih atas konfirmasi kehadiran Anda 🤍");
}
