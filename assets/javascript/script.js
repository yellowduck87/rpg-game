// computed member acces


game = function() {
$(document).ready(function () {

    var characters = {
        char1: {
            hp: 120,
            ap: 20,
            mult: 9,
            dAp: 20,
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

            //new div
            var newDiv = $("<div>");
            newDiv.addClass("new-div");
            newDiv.attr("id", characters[char[i]]);

            var charImg = $("<img>");
            source = characters[char[i]].image
            charImg.attr("id", char[i]);
            charImg.addClass("toon-img").attr("src", source);
            charImg.attr("id", char[i]);
            newDiv.append(charImg);

            var hitPoints = $("<div>");
            hit = characters[char[i]].hp;
            hitPoints.attr("data-hp", hit).attr("id", char[i]);
            hitPoints.addClass("hit");
            hitPoints.text(hit);
            newDiv.append(hitPoints);

            // console.log(hit);
            $("#readyP1").append(newDiv);


        }
    }

    moveEnemies = function () {
        var t = $(".new-div").detach();
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


    toonPicker = function () {
        $(".new-div").on("click", function (event) {
            if (enemyChosen) {
                return false;
            }

            if (combatChosen) {
                enemy = event.target.id;
                $(this).addClass("enemy");
                $(this).children().addClass("enemy1");
                fightEnemies();
                counter++;
                console.log(counter);
                enemyChosen = true;
                console.log("enemy = " + enemy);
                console.log(enemy);
                console.log(characters[enemy]);

            } else {
                avatar = event.target.id;
                $(this).removeClass("new-div");
                $(this).addClass("avatar");
                $(this).children().addClass("avatar1");
                moveEnemies();
                combatChosen = true;
                console.log("avatar = " + avatar);
                console.log(characters[avatar]);
            }
        });
    }

    endGame = function() {
        $("body").replaceWith("<h1>end</h1><button class='reset'>Try Again?</button>");
    }

    reset = function() {
        $(".reset").on("click", game())
    }

    attack = function () {
        $("#attack").on("click", function () {
            if (characters[avatar].hp <= 0) {
                alert("boo, you lose");
                endGame();
            }

            if (enemyChosen && characters[enemy].hp > 0) {
                //save data as text--parseInt--arithmatic--turn to text again
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

            $(".avatar1").text(characters[avatar].hp);
            $(".enemy1").text(characters[enemy].hp);
        });

    }
    loadNewGame();
    toonPicker();
    attack();
});
}

game();