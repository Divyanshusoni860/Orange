const express = require("express");
const app = express();

const users = [{
    name : "joe",
    kidneys : [{
        healthy : false
    }]
}];

app.get("/",function(req,res){
    const joeKidneys = users[0].kidneys;
    const numberOfKidneys = joeKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i=0; i<joeKidneys.length; i++){
        if(joeKidneys[i].healthy){
            numberOfHealthyKidneys+=1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.use(express.json());

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    });
    res.json({
        msg:"Done!"
    });

})

app.put("/",function(req,res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true; 
    }
    res.json({
        msg:"Repaired!"
    });
});

app.delete("/",function(req,res){
    const newKidney = [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy==true){
            newKidney.push({
                healthy:true
            });
        }
    }
    users[0].kidneys = newKidney;
    res.json({
        msg:"done!"
    });
});

app.listen(3000)