
var faveNumber = 10;

//true if faveNumber is less than 10, false otherwise
if(faveNumber <=10) {
  //thing happens if true
  console.log("This is true!");
}else {
    console.log("This is false!");
  }

//second part
//if # is bigger than 90, big number
//if # is between 65-89 = medium-ish number
//less than 65, small number

if (faveNumber >=90) {
  console.log("Big Number!")
}
else if (faveNumber >=65 && faveNumber <=89) {
  console.log("Medium-ish number!")
}
else {
  console.log("Small number!")
}