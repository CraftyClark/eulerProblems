// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two n-digit numbers.

function isPalindrome(x){
    x = x.toString().split('');
    var len = x.length;
    for(var i=0; i<len/2;i++){
        if(x[i] !== x[len-1-i]){
            return false;
        }
    }
    return true;
}
function largestPalindromeProduct(n){
    var largest = 0;
    var top_digits = Math.pow(10, n) - 1;
    var bottom_digits = Math.pow(10, n-1);

    for(var i=top_digits; i>=bottom_digits; i--){
        for(var j=top_digits; j>=bottom_digits; j--){
            var mult = i*j;
            if(mult < largest) break;
            if(isPalindrome(mult) && mult > largest){
                largest = mult;
            }
        }
    }
    return largest;
}

largestPalindromeProduct(3);