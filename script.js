/*-----------------------------Funcionamento Modais------------------------------*/

function cadastrarProd(){
    let modal = document.querySelector('.modal#modal-produtos');
    modal.style.display = 'flex';
}

function cadastrarClientes(){
    let modal = document.querySelector('.modal#modal-clientes');
    modal.style.display = 'flex';
}

function Voltar(){
    let modal = document.querySelectorAll('.contained-buttons');
    modal.style.display = 'none';
}

/*-----------------------------Salva os dados dos clientes------------------------------*/

const dadosCliente = (() => {
    const fieldValueC = localStorage.getItem('dadosCliente');
    return  fieldValueC === null ? [] : (fieldValueC);
})();

function salvarCliente(){
    let nome = document.querySelector('#nome');
    let cpf = document.querySelector('#cpf');
    let telefone = document.querySelector('#telefone');
    let email = document.querySelector('#email');
    let cep = document.querySelector('#cep');
    let endereço = document.querySelector('#endereço');
    let complemento = document.querySelector('#complemento');
    let cidade = document.querySelector('#cidade');

    let cliente = JSON.stringify({
        Nome: nome.value,
        CPF: cpf.value,
        Telefone: telefone.value,
        Email: email.value,
        CEP: cep.value,
        Endereço: endereço.value,
        Compl: complemento.value,
        Cidade: cidade.value
    });    
    
    dadosCliente.push(cliente);
    localStorage.setItem('dadosCliente', cliente);
    alert('Cliente cadastrado com sucesso!')    
}


/*-----------------------------Salva os dados dos produtos ------------------------------*/

const dadosProduto = (() => {
    const fieldValueP = localStorage.getItem('dadosProduto');
    return fieldValueP === null ? [] : (fieldValueP);
})();

function salvarProd(){
    let produtonome = document.querySelector('#produto');
    let codigo = document.querySelector('#codigo');
    let quantidade = document.querySelector('#quantidade');
    let preço = document.querySelector('#preço')
    let descriçao = document.querySelector('#descriçao')

    let produto = JSON.stringify({
        Produto: produtonome.value,
        Codigo: codigo.value,
        Quantidade: quantidade.value,
        Preço: preço.value,
        Descriçao: descriçao.value
    });

    dadosProduto.push(produto);
    localStorage.setItem('dadosProduto', produto);
    alert('Produto salvo com sucesso!')
}



