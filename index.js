// Events Module
// Node.js has a built-in module, called "Events",
// Where you can Create, Fire and listen for- your own events

// Example 1: Registering for the event to be fired only one time using once.

// Example 2: Create an event emitter instance and register a couple of callbacks.

// Example 3: Registering for the event with callback parameter



const EventEmitter = require ("events");

const event = new EventEmitter();

event.on("Checkpage",(sc, msg) => {
  console.log(`staus code is ${sc} and the page is ${msg}`);
});

event.emit("Checkpage", 200, "ok");

// event.on("SayMyname", () => {
//     console.log(" Your name is Ravi");
// });

// event.on("SayMyname", () => {
//     console.log(" Your name is Prajapati");
// });

// event.on("SayMyname", () => {
//     console.log(" Your name is botad");
// });

// event.emit("SayMyname");



