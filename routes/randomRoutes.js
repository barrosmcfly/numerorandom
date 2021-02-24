const express = require('express')
const RandomController = require('../controllers/randomController')
let api = express.Router()

api.get('/', (req,res)=>{
    res.status(200).send('hola')
})
// http://localhost:3000/api/random
api.get('/random/', RandomController.getRandom);
// http://localhost:3000/api/random/1000
api.get('/random/:val', RandomController.getRandomTo);
// http://localhost:3000/api/randombetween/?min=xxx&max=yyy
api.get('/randombetween/', RandomController.getRandomBetween);

module.exports = api
