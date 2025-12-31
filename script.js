// Nama tamu dari URL
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");
if (guest) {
  document.getElementById("guestName").innerText = decodeURIComponent(guest);
}

// Buka undangan
document.getElementById("openBtn").addEventListener("click", () => {
  document.getElementById("bgMusic").play();
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
});
