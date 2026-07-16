const emoji = document.querySelector(".emoji");
const mood = document.querySelector(".mood");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

// moods with colors and names
const moods = [
  {
    emoji: "🤩",
    mood: "Excited",
    color: "#c5b3d3",
  },
  {
    emoji: "😎",
    mood: "Cool",
    color: "skyblue",
  },
  {
    emoji: "😴",
    mood: "Sleepy",
    color: "lightblue",
  },
  {
    emoji: "😀",
    mood: "Happy",
    color: "#FFE066",
  },
  {
    emoji: "😭",
    mood: "Sad",
    color: "#D3D3D3",
  },
  {
    emoji: "😄",
    mood: "Cheerful",
    color: "#FFD166",
  },
  {
    emoji: "🥳",
    mood: "Party Mode",
    color: "#FF69B4",
  },
  {
    emoji: "😌",
    mood: "Relaxed",
    color: "#98FB98",
  },
  {
    emoji: "😊",
    mood: "Grateful",
    color: "#FFFACD",
  },
  {
    emoji: "🤔",
    mood: "Thinking",
    color: "#D8BFD8",
  },
  {
    emoji: "😡",
    mood: "Angry",
    color: "#FF6347",
  },
  {
    emoji: "🤒",
    mood: "Sick",
    color: "#C0C0C0",
  },
];

let previousIndex = -1; // Initialize previousIndex to -1 to ensure the first selection is random
btn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * moods.length);
  if (randomIndex === previousIndex) {
    randomIndex = (randomIndex + 1) % moods.length;
    previousIndex = randomIndex;
  }
  previousIndex = randomIndex;
  const selectedMood = moods[randomIndex];
  emoji.textContent = selectedMood.emoji;
  emoji.classList.add("emojianimation");
  emoji.addEventListener(
    "animationend",
    () => {
      emoji.classList.remove("emojianimation");
    },
    { once: true },
  );
  mood.textContent = selectedMood.mood;
  container.style.backgroundColor = selectedMood.color;
});
