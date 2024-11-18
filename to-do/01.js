const input = document.querySelector(".input");
const add = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");
const filter = document.querySelector(".filter")

add.disabled = true;

input.addEventListener("input", () => {
    if (input.value.trim() === "") {
        add.disabled = true;
    } else {
        add.disabled = false;
    }
});

add.addEventListener("click", () => {
    const div = document.createElement("div");
    const par = document.createElement("p");
    const radio = document.createElement("input")
    const butdel = document.createElement("button");
    const change = document.createElement("button");


    div.style.display = "flex";
    div.style.gap = "15px";
    div.classList.add("task");

    radio.setAttribute("type", "checkbox")
    radio.setAttribute("name", "task");


    par.textContent = input.value;
    butdel.textContent = "Delete";
    change.textContent = "change";

  
    div.appendChild(par);
    div.appendChild(radio);
    div.appendChild(butdel);
    div.appendChild(change)
    

    todoList.appendChild(div);

    butdel.addEventListener("click", () => {
        todoList.removeChild(div);
    });

    change.addEventListener("click", ()=>{
        const npar = prompt("new paragraph")
        par.textContent = npar
    })


    input.value = "";
    add.disabled = true;
});

let filterActive = false;

filter.addEventListener("click", () => {
    filterActive = !filterActive; 
    const tasks = document.querySelectorAll(".task");

    tasks.forEach((task) => {
        const checkbox = task.querySelector("input[type='checkbox']");
        if (filterActive) {
            task.style.display = checkbox.checked ? "flex" : "none";
        } else {
            task.style.display = "flex";
        }
    });

    filter.textContent = filterActive ? "Show All" : "Filter Checked";
});