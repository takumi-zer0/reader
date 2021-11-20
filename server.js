const express = require('express')
const app = express()
var http = require('http').Server(app);
var socketio = require('socket.io')(http);

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

var io = socketio.listen(4000);

io.on("connection", socket => {
    console.log("helloe")

    socket.on("number", (data) => {
        console.log(data.num)

        socket.broadcast.emit('update', {number: data.num})
    })
})


const PORT = 3000

http.listen(process.env.PORT || 3000, function () {
    console.log('server listening. Port:' + PORT);
});