function conversao(valor1, valor2) {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    return { num1, num2 };
}

// inicializacao dos dados
function init() {
    const valor1 = document.getElementById("num1").value;
    const valor2 = document.getElementById("num2").value;
    const resultado = document.getElementById("resultado");

    const { num1, num2 } = conversao(valor1, valor2)

    return { num1, num2, resultado };
}

function somar() {
    document.getElementById("operador").textContent = "+";

    const { num1, num2, resultado } = init();
    resultado.value = num1 + num2;
}
function sub() {
    document.getElementById("operador").textContent = "-";

    const { num1, num2, resultado } = init();
    resultado.value = num1 - num2;
}
function mult() {
    document.getElementById("operador").textContent = "x";

    const { num1, num2, resultado } = init();
    resultado.value = num1 * num2;
}
function div() {
    document.getElementById("operador").textContent = "/";

    const { num1, num2, resultado } = init();
    resultado.value = num1 / num2;
}

function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("operador").textContent = "";
}

//
