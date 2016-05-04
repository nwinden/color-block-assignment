$(function(){

  var choice = chooseColor();
  var numCorrect = 0;
  var numIncorrect = 0;
  var game = $('.game');
  var shuffleArr = [1,2,3,4];

  $('h2').text('Choose the color ' + choice + '!');
  game.append('<div class="box red"></div>');
  $('.red').data('color','Red');
  game.append('<div class="box green"></div>');
  $('.green').data('color','Green');
  game.append('<div class="box blue"></div>');
  $('.blue').data('color', 'Blue');
  game.append('<div class="box yellow"></div>');
  $('.yellow').data('color','Yellow');

  $('main').on('click', '.box', chooseAnswer);

  function chooseAnswer() {
    if ($(this).data('color') == choice) {
      $('.guess').text('Correct!');
      numCorrect++;
      $('.correct').text('Correct: ' + numCorrect);

    } else {
      $('.guess').text('Incorrect!');
      numIncorrect++;
      $('.incorrect').text('Incorrect: ' + numIncorrect);
    }

    choice = chooseColor();
    $('h2').text('Choose the color ' + choice + '!');

    game.children().remove();
    shuffleColors(shuffle(shuffleArr));
  }

  function chooseColor(){
    var randomNum = Math.round(Math.random() * (4 - 1) + 1);
    var randomChoice = '';

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

  function shuffleColors(array) {
    for (var i = 0; i < array.length; i++) {
      switch (array[i]) {
        case 1:
          game.append('<div class="box red"></div>');
          $('.red').data('color','Red');
          break;
        case 2:
          game.append('<div class="box green"></div>');
          $('.green').data('color','Green');
          break;
        case 3:
          game.append('<div class="box blue"></div>');
          $('.blue').data('color', 'Blue');
          break;
        case 4:
          game.append('<div class="box yellow"></div>');
          $('.yellow').data('color','Yellow');
          break;
      }
    }
  }

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
