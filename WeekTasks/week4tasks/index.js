const companies=[
    { nameofcompany : "Company One", Category:"Finance" , start:1981 , end:2004 },
    { nameofcompany : "Company Two",Category:"Retail",start:1992,end:2008 },
    { nameofcompany : "Company Three",Category:"Auto",start:1999,end:2007 },
    { nameofcompany : "Company Four",Category:"Retail",start:1989,end:2010 },
    { nameofcompany : "Company Five",Category:"Tech",start:2009,end:2014 },
    { nameofcompany : "Company Six",Category:"Finance",start:1987,end:2010 },
    { nameofcompany : "Company Seven",Category:"Auto",start:1986,end:1996 },
    { nameofcompany : "Company Eight",Category:"Tech",start:2011,end:2016 },
    { nameofcompany : "Company Nine",Category:"Retail",start:1981,end:1989 },
];
const ages=[33,14,20,16,5,54,21,44,61,13,15,42,25,64,32];
const person={
    name:"Costas",
    address:{
        street:"Lalaland 12"
    }
};

console.log("company names using forEach are:");
companies.forEach((n) => {
    console.log(n.nameofcompany);
});
console.log("\ncompany names that are statred after 1987:");
companies.forEach((n) =>{
    if(n.start>1987){
        console.log(n.nameofcompany);
    }
});
