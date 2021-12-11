// ===========Required packages===============


const bodyParser = require("body-parser")
const express=require("express")
const app=express()
app.use(bodyParser.urlencoded({extended:true}));

//app.set('view engine', 'ejs');

app.use( express.static( "public" ) );



// =====================================



// Files passed in app.get()





app.get("/",function(req,res){
    res.sendFile(__dirname +"/signup.html")  // sign up page
})


app.get("/home",function(req,res){ 
    res.sendFile(__dirname+ "/home.html")  /// homo page
})


app.get("/contactus",function(req,res){
    res.sendFile(__dirname+"/contactus.html")
})


app.get("/aboutus",function(req,res){
    res.sendFile(__dirname+"/aboutus.html")
})



app.get("/blogs",function(req,res){
    res.sendFile(__dirname+"/blogs.html")
})


app.get("/login",function(req,res){
    res.sendFile(__dirname+"/login.html")
})



app.post("/",function(req,res){


    let name =req.body.nameOfUser;
    console.log(name);
    let email=  req.body.emailOfUser;
    console.log(email);
    
    
    res.redirect("/home")
})






// =================================================





app.listen(3000,function(req,res){
    console.log("The server is running on port 3000");
})