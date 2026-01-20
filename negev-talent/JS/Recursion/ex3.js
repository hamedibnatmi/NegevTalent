// (arr2.push(arr1.unshift()))

function swap(arr1, arr2) {
    if (arr1.length === 0) return;
    arr2.push(arr1.shift());
    return swap(arr1, arr2);
}
const arr1 = [1, 2, 3]
const arr2 = [5, 4]
swap(arr1, arr2)
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);

