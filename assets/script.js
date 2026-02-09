const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

function setTheme(mode) {
  if (mode === "light") root.classList.add("light");
  else root.classList.remove("light");
  localStorage.setItem("theme", mode);
  themeBtn.textContent = mode === "light" ? "☀" : "☾";
}

const saved = localStorage.getItem("theme");
setTheme(saved || "dark");

themeBtn.addEventListener("click", () => {
  const isLight = root.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

// project filter
const chips = Array.from(document.querySelectorAll(".chip"));
const cards = Array.from(document.querySelectorAll(".proj-card"));

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.dataset.filter;
    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      card.style.display = show ? "block" : "none";
    });
  });
});
