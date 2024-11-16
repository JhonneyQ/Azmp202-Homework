import products from "./data.js";
const btn = document.querySelector(".sort")
const Input = document.querySelector(".input");



const tBody = document.querySelector(".tbody")

function drawTable(array) {
    tBody.innerHTML = "";
    array.forEach((product) => {
      const trElem = document.createElement("tr");
      trElem.innerHTML = `
              <td><img src="${product.image}" width="100"/></td>
              <td>${product.id}</td>
              <td>${product.title}</td>
              <td>${product.price}</td>
          `;
  
      tBody.appendChild(trElem);
    });
  
  }
  drawTable(products);
  

  Input.addEventListener("input", function (event) {
  
    const filter = products.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.trim())
    );
  
    drawTable(filter);
  });