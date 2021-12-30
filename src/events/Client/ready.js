const { STATUS_CHANNEL_ID } = require("../../../config.json");
module.exports = {
  name: "ready",
  async execute(client, a, Discord, r1mo) {
    const { term } = r1mo;
    term.bold.green(`\n[!] Bot is Online!`);
    term.bold.green(`\n[+] Bot TAG: ${client.user.tag}`);
    term.bold.green(`\n[+] Bot ID: ${client.user.id}`);
    term.bold.green(`\n[+] Bot Servers: ${client.guilds.cache.size}`);
    let users = 0;
    let channels = 0;

    const commandsArray = [];
    const userCommandsArray = [];
    client.commands.forEach((c) => {
      if (c.guildOnly === false || !c.guildOnly) {
        userCommandsArray.push(c);
      } else {
        commandsArray.push(c);
      }
    });

    client.guilds.cache.forEach((guild) => {
      try {
        users = users + guild.memberCount;
        channels = channels + guild.channels.cache.size;

        if (guild.me.permissions.has("ADMINISTRATOR") === true) {
          guild.commands.set(commandsArray).catch(async (err) => {
            if (err.code === 50001) {
              const owner = await guild.fetchOwner();
              owner
                .send(
                  `Please [re-invite](https://discord.com/api/oauth2/authorize?client_id=810814612508639312&permissions=8&scope=bot%20applications.commands) my bot to your server "${guild.name}" with permission to create slash commands`
                )
                .catch((error) => error);
            } else {
              console.log(`\n`, err);
            }
          });
          term.bold(`\n[+] ${guild.name}'s Commands Set`);
        }
      } catch (err) {}
    });
    term.bold.green(`\n[+] Bot Users: ${users}`);
    term.bold.green(`\n[+] Bot Channels: ${channels}`);

    await client.application.commands.set(userCommandsArray);

    client.user.setPresence({
      activities: [
        {
          name: `/help`,
          type: "STREAMING",
          url: r1mo.Discord,
        },

      ],
      status: "online",
    });
  },
};
