const {MongoClient,ObjectId}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017/Todo",
  (err,db)=>{
    if(err){
      return console.log("Error while connecting to database",e);
    }

    console.log("Successfully connected to database");
/*
      db.collection('Todos')
      .deleteOne({
        text:'Wash Dishes'
      });
    console.log("Successfully deleted one record");*/

  /*    db.collection('Todos')
      .deleteMany({
        text:'watch 10 videos'
      }).then(()=>{
      console.log("Successfully deleted many record");
      });*/

/*
       db.collection('Todos')
      .findOneAndDelete({
        completed:false
      }).then((doc)=>{
      console.log("Successfully deleted one record : ", doc);
      });
      */

})