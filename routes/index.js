var express = require('express');
var router = express.Router();
var unirest = require('unirest');

// Get Homepage
router.get('/', function(req, res){
	res.render('index');
});

router.post('/searchresult',(req,res,next)=>{
	var contry = req.body.search;
	unirest.get("https://restcountries-v1.p.rapidapi.com/name/"+contry)
        .header("X-RapidAPI-Host", "restcountries-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", "e0584101dcmsh28c0bd8cc908699p1d86a1jsn16dec230480c")
        .end(function(result) {
            console.log("Bhaiya kam to karna chahiye");
            console.log(result.body);
            res.json(result.body);
        });
})

module.exports = router;