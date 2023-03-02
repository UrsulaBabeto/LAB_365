/* Utilize a API abaixo para buscar um json e criar um cartão com as informações de um usuário do 
Ricky and Morty.
Onde você vê o número um, pode mudar para qualquer número até 800 que vai buscar um personagem 
diferente.
https://rickandmortyapi.com/api/character/1 */
let user = document.querySelector('.user')
let img = document.querySelector('#img')

async function rickAndMortyApi() {
    try {

        const response = await fetch('https://rickandmortyapi.com/api/character/11')
        const data = await response.json()
        console.log(data)

        user.innerHTML = `
 <b>Name:</b> ${data.name}<br>
 <b>Gender:</b> ${data.gender}<br>
 <b>Specie:</b> ${data.species}<br>
 <b>Status:</b> ${data.status}<br>
 <b>Origin:</b> ${data.origin.name}<br> 
 `
 img.src = data.image 
    }
    catch (e) {

    }
}
rickAndMortyApi()

