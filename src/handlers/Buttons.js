const fs = require("fs");
module.exports = (client, Discord) => {
  const buttonsFolders = fs.readdirSync("./src/buttons/");
  for (const folder of buttonsFolders) {
    const buttonFiles = fs
      .readdirSync(`./src/buttons/${folder}`)
      .filter((file) => file.endsWith(".js"));
    for (const file of buttonFiles) {
      const button = require(`../buttons/${folder}/` + file);
      button.category = folder;
      if (!button.name) {
        button.name = folder;
      }
      client.buttons.set(button.name, button);
    }
  }
};
