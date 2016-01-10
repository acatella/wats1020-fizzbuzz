//creating a function so user can choose numbers and limit
//for loop to run through all number from 1 to the limit argument
//start by creating an empty string
//if i is divisble by the num1 argument, add 'Fizz' to our string
//same thing for num2 argument, but with 'Buzz'
//if the output string is unchanged it will be empty, which equates to false in boolean
//then we call the function using 3,5, and 20 as our arguments

function fizzBuzz(num1,num2,limit) {
  //code to keep button black
  var button = document.getElementById('js-trigger');
  button.setAttribute('class','blackBtn');

  for (i=1; i<=limit; i++) {
    var output = "";
    var outputTag = "";
    if (i%num1 == 0) {
      output += 'Fizz'
      outputTag = "<li class='purple'>" + output + "</li>"
    }

    if (i%num2 == 0) {
      output += 'Buzz'
      if (output[0] == 'F')
        outputTag = "<li class='red'>" + output + "</li>"

      else {
        outputTag = "<li class='green'>" + output + "</li>"
      }
    }

    if (!output) {
      outputTag = outputTag = "<li>" + i + "</li>"
    }


    document.getElementById('js-results').innerHTML += outputTag;
  }
}
