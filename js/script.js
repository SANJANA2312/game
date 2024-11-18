console.log("Is this the real life?");

const makeGrid = () => {
// rows and coloumns 4*5
console.log(`makeGrid is being called`);
const grid = document.getElementById("grid");
for (let i = 1; i <= 20; i++) {
    
    const button = document.createElement("button");
    button.innerText =  i;
    button.addEventListener("click", () => {
        console.log("CLICKED");

        if (fizzbuzz(i) == "fizzbuzz") { 
            button.innerText = "fizzbuzz";
        //button.style.backgroundColor = "#ffff00"; 
        button.className = "fizzbuzz" ;
    }
        if (fizzbuzz(i) == "fizz") { button.innerText = "fizz";
            button.className = "fizz" ;
        }
        if (fizzbuzz(i) == "buzz") { button.innerText = "buzz";
            button.className = "buzz" ;
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
