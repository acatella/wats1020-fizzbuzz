//creating a function so user can choose numbers and limit
function fizzBuzz(num1,num2,limit) {
  //for loop to run through all number from 1 to the limit argument
  for (i=1; i<=limit; i++) {
    //start by creating an empty string
    var output = "";
    //if i is divisble by the num2 argument, add 'Fizz' to our string
    if (i%num1 == 0) {
      output += 'Fizz'
    }
    //same thing for num2 argument
    if (i%num2 == 0) {
      output += 'Buzz'
    }
    
    //if the output string is unchanged it will be empty, which equates to false in boolean
    if (!output) {
      output += i
    }
    
    console.log(output)
  }
}

//here we call the function using 3,5, and 20 as our arguments
fizzBuzz(3,5,20)
