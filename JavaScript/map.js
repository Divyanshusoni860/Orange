let input = [1,2,3,4,5];
function transform(i){
    return i*2;
}
let arr1 = input.map(transform);
console.log(arr1)

let arr2 = input.map(function(n){
    return n+3;
})

console.log(arr2);