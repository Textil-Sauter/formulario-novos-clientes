let cep = document.querySelector('#cep');
let logradouro = document.querySelector('#logradouro');
let complemento = document.querySelector('#complemento');
let bairro = document.querySelector('#bairro');
let localidade = document.querySelector('#localidade');
let estado = document.querySelector('#estado');



cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(resposta) {
    if("erro" in resposta){
        alert('CEP não encontrado');
        return;
    }
    logradouro.value = resposta.logradouro;
    complemento.value = resposta.complemento;
    bairro.value = resposta.bairro;
    localidade.value = resposta.localidade;
    estado.value = resposta.uf;
}
