//promises
const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);

        }, 2000)
    })
}
somaDoisNumeros(3, 1)
    .then((soma) => console.log(soma))
    .catch((e) => {
        console.log(e)
    })
    .finally(() => {
        console.log('terminou')
    })

const diminuiDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(a - b);

        }, 2000)
    })
}
somaDoisNumeros(5, 1)

//async(transforma em uma promise) -await


let load = document.getElementById('root');

async function login(user, password) {
    try {
        load.innerText = 'carregando...';

        const verificaUser = await new Promise((resolve) => setTimeout(() => {
            if (user == 'andressa') {
                resolve('usuario valido');
            } else {
                throw new Error('usuario invalido');
            }
        }, 3000));
        console.log(verificaUser);
    } catch (e) {
        console.log(e);
    }
}
login('andressa', '1234')