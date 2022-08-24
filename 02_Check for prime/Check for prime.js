
var num = 11;
function identifyPrime(num) {
    // Write code here

    
let isPrime = true;

// check if number is equal to 1
if (num === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (num > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}


}

//output
//yes