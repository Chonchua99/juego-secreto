//Interacciones con el HTML usando el Document Object Model (DOM)
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*cuando se selecciona el elemento del HTML se agarra el objeto en si, luego de la seleccionar
    el objeto se puede especificar qué es lo que se quiere tomar de las partes del objeto. 
    En este caso el .value lo que hace es tomar solamente el valor que se ha ingresado dentro de ese objeto*/
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //EL usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor'); 
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor'); 
        }
        intentos++;
        limpiarCaja()
    }
    return;   
}

function limpiarCaja() {
    //el metodo .querySelector es un metodo generico pero en el parrametro se puede especificar como es que quieres 
    //seleccionar el objeto, en este caso el # referencia a que se quiere señalar el objeto mediante su ID 
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);    

    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        
    } else{
        
        //Si el número generado ya está en la lista hacemos X, sino hacemos Y
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //Generar un nuevo número secreto
    //reiniciar el número de intentos 
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}    

condicionesIniciales();



























































































//let numeroSecreto = generarNumeroSecreto();
//let intentos = 0;
//
//
//function asignarTextoElemento(elemento, texto) {
//    let elementoHTML = document.querySelector(elemento);
//    elementoHTML.innerHTML = texto;
//    return;
//}
//
//function verificarIntento() {
//    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//    
//    if (numeroDeUsuario === numeroSecreto) {
//        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
//        document.getElementById('reiniciar').removeAttribute('disabled');
//    } else {
//        //El usuario no acertó.
//        if (numeroDeUsuario > numeroSecreto) {
//            asignarTextoElemento('p','El número secreto es menor');
//        } else {
//            asignarTextoElemento('p','El número secreto es mayor');
//        }
//        intentos++;
//        limpiarCaja();
//    }
//    return;
//}
//
//function limpiarCaja() {
//    document.querySelector('#valorUsuario').value = '';
//}
//
//function generarNumeroSecreto() {
//    return Math.floor(Math.random()*10)+1;
//
//}
//
//function condicionesIniciales() {
//    asignarTextoElemento('h1','Juego del número secreto!');
//    asignarTextoElemento('p',`Indica un número del 1 al 10`);
//    numeroSecreto = generarNumeroSecreto();
//    intentos = 1;
//    console.log(numeroSecreto);
//}
//
//function reiniciarJuego() {
//    //limpiar caja
//    limpiarCaja();
//    //Indicar mensaje de intervalo de números 
//    //Generar el número aleatorio
//    //Inicializar el número intentos
//    condicionesIniciales();
//    //Deshabilitar el botón de nuevo juego
//    document.querySelector('#reiniciar').setAttribute('disabled','true');
//    
//}
//
//condicionesIniciales();

