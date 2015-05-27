describe('pigLatin', function() {

  it("adds 'ay' to the end of words that start with a vowel", function() {
    expect(pigLatin('abacus')).to.equal("abacusay");
  });

  it("moves the first consonant of a word beginning with a consonant to the end, adds ay", function() {
    expect(pigLatin('luau')).to.equal("uaulay");
  });

  it("moves the first and any consecutive consonants after the first of a word beginning with a consonant to the end, adds ay", function() {
    expect(pigLatin('glee')).to.equal("eeglay");
  });

  it("moves both the q and u if a word begins with 'qu'", function(){
    expect(pigLatin('quark')).to.equal("arkquay");
  });

  it("treats the y as a consonant if word begins with y", function() {
    expect(pigLatin('yodelmania')).to.equal("odelmaniayay");
  });

  it("translates each word in a sentence into pig latin", function() {
    expect(pigLatin('the quick brown fox')).to.equal("ethay ickquay ownbray oxfay");
  });


});

describe('isVowel', function() {

  it("detects if a letter is a vowel", function() {
    expect(isVowel('a')).to.equal(true);
  });

  it("detects if a letter is NOT a vowel", function() {
    expect(isVowel('b')).to.equal(false);
  });

});

describe('hasVowel', function(){

  it("detects if a vowel is NOT present in a word", function(){
    expect(hasVowel('ghgdl')).to.equal(false);
  });

  it("detects if a vowel is present in a word", function(){
    expect(hasVowel('megatron')).to.equal(true);
  });

});
