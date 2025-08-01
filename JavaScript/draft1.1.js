function trim(str){
    let new_str = "";
    for(let i = 0; i<str.length; i++){
        if(str[i]!=" "){
            new_str+=(str[i]);
        }
        else if(str[i-1]!=" " && str[i]==" "){
            new_str+=" ";
        }
    }
    return new_str
}
console.log(trim("     Hello      World"))