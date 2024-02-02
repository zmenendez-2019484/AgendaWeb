const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});
function validateLogin() {
    const email = document.querySelector(".input-div.one .input").value;
    const password = document.querySelector(".input-div.pass .input").value;
    const users = [
        { email: 'zmenendez@kinal.com', password: '28102006' },
        { email: 'braulio@kinal.com', password: '1234567' },
    ];

    const matchingUser = users.find((user) => user.email === email && user.password === password);

    if (matchingUser) {
        window.location.href = "assets/pages/Contacto.html";
    } else {
        alert("Invalid email or password");
    }
}