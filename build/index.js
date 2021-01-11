const experess = require('express')
const app = experess()
const port = 3000

const maniRoutes = require('./routes/main.js')
app.use(maniRoutes)

app.listen(port, () => {
  console.log('App is listening to port 3000')
})