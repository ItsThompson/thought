module.exports = app => {
    const thoughts = require('../controllers/thought.controller');
    
    var router = require('express').Router();

    router.post('/', thoughts.create);

    router.get('/', thoughts.findAll);
    
    router.get('/:id', thoughts.findOne);

    router.delete(':id', thoughts.delete);

    app.use('/api/thoughts', router);
};