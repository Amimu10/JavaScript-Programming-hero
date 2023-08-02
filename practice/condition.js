function getGrade(score) {
    if (score >= 80) {
      return 'A';
    } else if (score >= 60) {
      return 'B';
    } else if (score >= 50) {
      return 'C';
    } else if (score >= 40) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  // Scores of you and your friends
  var myScore = 85;
  var tomScore = 66;
  var janeScore = 95;
  var peterScore = 56;
  var johnScore = 40;
  
  // Get grades
  var myGrade = getGrade(myScore);
  var tomGrade = getGrade(tomScore);
  var janeGrade = getGrade(janeScore);
  var peterGrade = getGrade(peterScore);
  var johnGrade = getGrade(johnScore);
  
  // Print grades
  console.log("My grade: " + myGrade);
  console.log("Tom's grade: " + tomGrade);
  console.log("Jane's grade: " + janeGrade);
  console.log("Peter's grade: " + peterGrade);
  console.log("John's grade: " + johnGrade);
  


function getGrade (score){
    if( score >= 80 ){
        return "A"
    }
    else if( score >= 60 ){
        return "B"
    }
    else if( score >= 50 ){
        return "C"
    }
    else if( score >= 40 ){
        return "D"
    }
    else{
        return "F"
    }
}

var myScore = 85;
var TomScore = 66;
var JaneScore = 95;
var peterScore = 56;
var JohnScore = 40;

var myGrade = getGrade(myScore);
var tomGrade = getGrade(TomScore);
var janeGrade = getGrade(JaneScore);
var peterGrade = getGrade(peterScore);
var johnGrade = getGrade(JohnScore);

console.log("My grade: " + myGrade);
console.log("Tom grade: " + tomGrade);
console.log("Jane grade: " + janeGrade);
console.log("Peter grade: " + peterGrade);
console.log("John grade: " + johnGrade);

