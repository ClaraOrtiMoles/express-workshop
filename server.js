var fs = require('fs');
var express = require('express'); 
var formidable = require('express-formidable');
var app = express();

app.use(express.static("public"));
app.use(formidable());

app.get('/my-lovely-endpoint', function(req, res){
    res.send("Hello there!");
});

app.post('/create-post', function(req, res){
   
    fs.readFile(__dirname + '/data/posts.json', function(error, file){
          parsedFile = JSON.parse(file);        
          console.log(parsedFile);
          var jsonMessage = {"1467390356291": req.fields.blogpost};
          console.log(jsonMessage); 
          parsedFile.push(jsonMessage); 
          var result = JSON.stringify(parsedFile);
          console.log(result);
          fs.writeFile(__dirname + '/data/posts.json', result, function(error){
               if (error){
                    console.log(error);
               }
               else{
                   console.log("Saved!")
               }
                
          });
        
    });
    
});
 
app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

