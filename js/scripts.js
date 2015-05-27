var pigLatin = function(phrase) {
  if (phrase.charAt(0) === "y") {
    phrase = shiftPhrase(phrase);
  }
  while(!isVowel(phrase.charAt(0))) {
    if (phrase.charAt(0) === "q") {
      phrase = shiftPhrase(phrase);
    }
    phrase = shiftPhrase(phrase);
  }
  phrase = phrase.concat("ay");
  return phrase;
};

var isVowel = function(letter) {
  if(letter.match(/[aeiou]/) != null) {
    return true;
  }
  else {
    return false;
  }
};

var shiftPhrase = function(phrase) {
  phrase = phrase.concat(phrase.charAt(0));
  phrase = phrase.slice(1, phrase.length);
  return phrase;
};
