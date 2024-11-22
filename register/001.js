const namee = document.querySelector(".name")
const password = document.querySelector(".password")
const submit = document.querySelector(".submit")
const form = document.querySelector("form")

form.addEventListener("submit", function sub(event) {
    event.preventDefault()

    const all = JSON.parse(localStorage.getItem("students"))

    all.forEach(element => {
        if(namee.value===element.name && password.value===element.password){
            console.log("duzdur")
        }
    });

    this.reset()
})