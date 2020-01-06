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


/* 

Part 4 

In a Javascript file, write a program which checks the following things:
-checks that the password is 12345678
-if the password is incorrect, send an alert message
-Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.


*/

function checkPwd() {
  let pwd = document.getElementById("password").value;
  let textChange = document.getElementById("textChange");

  if(pwd != 12345678) {
    alert('Wrong password!')
  }
  else {
    textChange.innerHTML = "The information is correct!"
  }
}

