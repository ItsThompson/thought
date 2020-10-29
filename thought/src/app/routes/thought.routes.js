const cors = require("cors");

module.exports = app => {
    const thoughts = require('../controllers/thought.controller');
    
    let router = require('express').Router();

    router.get('/:count', cors(), thoughts.findLimit);

    router.post('/', cors(), thoughts.create); 

    router.get('/:id', cors(), thoughts.findOne);
    
    router.delete('/:id', cors(), thoughts.delete);

    app.use('/api/thoughts', cors(), router);
};
