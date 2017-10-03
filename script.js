function reverseWords(string) {
  var wordsArray = string.split(' ');
  var reversedWordsArray = [];

  wordsArray.forEach(function(word) {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArray.push(reversedWord);
  });

  return reversedWordsArray.join(' ');
}

reverseWords('this is a string of words');
