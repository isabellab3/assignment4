function handleHover() {
    alert('Hey, I told you not to hover over me!')
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