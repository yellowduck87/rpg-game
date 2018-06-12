  

//1.5 when a character attacks, its ap goes up incrementaly.

//2 when one chrater is selected, the rest are moved to enemies possition

//3 when one enemy is selected, it is moved to the defender possition

//4 when a character attacks, it removes hp from the defender, and the defender responds by removing hp from the chracter

//5 when any character gets to 0 or less hp, the charcter is defeated

//6 when a defnding character is defeted, the image goes away

//7 if the selected character defeats the other three, the user wins.
$(document).ready(function () {
    var counter = 0;
    var ememiesDefeated = 0;
    var charImg = "";
    var char = [];

    var characters = {
        char1: {
            hp: 120,
            ap: 25,
            dAp: 25,
            image: 'assets/images/quack1.jpg',
        },
        char2: {
            hp: 180,
            ap: 18,
            dAp: 18,
            image: 'assets/images/quack1.jpg',
        },
        char3: {
            hp: 200,
            ap: 10,
            dAp: 10,
            image: 'assets/images/quack1.jpg',
        },
        char4: {
            hp: 160,
            ap: 20,
            dAp: 20,
            image: 'assets/images/quack1.jpg',
        }
    }

    char = ["#char1", "#char2", "#char3", "#char4"];
    console.log(char[1])


    // for (var i = 0; i < char.length; i++) {
    //     var charImg = $("img>");
    //     var src = characters.char2.image;
    //     charImg.addClass("toon-img");
    //     charImg.attr("src", src);
    //     $("#readyP1").append(charImg);
    // }


    loadNewGame = function () {
    

    }
    // loadNewGame();


});