const btn = document.querySelector(".icon");
const Email = document.querySelector(".Email");
const formBox = document.querySelector(".form-box");
const heroBox = document.querySelector(".hero-box");
const alert = document.querySelector(".alert");
// const alert = document.createElement("p");
// const alerttext = document.createTextNode("Please provide a valid email");

btn.addEventListener("click", () => {
    // let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(regex.test(Email.value) === false){
        btn.style.backgroundColor =  "hsl(0, 93%, 68%, 0.3)";        ;
        formBox.style.border = "1px solid hsl(0, 93%, 68%)";
        btn.style.boxShadow ="1px 10px 20px 8px hsl(0, 36%, 70%,0.5)"
        formBox.classList.add("error_input");
        alert.innerHTML = "Please provide a valid email";
        // heroBox.appendChild(alert); we use this to place the newly added element as child of herobox
    }
});


// for including specific domain this is an example of edu
// let regex = new RegExp('[a-z0-9]+@[a-z]+\.edu\.[a-z]{2,3}');