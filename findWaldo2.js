// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(arr[i], i);   // execute callback
  //   }
  // }
  arr.forEach(function(name, index){
    if(name==="Waldo"){
      found(name, index);
  }
  });
}

function actionWhenFound(name, index) {
  console.log(`Found ${name} at index ${index}` ); //Found Waldo at index 2!"
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);