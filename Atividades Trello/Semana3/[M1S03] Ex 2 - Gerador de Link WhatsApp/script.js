/* Crie um gerador de links, onde você passe em dois inputs um telefone e uma mensagem. Seu gerador
deve usar a string a seguir:
api.whatsapp.com/send?phone=SeuNúmero&text=SuaMensagem

e substituir o telefone do input pelo 'SeuNúmero' o input de mensagem por 'suaMensagem' e por 
fim disponibilizar um hiperlink com a string concatenada. Que envie o usuário para o whatsapp 
com o texto.
Relembrando: Para substituir o telefone, modifique o termo "SeuNúmero". Para substituir a 
mensagem, modifique o termo "SuaMensagem" pelo texto que desejar. Como links não permitem 
inserir espaços, troque-os pelo código "%20" (sem aspas), como no exemplo a 
seguir: api.whatsapp.com/send?phone=5511012345678&text=Oi%20Devs */
console.log("teste")
let text = document.querySelector('#text');
let tel = document.querySelector('#tel');

function enviar() {
    let text1 = text.value
    let newText = text1.split(" ")
 
     document.createElement("a");
     location.href = `https://api.whatsapp.com/send/?phone=55${tel.value}&text=%23${newText.join('%20')}`

}