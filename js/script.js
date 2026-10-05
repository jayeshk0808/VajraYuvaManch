const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImg.src = item.dataset.full;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeBox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}
closeLightbox.addEventListener("click", closeBox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeBox();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeBox();
});

// Static contact form demo
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  if (name) {
    alert(`धन्यवाद ${name}! तुमचा संदेश तयार झाला आहे.\\n\\nही static website असल्यामुळे तो server वर पाठवला जात नाही.`);
    e.target.reset();
  }
});
