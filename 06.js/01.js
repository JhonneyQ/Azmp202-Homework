const title = document.querySelector(".title")
const price = document.querySelector(".price")
const description = document.querySelector(".description")
const image = document.querySelector(".image")
const add = document.querySelector(".add")



add.addEventListener("click", ()=>{
    const tit = document.createElement('div');
    tit.classList.add('col-3');

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src= image.value

    const cardbody = document.createElement('div');
    cardbody.classList.add('card-body');

    const cardtitle = document.createElement('h5');
    cardtitle.classList.add('card-title');
    cardtitle.textContent= title.value

    const cardprice = document.createElement('p');
    cardprice.classList.add('card-price');
    cardprice.textContent = price.value

    const carddescription = document.createElement('p');
    carddescription.classList.add('card-text');
    carddescription.textContent = description.value

    const but = document.createElement('a')
    but.classList.add('btn-detail');
    but.textContent = "detail"
    

    const butt = document.createElement('a')
    butt.classList.add('btn-delete');
    butt.textContent = "delete"
    butt.addEventListener("click", () =>{
        card.style.display = "none"
    })

    cardbody.appendChild(cardtitle);
    cardbody.appendChild(cardprice);
    cardbody.appendChild(carddescription);
    cardbody.appendChild(but)
    cardbody.appendChild(butt)
    card.appendChild(img);
    card.appendChild(cardbody);
    tit.appendChild(card);


    document.querySelector(".container").appendChild(tit);
})