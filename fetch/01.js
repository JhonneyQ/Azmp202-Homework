const base_url = "https://fakestoreapi.com"
const cards = document.querySelector(".cards")

function getdata(endpoint) {
    fetch(`${base_url}/${endpoint}`)
        .then((res) => res.json())

        .then((data) => {
            drawcards(data)
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

        cardDiv.className="card"
        par.className="par"
        address.className="name"
        city.className="title"
        btn.className="delete"

        address.textContent=element.email
        city.textContent=element.password
        btn.textContent="delete"

        btn.addEventListener("click", () => {
            deleteUser(element.id, cardDiv);
        });

        par.append(city, address,)
        cardDiv.append(par,btn)
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

getdata("users")
