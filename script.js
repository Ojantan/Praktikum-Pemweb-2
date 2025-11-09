// === FITUR POPUP CONFIRM UNTUK SEMBUNYIKAN TEKS ===
document.querySelectorAll("h3").forEach((judul) => {
  judul.addEventListener("click", () => {
    const konfirmasi = confirm("Apakah ingin menyembunyikan konten di bawahnya?");
    if (konfirmasi) {
      const paragraf = judul.nextElementSibling;
      paragraf.style.display = "none";
    }
  });
});

// === MODE RAPI ↔ BERANTAKAN ===
const modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("messy");
  if (document.body.classList.contains("messy")) {
    modeBtn.textContent = "Ubah ke Mode Rapi";
  } else {
    modeBtn.textContent = "Ubah ke Mode Berantakan";
  }
});
