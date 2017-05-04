function Pokemon(nombre, color, poderDeAtaque) {
    this.nombre = nombre;
    this.color = color;

    this.nivelDeAmistad = 0;

    this.vida = 100
    this.poderDeAtaque = poderDeAtaque;

    this.mostrarPokemon = function() {
        return ('Hola, soy: ' + this.nombre + ' y soy de color: ' + this.color);
    }
    this.aumentarAmistad = function(valor) {
        this.nivelDeAmistad = this.nivelDeAmistad + valor
    }
    this.atacar = function(pokemon) {
        pokemon.vida = pokemon.vida - this.poderDeAtaque
    }
}

const Pikachu = new Pokemon('Pikachu', 'amarillo', 100);
const Charmander = new Pokemon('Charmander', 'rojo', 20);
const Magicarp = new Pokemon('Magicarp', 'naranja', 396);
const Jigglipuff = new Jigglipuff('Jigglipuff', 'rosa', 240);
const Puggicorn = new Puggicorn('Puggicorn', 'bayo', 5000);
Pikachu.atacar(Charmander);

console.log(Charmander.vida);

Charmander.aumentarAmistad(10);

console.log(Charmander.nivelDeAmistad);