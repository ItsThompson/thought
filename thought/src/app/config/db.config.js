// API_USERNAME=USERNAME API_PASSWORD=PASSWORD node server
const username = process.env.API_USERNAME;
const password = process.env.API_PASSWORD;
const collectionName = 'thoughts';

module.exports = {
    url: `mongodb+srv://${username}:${password}@thought.dstuc.mongodb.net/${collectionName}?retryWrites=true&w=majority`
};