//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let lista = [];


function adicionarAmigo() {


    let input = document.querySelector('input')
    let amigo = input.value;

    if (amigo != " ") {

        lista.push(amigo);


        let ul = document.querySelector('#listaAmigos');
        let li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);

    }



}

function sortearAmigo() {

    let indiceAleatório = Math.floor(Math.random() * lista.length);
    let nome = lista[indiceAleatório];

    let ul = document.querySelector('#resultado');
    let li = document.createElement('li');
    li.textContent = `O nome sorteado foi: ${nome}`;

    limparLista();

    ul.appendChild(li);
}


function limparLista() {
    lista = [];
    document.querySelector('#listaAmigos').innerHTML = ""; 

}
