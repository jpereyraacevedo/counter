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
        value.style.color = "green"
       }
       if (count < 0 ) {
        value.style.color = "red"
       }
       if (count == 0) {
        value.style.color = "blue"
       }
       value.textContent = count;
    })
})