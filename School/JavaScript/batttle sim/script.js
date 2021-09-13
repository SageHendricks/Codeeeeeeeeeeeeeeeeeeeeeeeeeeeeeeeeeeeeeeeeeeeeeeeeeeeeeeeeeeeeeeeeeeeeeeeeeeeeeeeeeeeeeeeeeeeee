var randomRoll = 0;
var accuracyRoll = 0;
var evationRoll = 0;
var criticalRoll = 0;
var master = [];

var enemies = [
	{
		name: "Push Mower",
		type: "Machine",
		specialAbility: "Mow",
		hp: 69,
		atk: 69,
		evation: 5,
		accuracy: 12,
	},
	{
		name: "Riding Mower",
		type: "Machine",
		specialAbility: "Mow",
		hp: 101,
		atk: 91,
		evation: 4,
		accuracy: 12,
	},
	{
		name: "Large Tractor",
		type: "Machine",
		specialAbility: "Plow",
		hp: 221,
		atk: 42,
		evation: 2,
		accuracy: 13,
	},
	{
		name: "Blade of Grass",
		type: "Plant",
		specialAbility: "Cut",
		hp: 2,
		atk: 5,
		evation: 19,
		accuracy: 19,
	},
	{
		name: "Test Dumby",
		type: "Dumby",
		specialAbility: "Exsist",
		hp: 1000,
		atk: 10,
		evation: 10,
		accuracy: 10,
	},
	{
		name: "Semi",
		type: "Machine",
		specialAbility: "Plow",
		hp: 1000,
		atk: 300,
		evation: 1,
		accuracy: 17,
	},
];

var players = [
	{
		name: "Dizzy Dave",
		type: "GOD",
		specialAbility: "Exodia",
		hp: 500,
		atk: 500,
		evation: 1,
		accuracy: 1,
	},
	{
		name: "Salem",
		type: "Human",
		specialAbility: "Rage",
		hp: 40,
		atk: 68,
		evation: 14,
		accuracy: 15,
	},
	{
		name: "Small Child",
		type: "Human",
		specialAbility: "Tantrum",
		hp: 21,
		atk: 10,
		evation: 15,
		accuracy: 9,
	},
];

function role(number) {
	randomRoll = (Math.random() * number) | 0;
}

function start() {
	master = [];

	p = document.getElementById("playerNumber").value;
	e = document.getElementById("enemyNumber").value;

	//wind OP
	role(100);
	windSpeed = randomRoll;
	if (windSpeed >= 85) {
		enemies[4].evation = 20;
		master.push("It is a particularly windy day today,,");
	}

	battle(p, e);
}

function battle(p, e) {
	//if hp 0 either oponent, stop
	if (!(enemies[e].hp <= 0) && !(players[p].hp <= 0)) {
		//enemy hit role + dodge rolls
		role(20);
		accuracyRoll = randomRoll;
		role(20);
		evationRoll = randomRoll;
		if (
			accuracyRoll <= players[p].accuracy &&
			evationRoll >= enemies[e].evation
		) {
			//critical hits
			role(100);
			criticalRoll = randomRoll;
			if (!(criticalRoll >= 85)) {
				//damage
				enemies[e].hp = enemies[e].hp - players[p].atk;

				//if hit point below 0 hitpoint equal 0
				if (enemies[e].hp < 0) {
					enemies[e].hp = 0;
				}

				//push array
				master.push(
					players[p].name +
					" hits for " +
					players[p].atk +
					" damage. <br>" +
					enemies[e].name +
					" health is now " +
					enemies[e].hp +
					" hitpoints"
				);
			} else if (criticalRoll >= 85) {
				enemies[e].hp = enemies[e].hp - 2 * players[p].atk;

				//if hit point below 0 hitpoint equal 0
				if (enemies[e].hp < 0) {
					enemies[e].hp = 0;
				}

				//push array
				master.push(
					players[p].name +
					" hits for " +
					2 * players[p].atk +
					" damage. And uses their special ability " +
					players[p].specialAbility +
					"<br>" +
					enemies[e].name +
					" health is now " +
					enemies[e].hp +
					" hitpoints"
				);
			}
			//crital hut end, need simplified

			//player hit role
		} else if (accuracyRoll > players[p].accuracy) {
			master.push(players[p].name + " misses");

			//player acurracy roll
		} else if (
			accuracyRoll <= players[p].accuracy &&
			evationRoll < enemies[e].evation
		) {
			master.push(enemies[e].name + " avoids the attack");
		} else {
			master.push("error");
		}

		//enemy hit role + dodge rolls
		role(20);
		accuracyRoll = randomRoll;
		role(20);
		evationRoll = randomRoll;
		if (
			accuracyRoll <= enemies[e].accuracy &&
			evationRoll >= players[p].evation
		) {
			//critical hits
			role(100);
			criticalRoll = randomRoll;
			if (!(criticalRoll >= 85)) {
				//damage
				players[p].hp = players[p].hp - enemies[e].atk;

				//if hit point below 0 hitpoint equal 0
				if (players[p].hp < 0) {
					players[p].hp = 0;
				}

				//push array
				master.push(
					enemies[e].name +
					" hits for " +
					enemies[e].atk +
					" damage. <br>" +
					players[p].name +
					" health is now " +
					players[p].hp +
					" hitpoints"
				);
			} else if (criticalRoll >= 85) {
				players[p].hp = players[p].hp - 2 * enemies[e].atk;

				//if hit point below 0 hitpoint equal 0
				if (players[p].hp < 0) {
					players[p].hp = 0;
				}

				//push array
				master.push(
					enemies[e].name +
					" hits for " +
					2 * enemies[e].atk +
					" damage. And uses their special ability " +
					enemies[e].specialAbility +
					"<br>" +
					players[p].name +
					" health is now " +
					players[p].hp +
					" hitpoints"
				);
			}
			//crital hut end, need simplified

			//player hit role
		} else if (accuracyRoll > enemies[e].accuracy) {
			master.push(enemies[e].name + " misses");

			//player acurracy roll
		} else if (
			accuracyRoll <= enemies[e].accuracy &&
			evationRoll < players[p].evation
		) {
			master.push(players[p].name + " avoids the attack");
		} else {
			master.push("error");
		}

		battle(p, e);
	} else {
		master.push("Game Over");
		if (players[p].hp <= 0) {
			master.push("Enemy wins!");
		} else if (enemies[e].hp <= 0) {
			master.push("Player wins!");
		}

		document.getElementById("output").innerHTML = master.join("<br>");

		//reset
		enemies[0].hp = 69;
		enemies[1].hp = 101;
		enemies[2].hp = 221;
		enemies[3].hp = 2;
		enemies[4].hp = 1000;
		enemies[5].hp = 1000;

		players[0].hp = 500;
		players[1].hp = 40;
		players[2].hp = 20;
	}
}
