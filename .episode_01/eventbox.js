const EventEmiter = require('events');
const myEmitter = new EventEmiter();

module.exports = function empty() {
    
    myEmitter.on('hi', () => {
        console.log('The event is tonight');
    });
    
    myEmitter.emit('hi');
};
