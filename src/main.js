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
let i = 0;
(function () {
  fs.writeFileSync("reload.json", "{}");
  fs.unlinkSync("reload.json");
  setTimeout(arguments.callee, 60000);
  i++;
})();
