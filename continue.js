var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
var nLen = numbers.length;
for(var i = 0; i < nLen; i++){
    var number = numbers[i];
    if(number > 100){
        continue;
    }
    console.log(number);

}