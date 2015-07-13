/* GET question */
exports.question = function (req,res){
    /*Invoca la vista /quizes/question.ejs y le pasa una variable.*/
    res.render('quizes/question', { title: 'Quiz',pregunta: 'Capital de Italia' });
};

/* GET answer */
exports.answer = function (req,res){
    var r = "Incorrecta";
    if (req.query.respuesta.match(/(roma)/i)) {
		    r = "Correcta";
    }
    /*Invoca la vista /quizes/answer.ejs y le pasa una variable.*/
    res.render('quizes/answer', { title: 'Quiz',resultado: r });
};
