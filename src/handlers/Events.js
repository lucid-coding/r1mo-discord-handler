const fs = require("fs");
const { term } = require("../utilities/r1mo");
const r1mo = require("../utilities/r1mo");
module.exports = (client, Discord) => {
  const eventsFolders = fs.readdirSync("./src/events/");
  const eventsArray = [];

  for (const folder of eventsFolders) {
    const eventFiles = fs
      .readdirSync(`./src/events/${folder}`)
      .filter((file) => file.endsWith(".js"));
    for (const file of eventFiles) {
      const event = require(`../events/${folder}/` + file);
      if (event.once) {
        client.once(event.name, (...args) => {
          event.execute(...args, client, Discord, r1mo);
        });
      } else {
        client.on(event.name, async (...args) => {
          event.execute(...args, client, Discord, r1mo);
        });
      }
      eventsArray.push(event);
    }
  }
  term.bold.green(`\n[+] ${eventsArray.length} Events`);
};
