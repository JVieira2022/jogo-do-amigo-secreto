let amigos = [];

function adicionar(){
   
    let nome = document.getElementById('nome-amigo');
    let repetido = nome.value.trim();
    if(nome.value == ''){
        alert('digite o nome do amigo');
        return;
   
    }
    let nomeNormalizado = repetido.toUpperCase();

    let existe = amigos.some(a => a.toUpperCase() === nomeNormalizado);

     if (existe) {
        alert('nome já adicionado!');
        return;
    }

    // adiciona apenas uma vez
    amigos.push(repetido);


    let lista = document.getElementById('lista-amigos');
    amigos.push(nome.value);
    
    if (lista.textContent == '') {
    lista.textContent = nome.value;
} else {
    lista.textContent = lista.textContent + ', ' + nome.value;
}
    nome.value = "";
}
function sortear() {
    if(amigos.length < 4){
        alert('digite pelo menos 4 amigos');
        return;
    }
   embaralhar(amigos);
  let sorteio = document.getElementById('lista-sorteio');
for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
    }
}
    }
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

