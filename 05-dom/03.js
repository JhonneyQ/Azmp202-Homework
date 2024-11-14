const a = document.querySelector(".req1"); 
const b = document.querySelector(".req2"); 
const plus = document.querySelector(".plus");  
const minus = document.querySelector(".minus");  
const divide = document.querySelector(".divide"); 
const multiply = document.querySelector(".multiply"); 
const result = document.querySelector(".result");  




plus.addEventListener("click", () => {
    const a1 = +a.value;
    const b1 = +b.value;
    const c = a1 + b1;
    result.textContent = c;  
});

minus.addEventListener("click", () => {
    const a1 = +a.value;
    const b1 = +b.value;
    const c = a1 - b1;
    result.textContent = c;  
});

divide.addEventListener("click", () => {
    const a1 = +a.value;
    const b1 = +b.value;
    const c = a1 / b1;
    result.textContent = c; 
});

multiply.addEventListener("click", () => {
    const a1 = +a.value;
    const b1 = +b.value;
    const c = a1 * b1;
    result.textContent = c;  
});
