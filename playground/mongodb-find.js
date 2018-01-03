const {MongoClient,ObjectId}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017/test",
	(err,db)=>{
    if(err){
    	return console.log("Error while connecting to database",e);
    }

    console.log("Successfully connected to database");
    db.collection('Todos')
      .find({
      	text:'wash Dishes'
      })
      .toArray()
      .then((doc)=>{
      	console.log("Found");
      	console.log(doc);
      });
})