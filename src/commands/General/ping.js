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
  async execute(interaction, client, Discord, l) {
    const api = `${Date.now() - interaction.createdTimestamp}`;

    const response = new Discord.MessageEmbed()
        .setAuthor(
            client.user.username,
            client.user.displayAvatarURL({ dynamic: true })
        )
        .setColor("BLUE")

        .setTitle(l.ping.embed_title)
        .setDescription(`${api}ms`);
    await interaction.followUp({ embeds: [response] });
  },
};