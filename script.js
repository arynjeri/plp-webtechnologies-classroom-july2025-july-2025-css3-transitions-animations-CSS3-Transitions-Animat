// Part 2: JavaScript Functions

// Global variable
let multiplier = 2;

// Function with parameters + return
function squareNumber(num) {
  return num * num;
}

// Function demonstrating scope
function showResult() {
  let input = 5; // Local variable
  let result = squareNumber(input) * multiplier; // Uses global + local
  document.getElementById("result").innerText =
    `The square of ${input} * multiplier (${multiplier}) = ${result}`;
}

// Part 3: Combining CSS + JS
const triggerBtn = document.getElementById("trigger");
const magicBox = document.getElementById("magicBox");

// Function to toggle animation
function toggleAnimation() {
  magicBox.classList.toggle("animate");
}

// Event listener
triggerBtn.addEventListener("click", toggleAnimation);
