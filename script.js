// script.js
function copiarAlPortapapeles() {
    // Crear un elemento de texto temporal
    var texto = document.createElement('textarea');
    texto.value = 'juankamilo739@gmail.com';
    document.body.appendChild(texto);
    texto.select();
    document.execCommand('copy');
    document.body.removeChild(texto);
    alert('Dirección de correo copiada al portapapeles');
}
