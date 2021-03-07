// Variáveis de Escopo Global
var num1 = "";
var num2 = "";
var operador = "";

function pegarValorTecla(valor) {
    // Reproduz o som da tecla
    play();
    console.log("1. pegarValorTecla: " + valor);

    // Verifica se o Operador tem valor
    if (operador == "") {
        num1 = num1 + valor;
        //num1 += valor; // o mesmo que o de cima
        atualizarDisplay(num1);
        console.log("1.1 IF: operador vazio");
    
    } else {
        num2 = num2 + valor;
        atualizarDisplay(num2);
        console.log("1.2 ELSE: operador atribuído");
    }
}

function pegarOperador(sinal) {
    play();
    console.log("2. pegarOperador");

    // Verifica se o primeiro valor foi informado
    if (num1 != "") { // SE o num1 for diferente de vazio

        console.log("2.1. IF: num1 atribuído");

        // Se o segundo valor NÃO foi informado
        if (num2 == "") {
            operador = sinal;
            atualizarDisplay(num1 + sinal);
            console.log("2.1.1. IF: num2 em branco");
        
        } else {
            console.log("2.1.2. ELSE: calcular");

            // Faz o cálculo
            calcular();
        }
    } else {
        console.log("2.2. ELSE: num1 em branco");
    }
}

function calcular() {
    // Altera de , para .
    num1 = num1.replace(",", ".");
    num2 = num2.replace(",", ".");

    //console.log("Valor do num1: " + num1);

    // Converte os valores para float (decimal)
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    console.log("3. calcular: " + num1);

    // Guarda o resultado
    var resultado = "";

    // Verifica o Sinal informado
    if (operador == "+") {
        resultado = num1 + num2;
    
    } else if (operador == "-") {
        resultado = num1 - num2;
    
    } else if (operador == "*") {
        resultado = num1 * num2;
    
    } else if (operador == "/") {
        resultado = num1 / num2;
    
    } else if (operador == "%") {
        //resultado = num1 - num2;
    }

    // Limpa o conteúdo das variáveis e atualiza o display
    limpar()
    console.log("Valor do resultado: " + resultado);
    //resultado = resultado.toFixed(2);
    //atualizarDisplay(resultado)

    //atualizarDisplay(resultado.toFixed(2))

    atualizarDisplay(resultado.toFixed(2).replace(".", ","));

    //atualizarDisplay(resultado.toString());
    //atualizarDisplay("" + resultado); // Usando uma Gambiarra
}

// Tecla Igual
function verificarTeclaIgual() {
    play();

    console.log("4. verificarTeclaIgual");

    // Verifica se TODOS os campos foram preenchidos
    if (num2 != "") {
        console.log("4.1. IF: campos foram preenchidos");
        calcular();
    }

    // Verifica se TODOS os campos foram preenchidos
    /*if (num1 != "" && num2 != "" && operador != "") {
        console.log("4.1. IF: campos foram preenchidos");
        calcular();
    }*/

    // Verifica se TODOS os campos foram preenchidos
    /*if (num1 != "") {
        console.log("4.1. IF: num1");
        if (num2 != "") {
            console.log("4.2. IF: num2");
            if (operador != "") {
                console.log("4.3. IF: operador");
                calcular();
            }
        }
    }*/
}

// Atualiza o Display
function atualizarDisplay(valor) {
    //valor = valor.replace(".", ",");

    document.getElementById('display').innerHTML = valor;
}

// Limpar
function limpar() {
    play();
    num1 = "";
    num2 = "";
    operador = "";
    atualizarDisplay("0");
}

// Reproduz o som da tecla
function play() {
    var blip = document.getElementById('blip');

    blip.volume = 1;
    blip.play();
}

// Exemplo de Estrutura Condicional IF ELSE (SE SENÃO)
/*function verificarIdade() {
    var idade = document.getElementById('idade').value;

    // Verifica se a idade é maior ou igual a 18
    //SE (CONDIÇÃO for Verdadeira) FAÇA
        // Mostre("Texto 1")
    
    //SENÃO FAÇA
        // Mostre("Texto 2")
    //FIM SE

    if (idade >= 18) {
        alert("Maior");
    
    } else {
        alert("Menor");
    }
}*/