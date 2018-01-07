const MongoClient=require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/Todo",
	(err,db)=>{
		if(err){
			return console.log("Error while connecting to database..",err);
		}

		console.log("Connected to database successfully.");

		db.collection('todos').findOneAndUpdate({
			text:'Clean Room'
		},{
			$set:{
				completed:true
			},
			$inc:{
				completedAt:5
			}
		},{
			returnOriginal:false
		}).then((doc)=>{
			console.log("Updated Document : ", doc);
		}).catch((e)=>{
			console.log("Error occured : ", e);
		});

		//db.close();
		//console.log("Database connection closed.");
	});