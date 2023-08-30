const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function (){
        if(this.ligado === true){
            console.log("Este carro já está ligado");
        } else{
            this.ligado  = true;
        }    
        
    }, 
    desligar: function(){
        if(this.ligado != true){
           console.log("Este carro já está desligado");
        } else{
           this.ligado = false
        }
        
    },
    acelerar: function(){
        if(this.ligado != true){
            console.log("Não é possivel acelerar um carro desligado.");
        } else{
             this.velocidade += 10;
        }
        ;
    },
    desacelerar: function(){
        if(this.ligado != true){
           console.log("Não é possivel desacelerar um carro desligado.");
        } else {
            this.velocidade -= 10;
        }
        
    },
    alteracao: function() {
            if(this.ligado === true && this.velocidade > 0){
                console.log(`Carro ligado. Velocidade: ${this.velocidade}`)
            } else {
                this.ligado = false
                console.log(`Carro desligado. Velocidade: 0`)
            }
    }
};
carro.desligar();
carro.ligar()
carro.alteracao();
carro.ligar();
carro.acelerar();
carro.alteracao();
carro.acelerar();
carro.alteracao();
carro.desacelerar();
carro.alteracao();
carro.desacelerar();
carro.alteracao();
carro.acelerar();
carro.desacelerar();