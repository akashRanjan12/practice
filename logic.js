// i'm going to check if the input fied get the ilysm input adn after click btn it hide the fist-div
const firstDiv = document.querySelector(".first-div");
const inputField = document.querySelector(".input-field");

inputField.addEventListener("input", () => {
  if (inputField.value.toLowerCase() === "reetopa bubun") {
    firstDiv.style.display = "none";
  }
});

// haart animation
document.addEventListener("mousemove", function (e) {
  const heart = document.createElement("div");
  heart.classList.add("heart-cursor");

  const colors = ["#ff69b4", "#87ceeb", "#ff0000"]; // pink, skyblue, red
  const emojis = ["❤️", "💕", "💖"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.style.color = randomColor;
  heart.textContent = randomEmoji;
  // set zindex
  heart.style.zIndex = "999999999"; // Ensure the heart appears above other elements
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});

// background heart
const heartIcons = ["fas fa-heart", "fas fa-heart-circle"];

const colors = [
  "rgba(255, 105, 180, 0.15)", // hot pink
  "rgba(255, 0, 212, 0.15)", // sky blue
  "rgba(255, 0, 0, 0.15)", // red
];

for (let i = 0; i < 30; i++) {
  const icon = document.createElement("i");
  icon.className = `floating-heart ${
    heartIcons[Math.floor(Math.random() * heartIcons.length)]
  }`;
  icon.style.top = Math.random() * 100 + "vh";
  icon.style.left = Math.random() * 100 + "vw";
  icon.style.fontSize = 2 + Math.random() * 4 + "rem";
  icon.style.animationDelay = Math.random() * 5 + "s";
  icon.style.color = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(icon);
}

// scroll eff
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  ); // Trigger when 20% of the element is visible

  elements.forEach((el) => observer.observe(el));
});
