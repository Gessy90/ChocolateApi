require('dotenv'). config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser= require('body-parser')



const app = express()

mongoose.connect(process.env.MONGODB_URI)

const chocolateSchema = new mongoose.Schema({
  name: {type: String, required: true},
  ingredients: {type: String, required: true},
  price: {type: Number},
  description: {type: String, required: true}
})
const Chocolate = mongoose.model('Chocolate', chocolateSchema)

app.use(express.static(`${__dirname}/dist`))


app.use(bodyParser.json())

app.get('/api/chocolates', (req,res) => {
  Chocolate
    .find()
    .then(chocolates => res.status(200).json(chocolates))
})

app.post('/api/chocolates',(req,res)=>{
  Chocolate
    .create(req.body)
    .then(chocolates => res.status(201).json(chocolates))
    .catch(err => res.status(422).json(err.errors))
})
// app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req,res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))
