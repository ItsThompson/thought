const db = require('../models');
const Thought = db.thoughts;

// Create and Save a new Thought
exports.create = (req, res) => {
    // Handling for invalid request
    if (!req.body.title){
        res.status(400).send({message: 'Content can not be empty!'});
        return;
    }

    const thought = new Thought({
        user: req.body.user,
        title: req.body.title,
        description: req.body.description
    });

    thought
        .save(thought)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || 'Some error occured while creating your thought.'
            });
        });
};

// Retrieve all Thoughts from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: {$regex: new RegExp(title), $options: "i"}}: {};

    Thought.find(condition)
        .sort({date: -1}) //Sorts by date
        .limit(20) //Limits to 20 item
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while finding thoughts.'
            })
        })
};

// Find a single Thought with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Thought.findById(id)
        .then(data => {
            if (!data){
                res.status(404).send({
                    message: 'Thought with id not found, id: ' + id
                })
            }
            else{
                res.send(data);
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({message: 'Error with finding thought with id=' + id});
        });
};

// Delete a Thought with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Thought.findByIdAndRemove(id)
        .then(data => {
            if (!data){
                res.status(404).send({
                    message: `Cannot delete Thought with id=${id}.`
                });
            }
            else{
                res.send({
                    message: 'Thought was deleted.'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not delete Thought with id=' + id
            });
        });
};
