// string type variable 
var bottle = "water";
var bottleColor = "yellow";
// number type variable
var sunglassPrice = 120;
var penColor = "blue";
// boolean type variable
var isExpensive = true;

var tableItems = ["bottle", "pen", "mouse", "sunglass", "paper"];
console.log(tableItems);

var item3 = tableItems[3];
console.log(item3);

 tableItems[4] = "notebook";

 var penIndex = tableItems.indexOf("pen");
 console.log(penIndex);


 if(tableItems.length > 4){
  console.log("everything will be ok");
 }
 else if(tableItems[3] == "pen"){
    console.log("I am correct");
 }
 else{
    console.log("kono kicui thik nai");
 }

 