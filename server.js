var express = require('express');  
var app = express();  
var port = process.env.port || 1337;  


const data = async ()  =>
{
    // var request = require('request');
    //     app.get('/product', function(req, res) {
    //         request('https://reqres.in/api/unknown', function(error, response, body) {
    //             res.json(body)
    //         });
    //     });
    await app.get("/product",function(request,response)  
    {  
        // setTimeout(function () {
    
        //     response.json({"Message":"Welcome to Node js"});  
    
        // },2000);

        //response.json(got);  
        // request('https://reqres.in/api/unknown', function(error, response, body) {
        //     response.json(body)
        // });
        response.json({"Message":"Hi...Rishu"});  

    });  

    //response.json({"Message":"Hi...Rishu"}); 
}

data();
  
app.listen(port, function () {  
    var datetime = new Date();  
    var message = "Server runnning on Port:- " + port + "Started at :- " + datetime;  
    console.log(message);  
}); 

