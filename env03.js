// declaring an array with the name Planets
let Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn" , "Uranus", "Neptune"];

// declaring an object with name ancientLife
let ancientLife = {
    type: "extremophiles",
    bioma: ["volcanic", "aquatic", "silicon",],
};

let megaSentence;

megaSentence = "<p3>The celestial bodies that I am interested in are those that may contain traces of life: " + Planets[3] + ", " + Planets[5] + ", "+ Planets[6] + ". </p3>";

megaSentence = megaSentence + "<p4>The most intriguing ones are: " + ancientLife.type + " that are " + ancientLife.bioma[1] + "</p4>";

$("#output").html(megaSentence);