/* Ex 2 - [App LoginStart] Criar login
Faça uma página de login que verifique se o login e a senha do usuário batem com um login e senha 
fictício (armazenados em um objeto). A página deve conter inputs e um botão para logar. Após o login, 
se as credenciais baterem com as fictícias deve-se imprimir ‘logado’, senão imprimir ‘credenciais 
incorretas’.

EX 3 - [App LoginStart] 
Utilizar a página de login para criar um sistema de autenticação utilizando 
localstorage. Quando o usuário logar, salvar as credenciais localmente. Se as 
credenciais existirem localmente, ir para uma página com um botão de logout, se 
elas não existirem, ir para a página de login.

EX 4
Faça com que o usuário possa alterar informações da conta, que serão salvas em 
localStorage, como url da imagem de perfil, e-mail e nome.
 */

let id = document.querySelector("#id");
let password = document.querySelector("#password");
let mail = document.querySelector("#email");
let res = document.querySelector("#res");

let identificacao = '';
let senha = '';
let email = '';


//PAGINA DE CADASTRO

let cadastro = document.querySelector("#Cadastrar");

cadastro.addEventListener('click', function () {
  if (id.value == "" || password.value == "") {
    res.innerHTML = "Campo vazio! Tente novamente!";
  } else {
    identificacao = id.value;
    senha = password.value;
    email = mail.value;
    let image = document.createElement("img")
    img = image
    localStorage.setItem('identificacao', identificacao);
    localStorage.setItem('email', email);
    localStorage.setItem('image', img);
    localStorage.setItem('senha', senha);

    location.href = "./AppLoginStart_Login.html"
  }
})

//PAGINA DE LOGIN, 
function btn() {
  let idStorage = localStorage.getItem('identificacao');
  let passwordStorage = localStorage.getItem('senha');

  if (idStorage == id.value && passwordStorage == password.value) {
    location.href = "./AppLoginStart_ContentPage.html"
  } else {
    res.innerHTML = "Usuário ou senha invalidos, tente novamente!";
  }
  if (id.value == "" || password.value == "") {
    let emptyUser = confirm("Campo vazio, gostaria de cadastrar uma senha?")
    if (emptyUser) {
      location.href = "./AppLoginStart_Cadastro.html"
    }
  }
}

//PAGINA DE LOGOUT LIMPANDO DADOS DO LOCALSTORAGE
function out() {
  localStorage.clear()
  location.href = "./AppLoginStart_Cadastro.html"
}


//PAGINA DE ALTERAR DADOS
function alteraDados() {
  location.href = "./AppLoginStart_AlterarDados.html"
  email = mail.value;
  let idStorage = localStorage.getItem('identificacao');
  let passwordStorage = localStorage.getItem('senha');
  let emailStorage = localStorage.getItem('email');
  let imageStorage = localStorage.getItem('img');
  localStorage.setItem(idStorage, identificacao);
  localStorage.setItem(passwordStorage, senha);
  localStorage.setItem(emailStorage, email);
  localStorage.setItem(imageStorage, img);
}

//ALTERA IMAGEM

const inputImg = document.querySelector("#inputImg");
const avatar = document.querySelector("#avatar");
const changePhoto = document.querySelector("#changePhoto");

avatar.addEventListener("click", () => {
  inputImg.click()
})

changePhoto.addEventListener("click", function () {
  let reader = new FileReader(); //instancia o objeto FileReader que é necessário para o upload. 
  reader.readAsDataURL(inputImg.files[0]); // Pega o arquivo armazenado pelo input e transforma em URL 
  reader.onload = function () {
  avatar.src = reader.result; //Faz o carregamento e Atribui o resultado do reader no profileImage(IMG) 
  };
})