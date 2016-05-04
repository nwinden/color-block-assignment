$(function(){
  //the color the player is trying to select chosen by a function
  var answer = chooseColor();
  //the number of correct answers chosen
  var numCorrect = 0;
  //the number of incorrect answers chosen
  var numIncorrect = 0;
  //jQuery shorthand
  var game = $('.game');
  //an array to be shuffled throughout to dynamically choose colors
  var shuffleArr = ['Red','Green','Blue','Yellow'];

  //tells which color needs to be chosen and dynamically sets the board
  $('h2').text('Choose the color ' + answer + '!');
  shuffleColors(shuffle(shuffleArr));

  //listens to which box the player chooses and calls the chooseAnswer function
  $('main').on('click', '.box', chooseAnswer);

  /*
  function that sees if the player chose the right answer and resets the board
  accordingly
  */
  function chooseAnswer() {

    //happens is if the player chose correctly
    if ($(this).data('color') == answer) {

      //tells the player of thier success and increases the counter
      $('.guess').text('Correct!');
      numCorrect++;
      $('.correct').text('Correct: ' + numCorrect);

      //sets the next color to be selected
      answer = chooseColor();
      $('h2').text('Choose the color ' + answer + '!');

      //clears the board
      game.children().remove();

      //resets the board with a random shuffling of the colors
      shuffleColors(shuffle(shuffleArr));

      //happens if the player chooses incorrectly
    } else {
      /*
      tells the player of thier failure, to select again, and increases the
      counter
      */
      $('.guess').text('Incorrect! Try Again!');
      numIncorrect++;
      $('.incorrect').text('Incorrect: ' + numIncorrect);

    }

  }

  //function finds which color to be selected by the player
  function chooseColor(){

    //finds a random number from 1-4
    var randomNum = Math.round(Math.random() * (4 - 1) + 1);
    //the color choice to be returned
    var randomChoice = '';

    //depending on which number was randomly found, chooses a color
    switch (randomNum) {
      case 1:
        randomChoice = 'Red';
        break;
      case 2:
        randomChoice = 'Green';
        break;
      case 3:
        randomChoice = 'Blue';
        break;
      case 4:
        randomChoice = 'Yellow';
        break;
    }

    return randomChoice;

  }

  //takes in a shuffled array and resets the board dynamically
  function shuffleColors(array) {

    //loops through the array and creates the boxes
    for (var i = 0; i < array.length; i++) {
      game.append('<div class="box ' + array[i] + '"></div>');
      $('.' + array[i]).data('color',array[i]);
    }
  }

  /*
  a function that takes in an array and returns a similar array with shuffled
  values
  @param array: the array to be shuffled
  */
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

});
