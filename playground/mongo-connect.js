const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/todoApp",(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB Server');
    }
    console.log("Connected to the mongoDB Server");

    /* db.collection("Todos").insertOne({
        name : 'Aditya',
        age : 22
    },(err,result)=>{
        if(err){
            return console.log("cannot insert todos",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    }) */

    /* db.collection('Users').insertOne({
        name : 'Aditya',
        age : 22,
        location : 'Indore'
    },(err, result)=>{
        if(err){
            return console.log("Can't insert",err);
        }
        //console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    }) */
    db.close();
})