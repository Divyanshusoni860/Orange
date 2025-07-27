function adder(a,b){
    return a+b;
}
let sum = adder(3,5);
console.log(sum)

function get_length(str){
    return str.length;
}
const str = "Hello world!";
console.log(get_length(str));

function find_index(str,target){
    console.log(str.indexOf(target));
}
find_index(str,"!") // the indexOfLast give position of last taroget string

// slicing
console.log("The silced elemnts are: ",str.slice(6,12));

// or we can slice using a user defined function

function cut_it(str,start,end){
    let new_str = "";
    for(let i = 0; i<str.length; i++){
        if(i>=start && i<end){
            new_str =new_str+str[i];
        }
    }
    return new_str;
}

let new_str = cut_it(str,2,12)
console.log(new_str)

function replace_it(str,target,replacement){
    console.log(str.replace(target,replacement));
}

replace_it("Hello world!","world!","javascript")

console.log("Hello#world!#Good#Morning".split("#"))

console.log("   Hello World!   ".trim())

console.log("Hello world!".toUpperCase())

console.log("Hello World!".toLowerCase())