import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import users from './database/users.json';
console.log(users)

let userList = users.map((user) => `<li>${user.username}</li>`)

document.querySelector('#app').innerHTML = `
  <div>
<h1>Hello DevSearch</h1>
<ul>${userList}</ul>
<input id='search'></input>
<button onClick={handleSearch()}>Buscar</button>
  </div>
`

let search = document.querySelector('#search')

window.handleSearch = () => {
  let userName = users.filter((user) => {
    if (user.username === search.value) {
      return user;
    }
  }
}