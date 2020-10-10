const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// API_USERNAME=USERNAME API_PASSWORD=PASSWORD node server
const username = process.env.API_USERNAME;
const password = process.env.API_PASSWORD;

const dbName = 'thought';
const collectionName = 'thoughts';

const connection = (closure) => {
    // mongodb+srv://<username>:<password>@thought.dstuc.mongodb.net/<dbname>?retryWrites=true&w=majority
    return MongoClient.connect(`mongodb+srv://${username}:${password}@thought.dstuc.mongodb.net/${collectionName}?retryWrites=true&w=majority`, 
    {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        if(err) return console.log(err);
        const db = client.db(dbName);
        closure(db);
    })
};

const sendError = (err,res) => {
    request.status = 501
    request.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

let response = {
    status : 200,
    data : [],
    message : null
};

router.get('/thoughts', (req, res) => {
    connection((db) => {
        db.collection('thoughts')
            .find()
            .toArray()
            .then((thoughts) => {
                response.data = thoughts;
                res.json(response);
            })
            .catch((err) => {
                sendError(err,res);
            });
    });
});

module.exports = router;