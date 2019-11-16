
const bodyParser = require('body-parser')
const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const path =require('path');
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"/dist/front/index.html"));
});

app.use(express.static( "public"));
app.listen(process.env.PORT || 3000,()=>{console.log('server on')});


var multer  =   require('multer');
const user=require('./model');

mongoose.connect('mongodb+srv://abilash:Abi%40243324@cluster0-0uf0g.mongodb.net/shoppingDB',{useNewUrlParser:true})
.then(()=> console.log('connect dB'))
.catch(()=> console.log('connect not dB')
);

app.use(cors());

// Tell the bodyparser middleware to accept more data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.post('/', (req, res)=> {
  
  var useradd = new user(req.body);
  
  bcrypt.hash(useradd.password, 10, function(err, hash) {
    
    useradd.password = hash;
    
    useradd.save()
    .then(item => {
      res.send(item);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
    
  });
});
app.get('/log', (req, res)=> {
 
  user.find((err,doc)=> {
    
    res.json(doc);
  });
});
finame:String;
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/photo')
    },
    filename: function (req, file, cb) {
        
      cb(null, file.originalname )
    }
  })
  
  var upload = multer({ storage: storage })
//our file upload function.
app.post("/photo", upload.array("photo",12), function(req, res) {
   
    console.log("req.files");
    res.send(req.files);
    
});


app.post('/login', (req, res)=> {
  resulting:{};
user.findOne( {
              username: req.body.username
                 }
     ).then(function (user1) {
      
         if (!user1) {
            res.send(false);
         } else {
bcrypt.compare(req.body.password, user1.password, function (err, result) {
 
        if (result == true) {
      token=jwt.sign({username:req.body.username},'serectkey',{expiresIn:'1m'});
      resulting={auth:true,token:token}
            res.send(resulting);
        } else {
         res.send(false);
        
        }
      });
     }
  });
 });

app.use((req, res, next)=>{
  
  jwt.verify(req.headers.authorization,'serectkey',(err, decode)=> {
  if(err){
    console.log('No Headers');
  }else{
  if(decode){
req.body.username=decode.username;
}
else{
  console.log('expires');
  req.body.username='';
}
  }
});
  next();
});


 app.get('/home', (req, res)=> {


  if(req.body.username){

res.send(true);
}
else{
  
  res.send(false);
}


  
});


