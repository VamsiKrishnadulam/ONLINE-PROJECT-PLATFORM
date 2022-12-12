const person={
    named:"Coasts",
    address:{
        street:"Lalaland 12"
    }
};
let {
    address: {
        street
    }
}=person;
console.log(street);
