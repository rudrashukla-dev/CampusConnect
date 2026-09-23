const favMovie = "Avatar";
let guess = prompt("Guess your favrioute movie");

if (guess == favMovie) {
    console.log("congratulation you guessed correctly " + favMovie);
}
else {
    while ((guess != favMovie) && (guess != "quit")) {
        console.log("wrong");
        guess = prompt("Retry");
    }
}


