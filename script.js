// Definir variables 
const botonEncriptar = document.getElementById('button_encrypt');
const botonDesencriptar = document.getElementById('button_decrypt');
const botonCopiar = document.getElementById('button_copiar');
const textoEntrada = document.getElementById('input_text_encrypt');
const textoSalida = document.getElementById('output_text_decrypt');

// Encriptar el mensaje
function encriptarMensaje() {
    const texto = textoEntrada.value;
    
    const textoEncriptado = texto.split('').reverse().join(''); 
    textoSalida.value = textoEncriptado;
}

// Desencriptar el mensaje
function desencriptarMensaje() {
    const texto = textoSalida.value;
    const textoDesencriptado = texto.split('').reverse().join(''); 
    textoEntrada.value = textoDesencriptado;
}

// Función para copiar el mensaje
function copiarMensaje() {
    textoSalida.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

// Asignar eventos a botones
botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;
