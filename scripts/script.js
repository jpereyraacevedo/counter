// Contador inicial

let count = 0

// Tomar valores de los botones

let value = document.querySelector("#value")
let buttons = document.querySelectorAll(".btn")


buttons.forEach((btn)=> {
    btn.addEventListener("click", (e)=> {
       let styles =  e.currentTarget.classList;
       if (styles.contains("decrease")) {
        count--;
       } else if (styles.contains("increase")) {
        count++;
       } else {
        count = 0
       }
       if (count > 0 ) {
        value.style.color = "#78D633"
       }
       if (count < 0 ) {
        value.style.color = "#D93229"
       }
       if (count == 0) {
        value.style.color = "#232226"
       }
       value.textContent = count;
    })
})