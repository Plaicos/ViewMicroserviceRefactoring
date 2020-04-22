var events = require('events');

module.exports = class Events {

    static EventEmitter;

    static InitializeStaticProps() {
        this.EventEmitter = new events.EventEmitter();
    }
    
}