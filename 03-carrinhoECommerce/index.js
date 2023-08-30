const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function(){
        console.log(`Cliente: ${this.nomeDoCliente}`)
        this.calcularTotalDeItens();
        this.calcularTotalAPagar();
        this.calcularDesconto();
    },
    addProduto: function(){
        for(let i=0; i<carrinho.produtos.length; i++){
          if(this.produtos[i].id=== novaBermuda.id && this.produtos[i].id=== novoTenis.id){
            this.produtos[i].qtd+=novaBermuda.qtd;
            this.produtos[i].qtd+=novoTenis.qtd; 
            break;     
          }  else if (this.produtos[i].id=== novaBermuda.id && this.produtos[i].id!= novoTenis.id){
            this.produtos[i].qtd+=novaBermuda.qtd;
            this.produtos.push(novoTenis);
            break;
          } else if (this.produtos[i].id!= novaBermuda.id && this.produtos[i].id=== novoTenis.id){
            this.produtos[i].qtd+=novoTenis.qtd; 
            this.produtos.push(novaBermuda);
            break;
          } else {
            this.produtos.push(novaBermuda);
            this.produtos.push(novoTenis);
            break;
          }               
        }
             
    },
    imprimirDetalhes: function(){
        for(let i =0; i< carrinho.produtos.length;i++){
            console.log(`Item ${[i+1]} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$${((this.produtos[i].precoUnit*this.produtos[i].qtd)/100)}`);   
        }
        this.calcularTotalDeItens();
        this.calcularTotalAPagar();
        this.calcularDesconto();    
        },
        calcularTotalDeItens: function(){
            for(let i =0; i<carrinho.produtos.length; i++){
                itens+=this.produtos[i].qtd;
            }
            console.log(`Total de itens: ${itens} itens`)
            
        },
        calcularTotalAPagar: function(){
            for(let i =0; i<carrinho.produtos.length; i++){
                soma += this.produtos[i].precoUnit*this.produtos[i].qtd;
            }
            console.log(`Total a pagar: R$${(soma/100).toFixed(2)} `)
        },
        calcularDesconto: function(){
            for(let i = 0; i<carrinho.produtos.length; i++){
                if(itens> 4 && itens <= 5){
                    if(this.produtos[i].precoUnit< menor){
                        menorValorItem = this.produtos[i].precoUnit;
                       soma-=menorValorItem;
                       console.log(`Total a pagar com desconto: R$${(soma/100)}`)
                       break;
                    }

                }else if (soma > 100 && itens >= 6){
                    desconto+=soma*0.1 
                    console.log(`Total a pagar com desconto: R$${(soma-desconto)/100}`)
                    break;
                }
            }
            
            
        }    
    }
let soma = 0;
let itens = 0;
let menorValorItem = 10000000;
let desconto = 0;
carrinho.addProduto(novaBermuda, novoTenis);
carrinho.imprimirResumo()