let amigos = []; // Array para armazenar os nomes

function adicionarAmigo() {
    let input = document.getElementById("nomeAmigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a exibição da lista
    input.value = ""; // Limpa o campo de entrada
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Adiciona o nome como conteúdo do <li>
        lista.appendChild(li); // Adiciona o <li> à lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
