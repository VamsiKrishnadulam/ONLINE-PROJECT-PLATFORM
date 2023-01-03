const fifa_scores= [

    { name: "Kylian Mbappe" },
    
    { name: "Messi" },
    
    { name: "Olivier" },
    
    { name: "Julain" },
    
    { name: "Marcus" }
    
    ];
scores=[5,5,4,4,3];
var i=0;
fifa_scores.map(function(obj1){
    obj1["Hero"]=obj1["name"]
    obj1["goals"]=scores[i];
    i=i+1;
    delete obj1["name"];
})
console.log(fifa_scores)
