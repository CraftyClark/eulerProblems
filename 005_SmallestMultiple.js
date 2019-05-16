// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple(n) {
  var num = 1;
  while(true) {
    var temp = 0;
    for(var i = 1; i <= n; i++){
      if(num % i === 0){
        temp++;
        if(temp === n){
        return num;
        }
      }
      
    }
    num++;
  }
}

smallestMultiple(20);