var MongoClient=require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/test",
	'Todo-App',
	(err,db)=>{
		if(err){
			return console.log("Error while connecting to database..",err);
		}

		console.log("Connected to database successfully.");

		db.close();
		console.log("Database connection closed.");
	});