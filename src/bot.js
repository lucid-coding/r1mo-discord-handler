const { token } = require("../config.json");
const Discord = require("discord.js");

const client = new Discord.Client({
  intents: 32509,
});
client.commands = new Discord.Collection();
client.menus = new Discord.Collection();
client.buttons = new Discord.Collection();

require(`./handlers/Commands.js`)(client, Discord);
require(`./handlers/Events.js`)(client, Discord);
require(`./handlers/Menus.js`)(client, Discord);
require(`./handlers/Buttons.js`)(client, Discord);

client.login(token);
