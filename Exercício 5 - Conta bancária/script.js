class ContaBancaria {

    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo= 0; //o underline serve para deixar a função get/set tenha nome saldo, mas a propriedade não.
    }
    get saldo(){
        return this._saldo;
    }
    
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this.saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{ 
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo ='corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito (){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo ='Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo ='Universitária';
    }

    sacar(valor){
        if(valor > 500) {
            return 'Operação negada. Valor acima de R$500,00'
        }
        this._saldo = this._saldo - valor;
    }
}