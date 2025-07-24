console.log("hello world");
let a = 1;
let b = a*4;
console.log(a+b);

// loops

let answer = 1;

for(let i=0;i<10;i++){
    answer+=answer;
}
console.log(answer)

let arr = [20,30,45,69,78];
for(let i = 0; i<arr.length; i++){
    if(arr[i]%10==0){
        console.log(arr[i])
    }
}