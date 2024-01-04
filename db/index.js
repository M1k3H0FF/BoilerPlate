const { Client } = require('pg'); //imports the pg module

//supply the db name and location of the database
const client = new Client('postrgres://localhost:5432/boilerplate-dev')
module.exports = {
    client,
}