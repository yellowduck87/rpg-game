//2 when one chrater is selected, the rest are moved to enemies possition

//3 when one enemy is selected, it is moved to the defender possition


//5 when any character gets to 0 or less hp, the charcter is defeated

//6 when a defnding character is defeted, the image goes away

//7 if the selected character defeats the other three, the user wins.


// computed member acces



$(document).ready(function () {

    var characters = {
        char1: {
            hp: 120,
            ap: 25,
            mult: 10,
            dAp: 25,
            image: "http://via.placeholder.com/100x100",

        },
        char2: {
            hp: 180,
            ap: 18,
            mult: 9,
            dAp: 18,
            image: "http://via.placeholder.com/100x100",

        },
        char3: {
            hp: 200,
            ap: 10,
            mult: 7,
            dAp: 10,
            image: "http://via.placeholder.com/100x100",

        },
        char4: {
            hp: 160,
            ap: 20,
            mult: 8,
            dAp: 20,
            image: "http://via.placeholder.com/100x100",
        },
    }
    var counter = 0;
    var deathCounter = 0;
    var ememiesDefeated = 0;
    var char = [];
    var combatChar;
    var combatChosen = false;
    var enemyChosen = false;
    var avatar;
    var enemy;

    char = Object.keys(characters);

    loadNewGame = function () {
        for (var i = 0; i < 4; i++) {

            var charImg = $("<img>");
            source = characters[char[i]].image
            charImg.attr("id", char[i]);
            charImg.addClass("toon-img").attr("src", source);
            $("#readyP1").append(charImg);

        }
    }

    banner = function () {
        $(".toon-img").wrap("<div class='toon-box'></div>");
        var hitPoints = $("<div>");
        hitPoints.attr("id", "health")
        $(".toon-box").append(hitPoints);
    }

    printHp = function () {
        for (var i = 0; i < 4; i++) {
            var hitPoints = characters[char].hp;

        }
    }

    moveEnemies = function () {
        var t = $(".toon-img").detach();
        t.appendTo("#make-your-choice");
        $("#avatar-tag").text("You Will Fight As");

    }

    fightEnemies = function () {
        var e = $(".enemy").detach();
        e.appendTo("#fight-enemies");
    }

    deadToon = function () {
        graveyard = $(".enemy").detach();
        deathCounter++;
        if (deathCounter === 2) {
            $("#enemy-list").text("Your Last Opponent");
        } else if (deathCounter === 1) {
            $("#enemy-list").text("Choose Your Second Opponent");
        } else {
            $("#enemy-list").text("All Opponents Defeated");
        }

    }


    //   gameCode = function () {
    toonPicker = function () {
        $(".toon-img").on("click", function (event) {
            if (enemyChosen) {
                return false;
            }

            if (combatChosen) {
                enemy = event.target.id;
                $(this).addClass("enemy");
                fightEnemies();
                counter++;
                console.log(counter);
                enemyChosen = true;
                console.log("enemy = " + enemy);
                console.log(characters[enemy]);

            } else {
                avatar = event.target.id;
                $(this).removeClass("toon-img");
                $(this).addClass("avatar");
                moveEnemies();
                combatChosen = true;
                console.log("avatar = " + avatar);
                console.log(characters[avatar]);
            }
        });
    }
    attack = function () {
        $("#attack").on("click", function () {
            if (enemyChosen && characters[enemy].hp > 0) {
                characters[enemy].hp -= characters[avatar].ap;
                characters[avatar].ap += characters[avatar].mult;
                if (characters[enemy].hp > 0) {
                    characters[avatar].hp -= characters[enemy].dAp;
                } else {
                    alert("you have deafeted " + enemy);
                    enemyChosen = false;
                    toonPicker();
                }
                console.log(characters[enemy].hp)

                if (characters[enemy].hp <= 0) {
                    deadToon();
                }

                if (counter === 3 && characters[enemy].hp <= 0) {
                    alert("yay you win");
                }

            }
        })
    }


    loadNewGame();
    banner();
    toonPicker();
    attack();




});