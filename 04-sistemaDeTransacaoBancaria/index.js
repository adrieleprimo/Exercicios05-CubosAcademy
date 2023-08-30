const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [{
        tipo: "Depósito",
        valor: 10000,
    }, {
        tipo: "Saque",
        valor: 3000
    }     
    ],
    depositar: function(valor){
     this.saldo+=valor;
    this.historicos.push(`tipo: "Depósito",
valor: ${this.saldo}`)
      console.log(`Deposito de $${this.saldo/100} realizado para o cliente: ${this.nome}`);
    },
    sacar: function(valor){
        if(valor > this.saldo){
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        } else{
            this.saldo-=valor;
          console.log (`Saque de R$${valor/100} realizado para o cliente: ${this.nome}`)
        }
    },
    extrato: function(){
        console.log(`Extrato de ${this.nome} - Saldo: ${this.saldo/100}
Histórico:`);
        for(let i = 0; i< this.historicos.length; i ++){
        console.log(`Depósito de R$${this.historicos[i].valor/100}`);
        console.log(`Saque de R$${this.historicos[i+1].valor/100}`);
        break;
    }
        }

}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(3000);
contaBancaria.extrato()
