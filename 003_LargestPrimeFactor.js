// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  var divsor = 2;
  while(number > 1){
    if(number % divsor === 0) {
      number = number / divsor;
    }
    else {
      divsor++;
    }
  }

  return divsor;
}

largestPrimeFactor(13195);