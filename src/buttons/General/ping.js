module.exports = {
  name: "ping",
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
    await interaction.update({ embeds: [response] });
  },
};