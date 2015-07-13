var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  /*Invoca la vista de entrada index.ejs y le pasa una variable.*/
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res, next) {
  /*Invoca la vista de entrada index.ejs y le pasa una variable.*/
  res.render('author', { title: 'Quiz' });
});

/*Uso del controlador importado*/
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
