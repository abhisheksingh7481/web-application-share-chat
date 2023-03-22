const socket = io('http//:localhost:8000');

const form = document.getElementById('send-container');
const massageInput = document.getElementById('massageInp')
const massagecontainer = document.querySelector(".container")

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innertext = message;
    messageElement.classlist.add('message')
    messageElement.classlist.add('position');
    massagecontainer.append('messageElement');


}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = massageInput.Value;
    append(`you:${message}`, 'right');
    socket.emit('send', message);
    massageInput.value = ''

})

const name = prompt("enter your name to join");
socket.emit('new-user-joined', name);

socket.on('user-joind', name => {
    append(`${name}joind the chat`, 'right')

})
socket.on('receive', data => {
    append(`${data.name}: ${data message}`, 'left')
    })

     scoket.on('left',name =>{
    append(`${ name }left the chat`,'right')
})

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const message = massageInput.value;
    append(`you: ${ message }` 'right');
    scoket.emit('send',message);
    massageInput.value =  ''
})


