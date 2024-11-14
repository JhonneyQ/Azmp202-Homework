const a = document.querySelector(".reqem1"); 
const b = document.querySelector(".reqem2"); 
const plus = document.querySelector(".plus");  
const minus = document.querySelector(".minus");  
const divide = document.querySelector(".divide"); 
const multiply = document.querySelector(".multiply"); 
const result = document.querySelector(".result");  
const a1 = parseFloat(a.value)
const b1 = parseFloat(b.value)
let c = 0;


plus.addEventListener("click", () => {
    c = a1+b1;
    result.textContent = c;  
});

minus.addEventListener("click", () => {
    c = a1 - b1;
    result.textContent = c;  
});

divide.addEventListener("click", () => {
    c = a1 / b1;
    result.textContent = c; 
});

multiply.addEventListener("click", () => {
    c = a1*b1;
    result.textContent = c;  
});
