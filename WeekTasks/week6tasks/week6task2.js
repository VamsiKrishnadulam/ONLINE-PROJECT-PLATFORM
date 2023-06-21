obj={name : "Raj", age : 25, hasPets : true}
function print_keys(obj){
    console.log(Object.keys(obj));
}
//print_keys(obj);

//using arrow function

print_keys1 = (obj)=>{
    console.log(Object.keys(obj));
}

print_keys1(obj)