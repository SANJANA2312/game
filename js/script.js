console.log("Is this the real life?");


const end = 20;
let score = 0;

const makeGrid = () => {
// rows and coloumns 4*5
console.log(`makeGrid is being called`);
const grid = document.getElementById("grid");
for (let i = 1; i <= end; i++) {
    
    const button = document.createElement("button");
    button.innerText =  i;
    button.addEventListener("click", () => {
        console.log("CLICKED");

        if (fizzbuzz(i) == "fizzbuzz") { 
            button.innerText = "fizzbuzz";
        //button.style.backgroundColor = "#ffff00"; 
        button.className = "fizzbuzz" ;
        score++;
    }
        if (fizzbuzz(i) == "fizz") { button.innerText = "fizz";
            button.className = "fizz" ;
            score++;
        }
        if (fizzbuzz(i) == "buzz") { button.innerText = "buzz";
            button.className = "buzz" ;
            score++;
        }
        /*
        if (fizzbuzz(i) != "fizz" || fizzbuzz(i) != "buzz" || fizzbuzz(i) !="fizzbuzz") {
            score--;
        } else {
            score++;
        } */
        button.disabled = true;
        console.log(score);
        if (score >= 9) {
            alert(`YOU WIN!`);
        }
     });
    
    grid.appendChild(button);
   
       }
  
    }
    const fizzbuzz = (num) => {
        if (num % 3 === 0 && num % 5 === 0) {  return "fizzbuzz"; }
        if (num % 3 === 0) { return "fizz"; }
        if (num % 5 === 0) { return "buzz"; }
        
    }
   
  

makeGrid();
