
  function updateOppositeColor() {
    // Obter o elemento de entrada de cor original
    var originalColorInput = document.getElementById("originalColor");

    // Obter o valor da cor original
    var originalColor = originalColorInput.value;

    // Calcular a cor oposta invertendo os valores RGB
    var oppositeColor = invertColor(originalColor);

    // Obter o elemento de entrada de cor oposta
    var oppositeColorInput = document.getElementById("oppositeColor");

    // Definir o valor da cor oposta no input
    oppositeColorInput.value = oppositeColor;

    // Exibir os códigos RGB e hexadecimais abaixo de cada cor
    displayColorInformation(originalColor, "original");
    displayColorInformation(oppositeColor, "opposite");
  }

  function invertColor(hex) {
    // Remover o caractere '#' do início, se existir
    hex = hex.replace(/^#/, '');

    // Converter o valor hexadecimal para um número inteiro
    var num = parseInt(hex, 16);

    // Calcular a inversão dos componentes RGB
    var invertedColor = '#' + (0xFFFFFF ^ num).toString(16).padStart(6, '0');

    // Retornar a cor invertida
    return invertedColor;
  }

  function displayColorInformation(color, type) {
    // Obter os elementos para exibir informações
    var rgbElement = document.getElementById(type + "Rgb");
    var hexElement = document.getElementById(type + "Hex");

    // Obter os componentes RGB
    var rgb = color.match(/\w\w/g).map(function (c) {
        return parseInt(c, 16);
    });

    // Exibir os códigos RGB e hexadecimais
    rgbElement.textContent = "RGB: " + rgb.join(", ");
    hexElement.textContent = "Hex: " + color.toUpperCase();
  }
