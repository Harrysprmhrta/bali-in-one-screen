// LOADER
window.onload = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};

// REVEAL ANIMATION
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// PROGRESS BAR + TOP BUTTON
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / height) * 100;

  const bar = document.getElementById("progressBar");
  if (bar) {
    bar.style.width = progress + "%";
  }

  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

// BACK TO TOP
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  topBtn.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

// FULLSCREEN MENU
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.onclick = () => {
    menu.classList.toggle("show");
  };
}

// POPUP OPEN
function openPopup(title, desc, img, link) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popupTitle");
  const popupDesc = document.getElementById("popupDesc");
  const popupImg = document.getElementById("popupImg");
  const popupLink = document.getElementById("popupLink");

  if (popup) popup.classList.add("show");
  if (popupTitle) popupTitle.innerText = title;
  if (popupDesc) popupDesc.innerText = desc;
  if (popupImg) popupImg.src = img;
  if (popupLink) popupLink.href = link;
}

// POPUP CLOSE
function closePopup() {
  const popup = document.getElementById("popup");

  if (popup) {
    popup.classList.remove("show");
  }
}

// CLOSE POPUP IF CLICK OUTSIDE
window.addEventListener("click", (e) => {
  const popup = document.getElementById("popup");

  if (popup && e.target === popup) {
    closePopup();
  }
});

// ESC TO CLOSE POPUP
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
});
