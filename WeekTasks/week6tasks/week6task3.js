var obj2 = {name: "ISRO", age: 35, role: "Scientist"};

function key_val(obj2){
    
    console.log(Object.entries(obj2))
}
//key_val(obj2)

key_val2 = (obj2) => {
    console.log(Object.entries(obj2))
}
key_val2(obj2)