const base_url = "https://fakestoreapi.com"
const cards = document.querySelector(".cards")
const spinner = document.querySelector(".loader");

function getdata(endpoint) {
    fetch(`${base_url}/${endpoint}`)
        .then((res) => res.json())

        .then((data) => {
            drawcards(data)
        })
        .finally(()=>{
            spinner.classList.add("d-none");
        })
}


function drawcards(card){
    cards.innerHTML = ""
    card.forEach(element => {
        const cardDiv = document.createElement("div")
        const par = document.createElement("div")
        const address = document.createElement("p")
        const city = document.createElement("p")
        const btn = document.createElement("button")
        const btn2 = document.createElement("button")

        cardDiv.className="card"
        par.className="par"
        address.className="name"
        city.className="title"
        btn.className="delete"
        btn2.className="details"

        address.textContent=element.email
        city.textContent=element.password
        btn.textContent="delete"
        btn2.textContent="details"

        btn.addEventListener("click", () => {
            deleteUser(element.id, cardDiv);
        });
        btn2.addEventListener("click", () => {
            showDetails(element);
        });


        par.append(city, address,)
        cardDiv.append(par,btn,btn2)
        cards.append(cardDiv)

        
    });

}

function deleteUser(userId, cardDiv) {
    fetch(`${base_url}/users/${userId}`, {
        method: "DELETE",
    })
        .then((res) => {
            if (res.ok) {
                cardDiv.remove();
            }
        })
        .catch((err) => console.error("Error:", err));
}

function showDetails(user) {
    alert(`
        Name: ${user.username} 
        Email: ${user.email}
        password: ${user.password}
        Phone: ${user.phone}
    `);
}



getdata("users")
