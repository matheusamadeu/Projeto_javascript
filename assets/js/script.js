const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");
const modalLogin = document.querySelector("#modal-login");
const modalRegister = document.querySelector("#modal-register");
const btnCancelLogin = document.querySelector("#btn-cancel-login");
const btnCancelRegister = document.querySelector("#btn-cancel-register");
const btnLoginOpen = document.querySelector("#btn-login-open");
const inputEmail = document.querySelector("#email");
const resultado = document.querySelector("#resultado");

function soma(num01, num02) {
    const somar = num01 + num02
    console.log(somar)
}

soma(8, 6)

// arrow function

const multiplicar = (num01, num02) => {
    return num01 * num02
}
console.log(multiplicar(5, 8));

const subtrair = (num01, num02) => {
    return num01 - num02
}
console.log(subtrair(5, 8))

const dividir = (num01, num02) => {
    return num01 / num02
}
console.log(dividir(5, 8))

//Escuta o evento de click
//Executa a função dele
btnLogin.addEventListener("click", (e) => {
    modalLogin.classList.remove("hide-modal");
    modalLogin.classList.add("show-modal");
})

btnRegister.addEventListener("click", (e) => {
    modalRegister.classList.remove("hide-modal");
    modalRegister.classList.add("show-modal");
})

btnCancelLogin.addEventListener("click", (e) => {
    modalLogin.classList.remove("show-modal");
    modalLogin.classList.add("hide-modal");
})

btnCancelRegister.addEventListener("click", (e) => {
    modalRegister.classList.remove("show-modal");
    modalRegister.classList.add("hide-modal");
})

// inputEmail.addEventListener("input", () => {
//     resultado.innerHTML = inputEmail.value
// })

inputEmail.addEventListener("focus", () => {
    inputEmail.style.borderBotton = "0.5rem solid rgb(255, 0, 0)"
})