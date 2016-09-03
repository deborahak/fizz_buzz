$(document).ready(function() {
    
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0){
         $("#fizzCount").append("Fizz Buzz <br>");
         console.log("Fizz Buzz")
         }
        else if (i % 3 === 0) {
            // code block that handles divisibilty by 3
            $("#fizzCount").append ("Fizz <br>");
            console.log("Fizz")
        } 
        else if (i % 5 === 0) {
             $("#fizzCount").append("Buzz <br>");
             console.log("Buzz")
        } 
        else {
             $("#fizzCount").append (i + "<br>");
             console.log(i)
        }
        

    }
    
})
