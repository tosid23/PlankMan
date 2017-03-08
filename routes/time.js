var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://plankman_admin:<passsword>@ds121980.mlab.com:21980/plankman',['PlankTime'])


//Get all user objects

router.get('/time',function(req,res,next){
    db.PlankTime.find(function(err, time){
       if(err){
           res.send(err);
       }
        res.json(time);
    });
});


module.exports = router;

//Get single object
router.get('/time/:id',function(req,res,next){
    db.PlankTime.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, time){
       if(err){
           res.send(err);
       }
        res.json(time);
    });
});


//Save time to DB

router.post('/time',function(req,res,next){
    
   var time = req.body;
    if(!time.time){
        res.status(400);
        res.json({
           "error":"bad data"
        });
    }
    else{
        db.PlankTime.save(time,function(err, time){
            if(err){
                res.send(err);
            }
            res.json(time);
        });
    }
});

// Delete time

router.delete('/time/:id',function(req,res,next){
    db.PlankTime.remove({_id: mongojs.ObjectId(req.params.id)},function(err, time){
       if(err){
           res.send(err);
       }
        res.json(time);
    });
});



module.exports = router;