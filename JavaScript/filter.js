let arr = [1,2,3,4,5,6,7,8,9,10];

function filter_even(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

let ans1 = arr.filter(filter_even);
console.log(ans1);

let ans2 = arr.filter(function(n){
    return n%2!=0;
})

console.log(ans2)