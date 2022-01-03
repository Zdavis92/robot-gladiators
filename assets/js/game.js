var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's heath is zero or less

var fight = function(enemyName){
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0){

    var promptFight = window.prompt("Would you like to FIGHT or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    // if player picks "skip" confirm and then stop the loop
    if (promptFight ==="skip" || promptFight === "SKIP") {
        // confitm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        //if you (true), leave fight
        if (confirmSkip) {
            window.alert (playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log ("playerMoney", playerMoney)
            break;
        }
    }

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that is worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        // award player money for winning
        playerMoney = playerMoney + 20;
        // leave while() loop since enemy is dead
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of 'enemyAttack from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // call fight function with enemy-robot
    fight(pickedEnemyName);
}
