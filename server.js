// requie express.
const express = require('express')
// require pug as a view model
const pug = require('pug')
// require multer
var multer = require('multer')
var upload = multer({dest: 'uploads/', inMemory: true})
// var upload = multer()
// var upload = multer({ dest: 'uploads/' })

// initiate the express app.
const app = new express()
// set the port the app will run on local or  on the host.
app.set('port', (process.env.PORT || 3000))
// listen to the appropriate port for requests.
app.listen(app.get('port'), ()=> {
  console.log(`Houston we are a go on port ${app.get('port')}`);
})
// set where to find the views
app.set('views', `${__dirname}/appViews`)
//set the app view engine -> pug in this case.
app.set('view engine', 'pug')
//respond to the home / route.
app.get('/', (req, res)=> {
  res.render('index', {size: '12345kbytes'})
})

app.post('/', upload.any(), (req, res, next)=>   {
  const file = req.files[0];
  res.send({"file size in bytes": file['size']})
})
