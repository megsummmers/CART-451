//import the Express library
let express = require('express');
const portNumber =4200;
let app = express(); //make an instance of express
let server = require('http').createServer(app);  // create a server (using the Express framework object)
 // serving static files
let static = require('node-static'); // for serving static files (i.e. css,js,html...)
//import Mongodb
let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://m_summ:CART451project@clustercaricature.v48higs.mongodb.net/test";

let bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// serve anything from this dir ...
app.use(express.static(__dirname + '/public'));

//default route
app.get('/', function(req, res){
  res.send('<h1>Wrong link, add /home to head on over!</h1>');
});

//home route
app.get('/home', function(req, res){
  res.sendFile(__dirname + '/public/Home.html');
});

//draw for game route
app.get('/draw', function(req, res){
  res.sendFile(__dirname + '/public/CanvasGame.html');
});

//create profile route
app.get('/profile', function(req, res){
  res.sendFile(__dirname + '/public/ProfileCreate.html');
});

//draw for profile
app.get('/drawYourself', function(req, res){
  res.sendFile(__dirname + '/public/ProfileCanvas.html');
});

//view your profile route
app.get('/viewProfile', function(req, res){
  res.sendFile(__dirname + '/public/ProfileView.html');
});

//view your profile route
app.get('/gallery', function(req, res){
  res.sendFile(__dirname + '/public/Gallery.html');
});
 
// make server listen for incoming messages
server.listen(portNumber, function(){
  console.log('listening on port:: '+portNumber);
});

/// receive the post
app.post('/postForm',handlePost);
/// receive the post
app.post('/postIMG',handleIMGPost);
// query var route
app.use('/varsToMongo',handleGetVars);
// query user info
app.use('/varsToMongoRand',handleGetRandVars);
// query img route
app.use('/imgToMongo',handleGetImg);


// push profile info into mongo
function handlePost(request,response){
  console.log(request.body);
  response.send("SUCCESS POST");
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var accesDB = db.db("clustercaricature");
    var myobj = request.body;
    accesDB.collection("Users").insertOne(myobj, function(err, res){
      if(err) throw err;
      console.log("inserted doc");
      db.close();
    })
  });
}

// push image into mongo
function handleIMGPost(request,response){
  console.log(request.body);
  response.send("SUCCESS POST");
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var accesDB = db.db("clustercaricature");
    var myobj = request.body;
    accesDB.collection("Drawings").insertOne(myobj, function(err, res){
      if(err) throw err;
      console.log("inserted doc");
      db.close();
    })
  });
}

//query text
async function handleGetVars(request,response,next){
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var accesDB = db.db("clustercaricature");
    accesDB.collection("Users").find(request.query).toArray(function(err, res){
      if(err) throw err;
      console.log(res);
      response.send(res);
      db.close();
    })
  });
}

//query image
async function handleGetImg(request,response,next){
  console.log(request.query);
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var accesDB = db.db("clustercaricature");
    accesDB.collection("Drawings").find(request.query).toArray(function(err, res){
      if(err) throw err;
      console.log(res);
      response.send(res);
      db.close();
    })
  });
}

//query random text
async function handleGetRandVars(request,response,next){
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var accesDB = db.db("clustercaricature");
    accesDB.collection("Users").aggregate([{ $sample: {size: 1} }]).toArray(function(err, res){
      if(err) throw err;
      console.log(res);
      response.send(res);
      db.close();
    })
  });
}

//query random images
async function handleGetRandIMG(request,response,next){
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var accesDB = db.db("clustercaricature");
    accesDB.collection("Drawings").aggregate([{ $sample: {size: 1} }]).toArray(function(err, res){
      if(err) throw err;
      console.log(res);
      response.send(res);
      db.close();
    })
  });
}