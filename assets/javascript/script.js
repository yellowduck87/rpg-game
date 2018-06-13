  //1.5 when a character attacks, its ap goes up incrementaly.

  //2 when one chrater is selected, the rest are moved to enemies possition

  //3 when one enemy is selected, it is moved to the defender possition

  //4 when a character attacks, it removes hp from the defender, and the defender responds by removing hp from the chracter

  //5 when any character gets to 0 or less hp, the charcter is defeated

  //6 when a defnding character is defeted, the image goes away

  //7 if the selected character defeats the other three, the user wins.


  // computed member acces

  var characters = {
      char1: {
          hp: 120,
          ap: 25,
          mult: 10,
          dAp: 25,
      },
      char2: {
          hp: 180,
          ap: 18,
          mult: 9,
          dAp: 18,
      },
      char3: {
          hp: 200,
          ap: 10,
          mult: 7,
          dAp: 10,
      },
      char4: {
          hp: 160,
          ap: 20,
          mult: 8,
          dAp: 20,
      },
  }

  $(document).ready(function () {
              var counter = 0;
              var ememiesDefeated = 0;
              var char = [];
              var combatChar;
              var combatChosen = false;
              var enemyChosen = false;
              var avatar;
              var enemy;

              char = Object.keys(characters);
              var imageSrc = ["http://via.placeholder.com/100x100", "http://via.placeholder.com/100x100", "http://via.placeholder.com/100x100", "http://via.placeholder.com/100x100"];

              loadNewGame = function () {
                  for (var i = 0; i < imageSrc.length; i++) {
                      var charImg = $("<img>");
                      source = imageSrc[i];
                      charImg.attr("id", char[i]);
                      charImg.addClass("toon-img").attr("src", source);
                      $("#readyP1").append(charImg);
                  }
              }

              console.log(avatar);
              console.log(combatChosen);

              //   gameCode = function () {
              toonPicker = function () {
                  $(".toon-img").on("click", function (event) {
                      if (enemyChosen) {
                          return false;
                      }

                      if (combatChosen) {
                          enemy = event.target.id;
                          enemyChosen = true;
                          console.log("enemy = " + enemy);
                          console.log(characters[enemy]);

                      } else {
                          avatar = event.target.id;
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
                              console.log(characters[avatar])
                            }
                          })
                  }

                  loadNewGame();
                  toonPicker();
                  attack();


              });