const express = require('express')

const controller = require('./controllers/messages_controller')
const messages_controller = require('./controllers/messages_controller')


const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', controller.read)
app.post('/api/messages', controller.create)
app.put('/api/messages/:id', controller.update)
app.delete('/api/messages/:id', controller.delete)


const SERVER_PORT = 3001
app.listen(SERVER_PORT, ()=>{
    console.log(`Server listening on port ${SERVER_PORT}`)
})