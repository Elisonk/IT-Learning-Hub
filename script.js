fetch("data/courses.json")
  .then((res) => res.json())
  .then((data) => {
    const list = document.getElementById("course-list");

    data.forEach((course) => {
      const div = document.createElement("div");
      div.className = "course";
      div.innerHTML = `
        <h3>${course.title}</h3>
        <ul>
          ${course.resources
            .map(
              (r) => `<li><a href="${r.url}" target="_blank">${r.name}</a></li>`
            )
            .join("")}
        </ul>
      `;
      list.appendChild(div);
    });

    document.getElementById("search").addEventListener("input", function () {
      const keyword = this.value.toLowerCase();
      document.querySelectorAll(".course").forEach((div) => {
        div.style.display = div.innerText.toLowerCase().includes(keyword)
          ? "block"
          : "none";
      });
    });
  });
const slides = document.querySelectorAll(".slide-bg");
const messages = [
  "🚀 Start your tech journey today—every expert was once a beginner.",
  "💡 Learn something new every day. Your future self will thank you.",
  "👩‍💻 Coding isn’t hard. It just takes patience and practice.",
  "🔥 Your learning pace doesn’t matter—consistency does!",
];

const textElement = document.getElementById("motivationText");

let current = 0;

setInterval(() => {
  // Fade image
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");

  // Change message
  textElement.textContent = messages[current];
}, 10000); // Every 10 seconds
