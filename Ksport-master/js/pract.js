function countE(){
  var phrase = prompt("which phrase would you like to examine");
  if (typeof(phrase) != "string"){
    alert("that is not a valid entry");
    return false;
  }else {
    var eCount = 0;
    for (var index =0; index < phrase.length; index++){
      if (phrase.charAt(index) == "e" || phrase.charAt(index) == "E")
       eCount++;
    }
  }
  alert("there are "+ eCount + " E is in \"" + phrase + "\".");
  return true;

}
var x = 223;
function add (a,b){
  x = a+b;
  return x;
}

function feedPerRanger (numShepp,numRangers){
var num = (numShepp/numRangers)*2;

alert("Each parck Ranger should load " + num + " lbs of feed today.");

}
var array = [2,6,45,"dfds",7,"rgufhfduf",65,23,6,8];
_______________________________________________
function sumArr(arr){
var sum = 0;
for (var i = 0; i < arr.length; i++){
  sum += arr[i];

}
  return sum;
}
_____________________________________________________

function  mularray(arr){

 if (arr.length === 0) return 0;
 var mul = 0;
 for (var i= 0; i < arr.length;i++){
 mul += arr[i]
 }
  return mul/arr.length;
}
____________________________________________________________

function myArray(arr){
if (typeof(arr) === "string" || typeof(arr) === "number"){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof(arr) === "string") {
      return charAt(arr[i]);
    }else {
      sum += arr[i];
      return sum;
    }
  }
}

}
