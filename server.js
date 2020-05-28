const mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/customercalls", {useNewUrlParser: true, useUnifiedTopology: true},(error,client)=>{
    if (error) {
        throw error;
    }

    console.log("mongdb connected..");
    let resultArry=[];
    let db = client.db('customercalls');
    let list = db.collection('unhandledcases');

    let itemCounter = 0
    list.countDocuments().then((res)=>{
        itemCounter = res;

        if(itemCounter > 0){
            console.log("there is one");
            list.updateOne(
                {_id:1},
                {
                    $set:{
                        case: "replaced with new one"
                    }
                }
            )
        }else{
            
            //writing document
            list.insertOne({_id:1, case: "1 2 3 4 5"});
        }
    });
    
    
        
    

       
  
    
});