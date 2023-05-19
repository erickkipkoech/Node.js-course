const EventEmitter=require('events');

//Create class
class MyEmitter extends EventEmitter{}

//create object
const myEmitter=new MyEmitter();

//Event Listener
myEmitter.on('event',()=>console.log('Event Fired'))

//init event
myEmitter.emit('event');