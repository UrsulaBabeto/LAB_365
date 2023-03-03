/* O seu Manoel gostou do último aplicativo e agora quer inovar.

Ele quer que você construa a aplicação utilizando orientação a objetos.

Construa uma classe chamada CaixaRegistradora
Defina um atributo que armazene vários produtos no estoque contendo os seguintes campos: */
let clientTab = 0;
let totalTab = 0;
let total;
class CaixaRegistradora {
    dados = [{}];

    constructor(codigoBarra, preco, nome) {
        this.dados["codigoBarra"] = codigoBarra;
        this.dados["preco"] = preco;
        this.dados['nome'] = nome;
    }

    /* Defina um método no qual o seu Manoel consiga adicionar novos produtos no estoque. Esse método recebe os 
    mesmos campos do produto, e todos eles são obrigatórios. */
    addProducts(codigoBarra, preco, nome, quantidade) {
        if (codigoBarra && preco && nome && quantidade) {
            this.dados.push({
                codigoBarra,
                preco,
                nome,
                quantidade,
            })
        }
    }

    /* Defina um método que inicie o atendimento ao cliente, você deve passar o nome do cliente para iniciar. */
    openTab(client) {
        this.client = client;
    }

    /* Defina um método que receba codigoBarra: number; e quantidade: number; para o seu Manoel conseguir adicionar
     itens na caixa registradora.**Importante: A aplicação só poderá adicionar itens na caixa, se o código de barra dele existir.   */
    readProduct(codBarra, quantidade) {
        this.dados.filter((e) => {
            if (e.codigoBarra == codBarra) {
                total = e.preco * quantidade;
                totalTab += total
            }
        })
        return totalTab
    }

    /* Defina um método que você consiga verificar o valor total da conta do cliente. */
    total() {
        return totalTab
    }

    /* Defina um método fecharConta, no qual você passa o dinheiro e ele calcula o troco e zera a caixa registradora.*/
    closeTab() {
        let pgto = prompt('Valor para pagamento:')
        if (pgto >= 0 && pgto >= totalTab) {
            let troco = pgto - totalTab;
            alert(`${this.client}\n\n
                 Total: R$${totalTab}\n
                      Pagamento: R$${pgto}\n
                      Troco: R$${troco}`)
            this.totalTab = 0;
            this.client = '';
        } else {
            alert('Operação invalida')
        }
    }
}



let produto = new CaixaRegistradora(3333, 400, 'pc', 15)
produto.addProducts(1111, 25, 'disquete', 10)
produto.addProducts(2222, 10, 'dvd', 5)
produto.addProducts(1234, 30, "mouse", 4)
produto.openTab("Joao")


console.log(produto);
console.log(produto.readProduct(1111, 2));
console.log(produto.readProduct(2222, 1));
console.log(produto.readProduct(1234, 1));
console.log(produto.closeTab());