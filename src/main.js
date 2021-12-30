const fs = require("fs");
const { term } = require("./utilities/r1mo");

term.bold(`
        ██████╗  ██╗███╗   ███╗ ██████╗       ██████╗  ██████╗ ████████╗
        ██╔══██╗███║████╗ ████║██╔═══██╗      ██╔══██╗██╔═══██╗╚══██╔══╝
        ██████╔╝╚██║██╔████╔██║██║   ██║█████╗██████╔╝██║   ██║   ██║   
        ██╔══██╗ ██║██║╚██╔╝██║██║   ██║╚════╝██╔══██╗██║   ██║   ██║   
        ██║  ██║ ██║██║ ╚═╝ ██║╚██████╔╝      ██████╔╝╚██████╔╝   ██║   
        ╚═╝  ╚═╝ ╚═╝╚═╝     ╚═╝ ╚═════╝       ╚═════╝  ╚═════╝    ╚═╝                                                                  
`);
require("./bot");
require("./server");

process.on("unhandledRejection", (promise, reason) => {
  console.log(
    "Unhandled Rejection at:",
    promise,
    "reason:",
    reason,
    "requestData",
    promise.requestData
  );
});
