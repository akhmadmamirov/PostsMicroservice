const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/events', (req, res) => {
    const event = req.body

    axios.post('https://localhost:4000/events', event).catch(err => console.log(err))
    axios.post('https://localhost:4001/events', event).catch(err => console.log(err))
    axios.post('https://localhost:4002/events', event).catch(err => console.log(err))

    res.send({staus: 'OK'})
})

app.listen(4005, () => {
    console.log('Listening on Port: 4005')
})