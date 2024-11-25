// identifica o elemento com o id "display"
const display = document.querySelector("#display");
// identifica todos os botões
const buttons = document.querySelectorAll("button");

// Função para cada botão
buttons.forEach((boton) => {
    // Cria função no botão ao ser clicado
    boton.addEventListener("click", () => {

        // Cria condições com if & else

        // Calcula o cálculo dentro da caixa de texto se o botão clicado tiver o id "="
        if (boton.id === "=") {
            display.value = eval(display.value);

            // Apaga a caixa de texto se o botão clicado tiver o id "ac"
        } else if (boton.id === "ac") {
            display.value = "";

            // Apaga o ultimo caracter da caixa de texto se o botão clicado tiver o id "del"
        } else if (boton.id === "del") {
            display.value = display.value.slice(0, -1);

            // Verifica se o botão dark Mode para não mexer na calculadora e trocar modo escuro
        } else if (boton.id === "botaoDarkMode") {
            document.body.classList.toggle('dark-mode');
        }

        // Se não for nenhuma das condições acima, aparece o caracter que está no id do botão clicado
        else {
            display.value += boton.id;
        }

    })
})

