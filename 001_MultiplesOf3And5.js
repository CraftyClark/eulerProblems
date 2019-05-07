function sumOfK(num, k) {

var divsor = Math.floor(num/ k);
var sum = k * divsor * (divsor + 1) / 2;

return sum;

}

function multiplesOf3and5(number) {
  // Good luck!
  var total = 0;
  number = number - 1;

  total = sumOfK(number, 3) + sumOfK(number, 5) - sumOfK(number, 15);

  return total;
}

multiplesOf3and5(1000);