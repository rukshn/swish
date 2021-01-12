// SWISH, a decentralized, federated social graph
// Created by Rukshan Ranatunge - arkruka@gmail.com
// loosely based on the frediverse
// the socialgraph.js is the core of the socialgraph, 
// each user will have an inbox and an outbox endpoint,
// each inbox and outbox endpoint will have both get and post request end points

const express = require('express')
const router = express.Router()

// inbox routes
router.get('/:user/inbox', (req,res) => {

})

router.post('/:user/inbox', (req,res) => {

})

// outbox routes
router.get('/:user/outbox', (req,res) => {

})

router.post('/:user/outbox', (req,res) => {

})

// followers and following
// the followers and following routes will retrive the connected following and followe nodeds
router.get('/:user/followers', (req,res) => {

})

router.get('/:user/following', (req,res) => {
  
})

// feed
// the feed route will connect with the 

module.exports = router 