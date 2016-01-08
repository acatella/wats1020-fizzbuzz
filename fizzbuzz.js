//creating a function so user can choose numbers and limit
//for loop to run through all number from 1 to the limit argument
//start by creating an empty string
//if i is divisble by the num1 argument, add 'Fizz' to our string
//same thing for num2 argument
//if the output string is unchanged it will be empty, which equates to false in boolean
//here we call the function using 3,5, and 20 as our arguments

function fizzBuzz(num1,num2,limit) {
  for (i=1; i<=limit; i++) {
    var output = "";
    if (i%num1 == 0) {
      output += 'Fizz'
    }
  
    if (i%num2 == 0) {
      output += 'Buzz'
    }
    
    if (!output) {
      output += i
    }
    
    document.write(output + "<br>");
  }
}


fizzBuzz(3,5,20)
