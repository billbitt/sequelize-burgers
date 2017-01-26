// import and set up express 
var express = require("express");
var router = express.Router();

//import the model 
var db = require("../models");

//create routes on the router 
// route to get all burgers 
router.get("/", function(request, response){
    db.Burger.findAll({}).then(function(data){
        var handlebarsObject = {
            burgers: data
        };
        response.render("index", handlebarsObject)
        //response.send(data);
    });
});

// route to add a new burger 
router.post("/api", function(request, response){
    //check to make sure name is not empty
    if (name === ""){
        console.log("post request contained an empty burger name");
        response.redirect("/");
    } else {
        db.Burger.create({
            name: request.body.burgerName, 
            description: request.body.burgerDescription
        }).then(function(){
            response.redirect("/");
        });
    };
});

router.put("/api/eat/:id", function(request, response){
    db.Burger.update({
        eaten: true
    }, {
        where: {
            id: request.params.id
        }
    }).then(function(){
        response.redirect("/");
    });
});

router.put("/api/no-eat/:id", function(request, response){
    db.Burger.update({
        eaten: false
    }, {
        where: {
            id: request.params.id
        }
    }).then(function(){
        response.redirect("/");
    });
})

router.put("/api/update/:id", function(request, response){
    //the values from the form will come through in the request body 
    db.Burger.update({
        name: request.body.burgerName,
        rating: request.body.burgerRating,
        notes: request.body.burgerNotes
    }, {
        where: {
            id: request.params.id
        }
    }).then(function(){
        response.redirect("/");
    });
});

router.delete("/api/:id", function(request, response){
    var id = request.params.id;
    db.Burger.destroy({
        where: {
            id: idToDelete
        }
    }).then(function(){
        response.redirect("/");
    });
});

//export the router
module.exports = router;