
function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

Carro.prototype.displayInfo = function() {
    console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`);
}


function SUV(marca, modelo, ano, tracao) {
    Carro.call(this, marca, modelo, ano);
    this.tracao = tracao;
}

SUV.prototype = Object.create(Carro.prototype);
SUV.prototype.constructor = SUV;

SUV.prototype.displayInfo = function() {
    Carro.prototype.displayInfo.call(this);
    console.log(`Tração: ${this.tracao}`);
}


function Sedan(marca, modelo, ano, conforto) {
    Carro.call(this, marca, modelo, ano);
    this.conforto = conforto;
}

Sedan.prototype = Object.create(Carro.prototype);
Sedan.prototype.constructor = Sedan;

Sedan.prototype.displayInfo = function() {
    Carro.prototype.displayInfo.call(this);
    console.log(`Conforto: ${this.conforto}`);
}


function Esportivo(marca, modelo, ano, velocidadeMaxima) {
    Carro.call(this, marca, modelo, ano);
    this.velocidadeMaxima = velocidadeMaxima;
}

Esportivo.prototype = Object.create(Carro.prototype);
Esportivo.prototype.constructor = Esportivo;

Esportivo.prototype.displayInfo = function() {
    Carro.prototype.displayInfo.call(this);
    console.log(`Velocidade Máxima: ${this.velocidadeMaxima} km/h`);
}


const carro1 = new Carro('Toyota', 'Corolla', 2021);
const suv1 = new SUV('Jeep', 'Compass', 2022, '4x4');
const sedan1 = new Sedan('Honda', 'Civic', 2023, 'Alto');
const esportivo1 = new Esportivo('Ferrari', 'F8', 2023, 340);


carro1.displayInfo();
suv1.displayInfo();
sedan1.displayInfo();
esportivo1.displayInfo();
