// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

function isPrime(n) {
    if(n === 1) return false;

    let sqrt_n = Math.floor(Math.sqrt(n));

    for(let i = 2; i <= sqrt_n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

// return nth prime
function genPrimes(n){
    let primes_count = 0, i = 2;

    while(true){
        if(isPrime(i)){
            primes_count++;
            if(primes_count === n){
                return i;
            }
        }
        i++;
    }
}

console.log(genPrimes(10001));