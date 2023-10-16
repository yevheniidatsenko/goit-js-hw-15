const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
