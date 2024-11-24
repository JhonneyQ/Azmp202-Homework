const base_url = "http://localhost:3000/"

function getdata(endpoint){
    fetch(`${base_url}${endpoint}`)
    .then((res)=> res.json())
    .then((data)=>{
        draw(data)
    })
}



function draw(endpoint1) {
    console.log(endpoint1)
}
let a = 0
for (let index = 0; index < 10; index++) {
    a ++
    getdata(a)
}

