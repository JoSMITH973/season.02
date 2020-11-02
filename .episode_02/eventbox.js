const EventEmiter = require('events');
const myEmitter = new EventEmiter();

module.exports = function withArgs(array) {
    
    myEmitter.on('newFellow', name => {
        console.log(name, 'will be at the event is tonight');
    });
        
    array.forEach(name => {
        myEmitter.emit('newFellow', name);
    });
};
