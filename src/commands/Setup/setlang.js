const fs = require("fs");
const db = require("quick.db");
const langdb = new db.table("Langs");
const options = [];
const langFiles = fs
  .readdirSync(`./src/langs/`)
  .filter((file) => file.endsWith(".json"));
for (const file of langFiles) {
  options.push({
    name: file.split(".")[0],
    description: file.split(".")[0],
    type: "SUB_COMMAND",
  });
}
module.exports = {
  name: "setlang",
  description: "set language of the bot",
  guildOnly: false,
  permission: "ADMINISTRATOR",
  options: options,
  async execute(interaction, client, Discord) {
    const language = interaction.options.getSubcommand();
    if (interaction.guild) langdb.set(interaction.guild.id, language);
    if (interaction.user) langdb.set(interaction.user.id, language);
    interaction.reply({ content: "Language Set" });
  },
};
