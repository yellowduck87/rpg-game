// computed member acces



$(document).ready(function () {

    var characters = {
        char1: {
            hp: 120,
            ap: 15,
            mult: 5,
            dAp: 17,
            image: "assets/images/chewyduck.JPG",
            sound: "assets/sounds/chewy-roar.mp3",
            winSound: "assets/sounds/Chewie-chatting.mp3",
            loseSound: "assets/sounds/WilhelmScream.mp3",

        },
        char2: {
            hp: 180,
            ap: 5,
            mult: 7,
            dAp: 8,
            image: "assets/images/trooperduck.jpg",
            sound: "assets/sounds/blaster-firing.mp3",
            winSound: "assets/sounds/looksir.wav",
            loseSound: "assets/sounds/WilhelmScream.mp3",


        },
        char3: {
            hp: 200,
            ap: 10,
            mult: 6,
            dAp: 12,
            image: "assets/images/yodaduck.jpg",
            sound: "assets/sounds/yodahelp.mp3",
            winSound: "assets/sounds/yodalaughing.mp3",
            loseSound: "assets/sounds/WilhelmScream.mp3",


        },
        char4: {
            hp: 160,
            ap: 20,
            mult: 6,
            dAp: 30,
            image: "assets/images/vadarduck2.jpg",
            sound: "assets/sounds/swvader04.wav",
            winSound: "assets/sounds/swvader02.mp3",
            loseSound: "assets/sounds/trouble.mp3",

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

    function loadNewGame() {
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

    function moveEnemies() {
        var t = $(".new-div").detach();
        t.appendTo("#make-your-choice");
        $("#avatar-tag").text("YOU WILL FIGHT AS");

    }

    function fightEnemies() {
        var e = $(".enemy").detach();
        e.appendTo("#fight-enemies");
    }

    function deadToon() {
        graveyard = $(".enemy").detach();
        deathCounter++;
        if (deathCounter === 2) {
            $("#enemy-list").text("YOUR LAST OPPONENT");
        } else if (deathCounter === 1) {
            $("#enemy-list").text("CHOOSE YOUR SECOND OPPONENT");
        } else {
            $("#enemy-list").text("ALL OPPONENTS DEFEATED");
        }

    }

    function toonPicker() {
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
                var newSound = document.createElement("audio");
                newSound.src = characters[avatar].sound;
                newSound.play();
                combatChosen = true;
                console.log("avatar = " + avatar);
                console.log(characters[avatar]);
            }
        });
    }

    function endGame() {
        window.location.href = "./reload.html";
        var lSound = document.createElement("audio");
        lSound.src = characters[avatar].loseSound;
        lSound.play();
    }

    $("#reset").click(function () {
        window.location.href = "./index.html";
        console.log(playAgain);
    })

    function battle() {
        var battleSound = document.createElement("audio");
        battleSound.src = "assets/sounds/light-saber-on.mp3";
        battleSound.play();
    }

    function attack() {
        $("#attack").on("click", function () {

            // if (characters[avatar].hp <= 0) {
            //     // alert("boo, you lose");
            //     var lSound = document.createElement("audio");
            //     lSound.src = characters[avatar].loseSound;
            //     lSound.play(); 
            //     endGame();
            // }

            if (enemyChosen && characters[enemy].hp > 0) {
                battle();
                characters[enemy].hp -= characters[avatar].ap;
                characters[avatar].ap += characters[avatar].mult;
                if (characters[enemy].hp > 0) {
                    characters[avatar].hp -= characters[enemy].dAp;
                } else {
                    // alert("you have deafeted " + enemy);
                    var victorySound = document.createElement("audio");
                    victorySound.src = ("assets/sounds/three-chirp.mp3");
                    victorySound.play();
                    enemyChosen = false;
                    toonPicker();
                }
                // console.log(characters[enemy].hp)

                if (characters[enemy].hp <= 0) {
                    deadToon();
                }

                if (counter === 3 && characters[enemy].hp <= 0) {
                    // alert("yay you win");
                    var wSound = document.createElement("audio");
                    wSound.src = characters[avatar].winSound;
                    wSound.play();
                }

            }

            $(".avatar1").text(characters[avatar].hp);
            $(".enemy1").text(characters[enemy].hp);

            if (characters[avatar].hp <= 0) {
                
                endGame();
             
            }
        });
    }


    loadNewGame();
    toonPicker();
    attack();
});