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
