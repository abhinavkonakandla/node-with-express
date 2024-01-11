const eventEmitter = require('events')

const obj = new eventEmitter()

// Here we have two functions 
//  on() -- to listen the event
//  emit() -- to emit the event

obj.on('talking', ()=>{
    console.log(`data received`);
})

obj.emit('talking')