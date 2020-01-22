let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
console.log(arr1);
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
console.log(arr1);
// ["it's","Sunny","in", "", "California"]