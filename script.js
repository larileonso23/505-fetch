  
// let cep = document.querySelector("#cep");
// let rua = document.querySelector("#rua");
// let complemento = document.querySelector("#complemento");
// let bairro = document.querySelector("#bairro");
// let cidade = document.querySelector("#cidade");
// let uf = document.querySelector("#uf");
// let botao = document.querySelector("button");

// consultarCep = () => {
//     fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
//         .then(function(result){
//             return result.json();
//         })
//         .then(function(data){
//             rua.value = data.logradouro;
//             complemento.value = data.complemento;
//             bairro.value = data.bairro;
//             cidade.value = data.localidade;
//             uf.value = data.uf;
//             cep.disabled = true;
//         })
// }

// botao.onclick = consultarCep;

let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto = document.querySelector("h1");

pesquisarPersonagem = () =>{
    fetch(`https://swapi.co/api/people/${caixaTexto.value}`)
        .then(function(result){
            return result.json()
        })
        .then(function(data){
            texto.innerHTML = data.name;
        })
}

botao.onclick = pesquisarPersonagem;