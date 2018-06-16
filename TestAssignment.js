var dataset = [
  {type: "apple", color: "green", weight: "100"}
];

var test01 = "type = apple and color = green";
var test02 = "color = red and weight > 50";
var test03 = "type = pear";

/* Main function. Finds item in dataset, if it exists, and returns it to console.*/
public function FindItem(string) {
  var temp = "";
  var arg01 = "";
  var arg02 = "";
  var toReturn;

  string = string.replace(/\s/g, "");

  if (string.includes("and")){
    temp = string.split("and");


    var arg01 = temp[0].split(/[=<>]+/); //Could be iterated through, but since there's only 2 instances, I thought it easier not to.
    var arg02 = temp[1].split(/[=<>]+/);

    toReturn = IterateDatasetDouble(arg01, arg02);

  } else {
    arg01 = string.split(/[=<>]+/);
    toReturn = IterateDataset(arg01);
  }

  return toReturn;
}
/* Helper function. Iterates through the dataset.*/
private function IterateDataset(arg){
  for (var i = 0; i < dataset.length; i++) {
    if (dataset[i][arg[0]] == arg[1]){
      return dataset[i];
    } else {
      return "Item could not be found in dataset.";
    }
  }
}

/* Helper function. Simplifies iteration with two arguments*/
private function IterateDatasetDouble(arg1, arg2){
  var a = IterateDataset(arg1);
  var b = IterateDataset(arg2);

  if (a == b){
    return a;
  } else {
    return "Item could not be found in dataset.";
  }
}

console.log(FindItem(test01)); //Expected result: {type: "apple", color: "green", weight: "100"}
console.log(FindItem(test02)); //Expected result: "Item could not be found in dataset."
console.log(FindItem(test03)); //Expected result: "Item could not be found in dataset."
