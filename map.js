var words = ["ground", "control", "to", "major", "tom"];

function map(arr, func){
  var output = [];
  for(var i =0; i < arr.length; i++) {
     output.push(func(arr[i]));
  }
  return output;
};



var wordLength = map(words, function(word) {
              return word.length;

});

console.log(wordLength);

