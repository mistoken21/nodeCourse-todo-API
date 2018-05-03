const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect("mongodb://localhost:27017/todoApp",(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB Server');
    }
    console.log("Connected to the mongoDB Server");

    db.collection('Users').findOneAndUpdate({_id : new ObjectID('5ad9984f68fc415eb466c708')},{
        $set : {
            name : "pankaj"
        },
        $inc : {
            age : 1
        }
    },{
        returnNewDocument : true
    }).then((result)=>{
        console.log(result);
    })

})