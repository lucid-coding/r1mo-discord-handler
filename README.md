A Discord handler made for [My Discord](https://discord.gg/BRKgjW65cA)

Once you put your bot token in config.json you will see something like this
![image](https://user-images.githubusercontent.com/49791552/147419239-82d4d5fe-5055-4c5c-b83d-fd0062b7d684.png)


Example command:
```
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
   interaction.followUp("Pong");
  },
};
```

