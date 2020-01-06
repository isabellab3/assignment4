function handleHover() {
  alert('Hey, I told you not to hover over me!')
}

function right(number) {
  if (number === 1) {
    document.getElementById("right").innerHTML = "I'm right";
  } else {
    document.getElementById("right").innerHTML = "No, I'm right!";
  }
}

// run once document has finished loading
window.onload=function() {
  const text = document.getElementById("text")
  text.addEventListener("mouseover", handleHover, false)     
}



/* 


function addRow() {
    // access main grid
    let mainGrid = document.getElementById("main-grid")
    // create new row to populate
    let newRow = document.createElement("tr")
    
    // populate new row with squares/cells
    for (let i=0; i < numCols; i++) {
        let cell = document.createElement("td")
        newRow.appendChild(cell)
    }

    // append new element to dom
    mainGrid.appendChild(newRow)
    numRows++
}



*/