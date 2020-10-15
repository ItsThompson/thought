module.exports = app => {
    const thoughts = require('../controllers/thought.controller');
    
    let router = require('express').Router();

    router.get('/', thoughts.findAll);

    router.post('/', thoughts.create); 

    router.get('/:id', thoughts.findOne);
    
    router.delete('/:id', thoughts.delete);

    app.use('/api/thoughts', router);
};