// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  let left = dodger.style.left.replace("px", ""); // Remove 'px' and convert to number
  let newLeft = parseInt(left, 10); // Convert to integer

  if (newLeft < 360) { // Prevents dodger from going off screen
    dodger.style.left = `${newLeft + 10}px`;
  }
}

// Add an event listener for right arrow key
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});