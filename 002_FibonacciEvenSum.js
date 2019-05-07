function fiboEvenSum(n) {
  // You can do it!
  var sum = 0;
  var fibArray = fibSeries(n);

  for(var i=0; i < fibArray.length; i++){
    sum += fibArray[i];
    console.log(fibArray[i]);
  }

  return sum;
}
function fibSeries(n) {
  var a = 1;
  var b = 2;
  var i = 1;
  var next = a + b;
  var fibArray = [2];

  while(i < n) {
    if(next % 2 === 0) {
      fibArray.push(next);
    }
    a = b;
    b = next;
    next = a + b;
    i++;
  }

  return fibArray;
}

fiboEvenSum(10);