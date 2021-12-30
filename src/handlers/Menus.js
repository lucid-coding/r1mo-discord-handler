const fs = require("fs");

module.exports = (client, Discord) => {
  const menusFolders = fs.readdirSync("./src/menus/");
  for (const folder of menusFolders) {
    const menuFiles = fs
      .readdirSync(`./src/menus/${folder}`)
      .filter((file) => file.endsWith(".js"));
    for (const file of menuFiles) {
      const menu = require(`../menus/${folder}/` + file);
      menu.category = folder;
      if (!menu.name) {
        menu.name = folder;
      }
      client.menus.set(menu.name, menu);
    }
  }
};
