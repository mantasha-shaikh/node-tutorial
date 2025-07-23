function ToggleMobileEvent(){
     const menu =  document.getElementById("menu");


    menu.classList.toggle("active");
}

const themeToggle = document.getElementById("theme");
const moonIcon = document.querySelector(".moon-icon");
const sunIcon = document.querySelector(".sun-icon");

// 🧠 Load Theme From localStorage on Page Load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const isLight = savedTheme === "light";

  if (isLight) {
    document.body.classList.add("light");
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
  } else {
    document.body.classList.remove("light");
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  }
});

// 🌗 Theme Toggle Logic
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");

  // Store theme in localStorage
  localStorage.setItem("theme", isLight ? "light" : "dark");

  // Update icon visibility
  if (isLight) {
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
  } else {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  }
});



// Load saved theme on page load



