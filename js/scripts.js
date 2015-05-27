var pig_latin = function(phrase) {
  if(is_vowel(phrase.charAt(0))) {
    phrase = phrase.concat("ay");
  }
  return phrase;
};

var is_vowel = function(letter) {
  if(letter.match(/[aeiou]/) != null) {
    return true;
  }
  else {
    return false;
  }
};
