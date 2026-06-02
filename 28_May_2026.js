const arr = [110, 230, 454, 323];

const arr1 = arr.map(num => num * 2);
const arr2 = arr.filter(item => item > 200);
const arr3 = arr.reduce((acc, curr) => acc + curr, 0);

console.log(arr1);
console.log(arr2);
console.log(arr3);

// if we use {} in map, filter, reduce, it will return undefined if we don't use return statement. So we need to use return statement in that case.

const arr4 = arr.map(num => {
    num*2;
})
console.log(arr4); // [undefined, undefined, undefined, undefined]

const arr5 = arr.map(num => {
    return num*2;
});

console.log(arr5); // [220, 460, 908, 646]

const objectArr = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
]

objectArr.map(obj => obj.age * 2); // [60, 50]
console.log(objectArr);