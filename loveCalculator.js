prompt("Comment t'appelles tu ?");
prompt("Qui veux tu tester ?");
var matchScore = Math.random() * 100;
    matchScore = Math.floor(matchScore);

if (matchScore <= 50 ) {
    console.log("it's not a match")
} else {
    console.log("it's a match")
}
console.log("your match score is " + matchScore + " %");
