var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard')
});

router.get('/predict',(req,res,next)=>{
  axios.get('https://smart-flask-list.herokuapp.com/ml/predict')
    .then(res=>res.data)
    .then(result=>res.render('automate',{
      result:result
    }))
})

module.exports = router;
