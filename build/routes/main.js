// the main.js file will have the general routes like login, signup 
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello world')
})

// login route
// lets a user login using their credentials
router.post('/login', (req,res) => {

})

// signup route
// lets a user signup and create a new account
// current social graph will not support multiple users in a single node
// each node will have only one user, and these single user nodes will connect to create the netowrk
// but i hope to add the multi user ability in future
router.post('/signup/', (req,res) => {

})

module.exports = router