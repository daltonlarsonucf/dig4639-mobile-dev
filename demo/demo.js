class Pet {
    constructor(props) {
        this.props = props;
    }
    getName() {
        return this.props.name;
    }
    getSpecies() {
        return this.props.species;
    }
    getSpeech() {
        return "I make this sound: ";
    }
    getIdentity = () => {
        return console.log(this);
    }
}

class Cat extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "cat";
    }
    getSpeech() {
        return super.getSpeech() + "Meow";
    }
}

class Dog extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "dog";
    }
    getSpeech() {
        return super.getSpeech() + "Bark";
    }
}

function sayName(pet) {
    console.log(`My name is ${pet.getName()} and I am a ${pet.getSpecies()}`);
    console.log(`${pet.getSpeech()}`);
}

var myCat = new Cat({name:"Luna"});
sayName(myCat);
myCat.getIdentity();
var myDog = new Dog({name:"Fido"});
sayName(myDog);
myDog.getIdentity();