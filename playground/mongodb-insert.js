var {MongoClient,ObjectId}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017/test",
	(err,db)=>{
		if(err){
			return console.log("Error while connecting to database..",err);
		}
		console.log("Connected to database successfully.");
		/*db.collection("Todos")
		  .insertOne({
		  	text:'Wash Dishes',
		  	completed:false }
		  ,(err,res)=>{
		  	if(err){
              return console.log("Error occured while inserting a new record--", err);
          }
              console.log("added record to User Document successfully", res.ops);
             });
         */
             
/*          db.collection("Users")
             .insertOne({
             	name:'amit',
             	age:25,
             	location:'Mumbai'}
             ,(err,res)=>{
             	if(err){
             		return console.log("Error while adding record to User Document", e);
             	}
                console.log("added record to User Document successfully", res.ops);
             });*/


		//db.close();
		// /console.log("Database connection closed.");
	});

