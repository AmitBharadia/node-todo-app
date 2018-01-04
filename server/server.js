const express=require('express');
const bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');


var app=express();

app.use(bodyParser.json());

app.post('/todo',(req,res)=>{
    var todo=new Todo({
    	text:req.body.text,
    	completed:req.body.completed,
    	completedAt:req.body.completedAt
    });

    todo.save().then((doc)=>{
    	res.send(doc)
    },(err)=>{
    	res.send(e);
    	console.log("Error while saving Todo item");
    });

});


app.get('/todos',(req,res)=>{
    Todo.find().then((doc)=>{
 	res.send(doc);
    },(err)=>{
    res.send(err);	
    });
});

app.listen(3000,()=>{
 console.log("Server started on port 3000");
});

/*
var Todos=mongoose.model('todos',{
    text:{
    	type:String,
    	required:true,
    	trim:true,
    	minlength:1
    },completed:{
    	type:Boolean,
    	default:false
    },completedAt:{
    	type:Number,
    	default:null
    }
});

var Users=mongoose.model('users',{
  email:{
  	type:String,
  	require:true,
  	minlength:1,
  	trim:true
  }
});*/

/*var newTodo=new Todos({
	text:'Amit',
	completed:false,
	completedAt:1
});

var newUser=new Users({
    email:'amitbharadia44@gmail.com'
});

newTodo.save()
	   .then(
	   	(doc)=>{
	   	 console.log(" Successfully saved Todo item", doc);		
	   	},(e)=>{
	   	 console.log("Error while saving Todo item ",e);	
	   	});
newUser.save()
	   .then(
	   	(doc)=>{
	   	  console.log("Successfully saved a User record",doc);	
	   	},(err)=>{
	   	  console.log("Failed while saving a User record",err);		
	   	});*/

