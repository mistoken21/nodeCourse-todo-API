const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect("mongodb://localhost:27017/todoApp",(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB Server');
    }
    console.log("Connected to the mongoDB Server");

    /* db.collection('Todos').find({_id : ObjectID("5ad9cb094bf4a7d7de2b3104")}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("unable to fetch data",err)
    }) */

    /* db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    },(err)=>{
        console.log("unable to fetch data",err)
    })  */

    db.collection('Users').find({name : 'Aditya'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("unable to fetch data",err)
    })
    //db.close();
})