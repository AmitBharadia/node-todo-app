const {MongoClient,ObjectId}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017/Todo",
	(err,db)=>{
    if(err){
    	return console.log("Error while connecting to database",e);
    }

    console.log("Successfully connected to database");
   /* db.collection('Todos')
      .find({
      	text:'Wash Dishes'
      })
      .toArray()
      .then((doc)=>{
      	console.log("Found");
      	console.log(doc);
      },(err)=>{
      	console.log("Error occurred while finding record");
      });*/

      db.collection('todos')
      .find({
      	text:'Clean Room'
      })
      .toArray()
      .then((doc)=>{
      	console.log("Found");
      	console.log(doc);
      },(err)=>{
      	console.log("Error occurred while finding record");
      });
})