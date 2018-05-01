const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect("mongodb://localhost:27017/todoApp",(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB Server');
    }
    console.log("Connected to the mongoDB Server");

    /* db.collection('Todos').deleteMany({text : 'eat lunch'}).then((result)=>{
        console.log(result);
    }) */

    /* db.collection('Todos').deleteOne({text : 'eat lunch'}).then((result)=>{
        console.log(result);
    }) */
    /* db.collection('Todos').findOneAndDelete({completed : false}).then((result)=>{
        console.log(result);
    }) */

    db.collection('Users').find({name : 'Aditya'}).toArray().then((result)=>{
        //db.collection('Users').deleteMany({})
        console.log(result);
    })
})