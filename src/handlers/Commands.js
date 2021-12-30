const fs = require("fs");
const { term } = require("../utilities/r1mo");
module.exports = async (client, Discord) => {
  const commandsFolders = fs.readdirSync("./src/commands/");
  const commandsArray = [];
  for (const folder of commandsFolders) {
    const commandFiles = fs
      .readdirSync(`./src/commands/${folder}`)
      .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const command = require(`../commands/${folder}/` + file);
      command.category = folder;

      await client.commands.set(command.name, command);
      commandsArray.push(command);
    }
  }
  term.bold.green(`\n[+] ${commandsArray.length} Commands`);
};
