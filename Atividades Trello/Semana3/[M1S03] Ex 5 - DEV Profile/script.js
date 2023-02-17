/* Crie um perfil em HTML/CSS e faça com que ele seja populado com informações obtidas da API do 
seu github.
Você pode mudar o final do endpoint com seu usuário para obter suas informações.
https://api.github.com/users/walberson */

let textError = document.querySelector('#textError')
let userData = document.querySelector('#userData')
let bio = document.querySelector('#bio')
let repo = document.querySelector('#repo')

async function findData() {
    try {
        const response = await fetch('https://api.github.com/users/UrsulaBabeto');
        const data = await response.json();
console.log(data)
        userData.innerText=data.name;
        bio.innerText=data.bio;
        repo.innerText=data.html_url;
    } catch (e) {
        textError.innerText = "Erro"
    }
}

findData()