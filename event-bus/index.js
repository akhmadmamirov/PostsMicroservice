const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.post('/events', (req, res) => {
    const event = req.body

    axios.post('http://localhost:4000/events', event).catch(err => console.log(err))
    axios.post('http://localhost:4001/events', event).catch(err => console.log(err))
    axios.post('http://localhost:4002/events', event).catch(err => console.log(err))

    res.status(200).send({status: 'OK'})
})

app.listen(4005, () => {
    console.log('Listening on Port: 4005')
})