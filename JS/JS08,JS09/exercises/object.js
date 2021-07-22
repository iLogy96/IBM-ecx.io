let object = {
    'name-id' : 'ivan'
}
console.log(object['name-id'])
//constructor funkcija je način rađenja objekta u kojem s varijablom zadajemo vrijednosti...
function Person (name,surname){
    this.name=name;
    this.surname=surname;
}
var person = new Person ('Luka','Modrić');
console.log(person);
//ili ovako
function Person2 (name,surname){
    const person2 = {}
    person2.name = name;
    person2.surname = surname;  
}
function Animal (kind,age){
    this.kind = kind;
    this. age = age;
}
const animal = new Animal ('Svinja','25')
console.log(animal);