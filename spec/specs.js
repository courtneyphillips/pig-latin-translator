describe('pig_latin', function() {

  it("adds 'ay' to the end of words that start with a vowel", function() {
    expect(pig_latin('abacus')).to.equal("abacusay");
  });

  it("moves the first consonant of a word beginning with a consonant to the end, adds ay", function() {
    expect(pig_latin('luau')).to.equal("uaulay");
  });

  it("moves the first and any consecutive consonants after the first of a word beginning with a consonant to the end, adds ay", function() {
    expect(pig_latin('glee')).to.equal("eeglay");
  });


});

describe('is_vowel', function() {

  it("detects if a letter is a vowel", function() {
    expect(is_vowel('a')).to.equal(true);
  });

  it("detects if a letter is NOT a vowel", function() {
    expect(is_vowel('b')).to.equal(false);
  });


});
