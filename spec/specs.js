describe('pig_latin', function() {

  it("adds 'ay' to the end of words that start with a vowel", function() {
    expect(pig_latin('abacus')).to.equal("abacusay");
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
