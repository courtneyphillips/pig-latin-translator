var pigLatin = function(wholePhrase) {

  wholePhrase = wholePhrase.split(" ");

  wholePhrase.forEach(function(phrase, index) {

    if (phrase.charAt(0) === "y") {
      phrase = shiftPhrase(phrase);
    }

    if(hasVowel(phrase)) {
      while(!isVowel(phrase.charAt(0))) {
        if (phrase.charAt(0) === "q") {
          phrase = shiftPhrase(phrase);
        }
        phrase = shiftPhrase(phrase);
      }
    }
    phrase = phrase.concat("ay");
    wholePhrase[index] = phrase;

  });

  wholePhrase = wholePhrase.join(" ");
  return wholePhrase;
};

var isVowel = function(letter) {
  if(letter.match(/[aeiou]/) != null) {
    return true;
  }
  else {
    return false;
  }
};

var hasVowel = function(word) {
  var hadVowel = false
  var splitWord = word.split("");
  splitWord.forEach(function(letter) {
    if(isVowel(letter)) {
      hadVowel = true;
    }
  });
  return hadVowel;
};

var shiftPhrase = function(phrase) {
  phrase = phrase.concat(phrase.charAt(0));
  phrase = phrase.slice(1, phrase.length);
  return phrase;
};

$(document).ready(function() {

  $("#piglatin").submit(function(event) {
    var input = ($("input#input-string").val());
    var translatedInput = pigLatin(input);
    $(".output").text(translatedInput);
    $("#result").show();
    event.preventDefault();
  });

});
