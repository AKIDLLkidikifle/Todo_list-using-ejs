const express = require("express");
const bodyparser = require("body-parser");
const day = require(__dirname+ "/date.js")

const app = express();

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

var newTodo = ["Buy food", "Cook food", "Eat food"];
var workLists = [];

app.get("/", function(req, res){
    res.render("list", {title: day.getDate(),addedElement: newTodo}); 
});

app.get("/work", function(req, res){
    res.render("list", {title:"work_list", addedElement: workLists})
})

app.get("/about", function(req, res){
    res.render("about")
})

app.post("/", function(req, res){
    if(req.body.list=="work_list"){
        newItem = req.body.todo;
        workLists.push(newItem);
        res.redirect("/work");
    }
    else{
        newItem = req.body.todo;
        newTodo.push(newItem);
        res.redirect("/");
    }
   

});

app.get("/contact", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.listen(8000, function(){
    console.log("app is running on port number 3000");
});
