//node server which will be handle socket to connections//
const io = ('socket.io')(8000)

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joind', name => {
        console.log("new user", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joind', name);
    });
    socket.on('send', message => {
        socket.broadcast.emit('recevi', { message: message, name: user[socket.id] })
    });

    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];



    })
