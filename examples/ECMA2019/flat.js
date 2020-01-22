const a = [1, 2, 3];
console.log(a);

a[5] = 5;
console.log(a);

a.flat();
console.log(a);

const a2 = [1, 2, 3, [4], [5, [6]]];
a2.flat();
console.log(a2);

a2.flat();
console.log(a2);
