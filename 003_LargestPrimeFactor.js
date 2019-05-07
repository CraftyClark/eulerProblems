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