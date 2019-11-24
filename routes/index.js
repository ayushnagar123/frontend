var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',(req,res)=>
{
  res.render('login')
})

router.get('/signup',(req,res)=>
{
  res.render('signup')
})

router.post('/login',(req,res)=>
{
  name = req.body.name;
  pass = req.body.pass;
  console.log(name,pass)
})

router.post('/signup',(req,res)=>
{
  name = req.body.name;
  pass = req.body.pass;
  confirm = req.body.confirm_pass;
  if(pass == confirm)
    res.write('Successful')
  else
    res.write('Unsuccessful')
  res.end()
})
module.exports = router;
