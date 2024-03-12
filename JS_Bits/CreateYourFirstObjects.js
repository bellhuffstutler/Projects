const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0
}

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

//Complete the following program to add the dog object definition.
const dog = {
    name: "Fido",
    species: "Terrier",
    size: "3 ft",
    bark(){
        return "BORK BORK HECC THE POLICE"
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Complete the following program to add the circle object definition. Its radius value is input by the user.
const r = Number(prompt("Enter the circle radius:"));

const circle = {
    circumference() {return 2 * Math.PI * r}, 
    area() {return Math.PI * (r ** 2)} 
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
