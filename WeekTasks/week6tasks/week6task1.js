const dog = {

    name: "Gabar",
    
    activities: ["play", "eat dog food"],
    
    dogFriends: [
    
    {
    name: "Ira",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    },
    {
    name: "Snowy",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
    }
    
    console.log(dog);
    //Adding hieght and weight to dog
    dog["hieght"]=3;
    dog["weight"]=38;
    //Changing name to Gabbar
    dog["name"]="Gabbar";
    //Creating a new array to collect all activities of dogFriends
    l=new Array();
    for(const i of dog["dogFriends"]){
        
        l.push(i["activities"][0])
        l.push(i["activities"][1])

    }
    console.log(l)
    //Dog friend names
    console.log("dog Friends names:\n\n")
    for(const i of dog["dogFriends"]){
        console.log(i["name"])
    }
    //Finding total  weight of dogFriends
    console.log("\n  TOTAL WEIGHT OF DOG FRIENDS:");
    var w=0
    for(let i of dog["dogFriends"]){
        w=w+i["weight"]
    }
    console.log("weight=",w)
    
    // print activities of all dogs
    for(let i  of dog["activities"]){
        l.push(i)
        
    }
    console.log(l)
    //Adding  activities to DogFriends
    for(const i of dog["dogFriends"]){
        if(i["name"]=="Ira"){
            i["activities"].push("walking")
            i["activities"].push("play games")
        }
        else{
            i["activities"].push("assisting police ")
            i["activities"].push("hunting")
        }

    }
    for(const i of dog["dogFriends"]){
        
        console.log(i["activities"])
       

    }
    //changing furcolor of Ira from white to Brown 
    dog["dogFriends"][0]["furcolor"]="brown";
    console.log(dog)
    
    
    
    
    
    
    
    
    
    
    
    
    
    