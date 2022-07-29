// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

// Theme check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.add("display-none");
    return;
  }
  moonIcon.classList.add("display-none");
};

// Manual Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

// Button events
sunIcon.addEventListener("click", () => {
  themeSwitch();
});
moonIcon.addEventListener("click", () => {
  themeSwitch();
});

// Theme check on inital load
themeCheck();
