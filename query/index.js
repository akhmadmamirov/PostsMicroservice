const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.post('/events', (req, res) => {
    const {type, data} = req.body;

    if (type === 'PostCreated') {
        const {id, title} = data;
        posts[id] = {id, title, comments: []};
        
    }
    if (type === 'CommentCreated') {
        const {postId, content, id} = data;
        const post = posts[postId];
        post.comments.push({id, content})
    }

    res.status(200).send({});
})

app.get('/posts', (req, res) => {
    res.status(200).send(posts)
})

app.listen(4002, () => {
    console.log('Listening on port: 4002');
})