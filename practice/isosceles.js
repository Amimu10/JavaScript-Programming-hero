var side1 = 9;
var side2 = 8;
var side3 = 9;

if( side1 == side2 || side1 == side3 || side2 == side3 ){
    console.log("isosceles");
}
else{
    console.log("not isosceles");
}

// var i = 0;
// for (i=0; i <5; i++){
//     console.log(i);
// };

var marks = [ 13, 15, 14, 20, 18];
for(var i=0; i<marks.length; i++){
 if(marks[i] >=15){
  break;
 }
 console.log(marks[i]);
};