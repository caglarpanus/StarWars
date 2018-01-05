// ====== Global Variables ====== //

// The character has not been selected yet.
var selectedCharacter = false;

// The enemy has not been selected yet.
var selectedEnemy = false;

//Storing character that the user has chosen.
var character = {};

//To store chosen enemy.
var defender={};

//Number of enemies defeated.
var defeatedEnemies = 0;

//To show if the game is over.
var gameOver = false;

//====Characters and their objects====

var LukeSkywalker = {
    name: "Luke Skywalker",
    health: 150,
    baseAttack: 10,
    attack: 10
};
