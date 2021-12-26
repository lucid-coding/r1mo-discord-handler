module.exports = {
  name: "ping",
  description: "Displays the bot ping",
  guildOnly: false, // if the command is global or no
  options: [
    {
      name: "name",
      description: "example options",
      type: "STRING",
      required: false,
    },
  ],
  permission: "ADMINISTRATOR", // required permission to run the command
  invisible: true, // ephemeral
  async execute(interaction, client, Discord, r1mo) {
    const api = `${Date.now() - interaction.createdTimestamp}`;

    const response = new Discord.MessageEmbed()
      .setAuthor(
        client.user.username,
        client.user.displayAvatarURL({ dynamic: true })
      )
      .setColor(r1mo.Color)

      .setTitle("Pong! 🏓")
      .setDescription(`${api}ms`);
    await interaction.followUp({ embeds: [response] });
  },
};
