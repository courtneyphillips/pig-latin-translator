describe('is_vowel', function() {

  it("detects if a letter is a vowel", function() {
    expect(is_vowel('a')).to.equal(true);
  });

  it("detects if a letter is NOT a vowel", function() {
    expect(is_vowel('b')).to.equal(false);
  });


});
