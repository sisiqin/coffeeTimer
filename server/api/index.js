'use strict'
const api = require('express').Router()

//routes
api.use('/history', require('./history'))


//endware
api.use(function (req, res) {
	res.status(404).end();
});
  
//export api
module.exports = api