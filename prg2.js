var os = require('os');

console.log("OS CPU Architecture: " +
os.arch());

console.log("Free memory system: " +
os.freemem());

console.log("Total memory of the system: " +
os.totalmem());

console.log("Os Platform: " +
os.platform());

console.log("Information about the current user: " +
os.userInfo());
