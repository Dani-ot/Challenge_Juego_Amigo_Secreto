let amigo = [];

function agregarAmigo() {
 let inputAmigo = document.getElementById("amigo");
 let nombreAmigo = inputAmigo.value;
 
 if (nombreAmigo === ""){
    alert("Debes ingresar un nombre, por favor:");
    return;
 }  

 if (amigo.includes(nombreAmigo)) {
   alert( `Este nombre ${nombreAmigo}, ya está en la lista.`);
   return;
 }

 amigo.push(nombreAmigo);
 inputAmigo.value = "";
 inputAmigo.focus();
 actualizarAmigos();
}

function actualizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i <amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if(amigo.length === 0){
        alert("No ha ingresado amigos para sortear. Debe haber al menos 2 amigos ingresados para realizar el sorteo");
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

}

