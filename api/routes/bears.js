const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Bear = require('../models/bears.js');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /bears'
    });
});

router.post('/', (req, res, next) => {
    const bear = new Bear({
        name: req.body.name
        
    });
    bear.save().then(result =>{
        console.log(result);
    }).catch(err => console.log(err));

    res.status(201).json({
        message: 'Handling POST requests to /bears',
        createdbear: bear
    });
});

router.get('/:Id', (req, res, next) => {
    const id = req.params.Id;
    Bear.findById(id).exec()
    .then(doc => {
        console.log("from database", doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.put('/:Id', (req, res, next) => {
    res.status(200).json({
        message: 'Updated bears!'
    });
});

router.delete('/:Id', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted bears!'
    });
});

module.exports = router;