ls
/* Part 1 */
function right(number) {
  if (number === 1) {
    document.getElementById("right").innerHTML = "I'm right";
  } else {
    document.getElementById("right").innerHTML = "No, I'm right!";
  }
}

/* Part 2 */
function handleHover() {
  alert('Hey, I told you not to hover over me!')
}

// run once document finishes loading
window.onload=function() {
  const text = document.getElementById("text")
  text.addEventListener("mouseover", handleHover, false)     
}

