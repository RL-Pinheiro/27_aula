const listaDeEstudante = [
    "beatriz oliveira",
    "carlos eduardo",
    "daniel santos",
    "gabriel ferreira",
    "helena rodrigues",
    "lucas vinicios"
];
 
const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");
 
function exibirListaAutomaticamente() {
    elementoLista.innerHTML = "";
 
    for (let i = 0; i < listaDeEstudante.length; i++) {
        const itemLi = document.createElement("li");
        itemLi.className = "item-nome";
 
        itemLi.innerHTML = `
<span>${listaDeEstudante[i]}</span>
<span class="posicao-tag">#${i + 1}</span>
        `;
 
        elementoLista.appendChild(itemLi);
    }
 
    elementoContador.innerText =
        `total exibido: ${listaDeEstudante.length} estudantes cadastrados.`;
 
    elementoContador.style.color = "#16a34a";
 
    console.log("lista exibida com sucesso.");
}
 
function limparLista() {
    elementoLista.innerHTML = "";
    elementoContador.innerText = "lista limpa pelo usuario. nenhum nome na tela.";
    elementoContador.style.color = "#475569";
 
    console.log("tela limpa");
}
 
function adicionarNovoNome() {
    let campo = document.getElementById("campoNovoNome");
    let nome = campo.value;
 
    if (nome.trim() === "") {
        alert("digite um nome!");
        campo.focus();
        return;
    }
 
    listaDeEstudante.push(nome.trim());
 
    exibirListaAutomaticamente();
 
    campo.value = "";
    campo.select();
}
 
exibirListaAutomaticamente();