const score = 88;

if(score === 100) {
  console.log("You got A+ grade");
} else if(score > 80 && score < 100) {
  console.log("You got A grade");
} else if(score > 60 && score < 81) {
  console.log("You got B grade")
} else if(score < 61) {
  console.log("You got C grade")
}