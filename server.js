const express = require('express');
const mustache = require('mustache-express');
const data = require("./data.js");

var application = express();

application.engine('mustache', mustache());
application.set('views', './views');
application.set('view engine', 'mustache');

application.use('/public', express.static('./public'));

application.get('/', (request, response) => {
    console.log(data.job);
    response.render('index', data);
});

 application.get('/:id', function(request, response) {
    var id = parseInt(request.params.id);
    var singleRobot = data.users.filter(function(obj, index){
        if(obj.id === id){
            return true
        }else {
            return false
        }
    })

    response.render('user', singleRobot[0]);
  });

application.listen(3000);