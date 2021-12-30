const db = require("quick.db");
const langdb = new db.table("Langs");
module.exports = {
  name: "interactionCreate",
  async execute(interaction, client, Discord) {
    if (interaction.isCommand() || interaction.isContextMenu()) {
      // GETTING COMMAND FROM THE COLLECTION
      const command = client.commands.get(interaction.commandName);
      let lang;
      if (interaction.guild) lang = langdb.get(interaction.guild.id);
      else lang = langdb.get(interaction.user.id);
      if (!lang && interaction.commandName !== "setlang")
        return interaction.reply(
          "Please set my language first\n/setlang [lang]"
        );
      if (interaction.commandName === "setlang")
        return command.execute(interaction, client, Discord);
      
      const l = require(`../../langs/${lang}.json`);
      if (command.invisible) {
        await interaction.deferReply({ ephemeral: true }).catch(() => {});
      } else {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});
      }
      // IF COMMAND DOES NOT EXIST
      if (!command)
        return (
          (await interaction.followUp({
            content: "This command no longer exists",
          })) && client.commands.delete(interaction.commandName)
        );

      // CHECKING COMMAND PERMISSION
      if (
        command.permission &&
        command.permission !== "OWNER" &&
        interaction.memberPermissions !== null
      ) {
        const authorPerms = interaction.channel.permissionsFor(
          interaction.member
        );

        if (!authorPerms || !authorPerms.has(command.permission)) {
          const PermsError = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(
              interaction.user.username,
              interaction.user.displayAvatarURL({ dynamic: true })
            )
            .setTitle("Error!")
            .setDescription(
              `You don't have the required permission (\`${command.permission}\`) to run this command `
            );

          return interaction
            .editReply({ embeds: [PermsError] })
            .then((sent) => {
              setTimeout(() => {
                sent.delete();
              }, 3000);
            });
        }
      }
      if (interaction.targetType === "MESSAGE") {
        if (interaction.member !== null) {
          const msg = await interaction.channel.messages.fetch(
            interaction.targetId
          );
          command.execute(interaction, client, Discord, l, msg);
        } else {
          client.channels.fetch(interaction.channelId).then((c) => {
            c.messages.fetch(interaction.targetId).then((m) => {
              command.execute(interaction, client, Discord, l, m);
            });
          });
        }
      } else if (interaction.targetType === "USER") {
        const user = await client.users.fetch(interaction.targetId);
        command.execute(interaction, client, Discord, l, user);
      } else {
        command.execute(interaction, client, Discord, l);
      }
    }

    // SELECT MENUS
    if (interaction.isSelectMenu()) {
      let menu = client.menus.get(interaction.values.toString());

      if (!menu) {
        menu = client.menus.get(interaction.customId);
      }
      if (!menu) {
        return await interaction.update({
          content: "This menu no longer exists",
        });
      }

      menu.execute(interaction, client, Discord, l);
    }
    if (interaction.isButton()) {
      let button = client.buttons.get(interaction.customId);
      client.buttons.forEach((b) => {
        if (interaction.customId.includes(b.name)) {
          button = client.buttons.get(b.name);
        }
      });
      if (!button) {
        return await interaction.reply({
          content: "This button no longer exists",
        });
      }
      if (button.invisible) {
        if (button.invisible) {
          await interaction.deferUpdate({ ephemeral: true }).catch(() => {});
        } else {
          await interaction.deferUpdate({ ephemeral: false }).catch(() => {});
        }
      }
      let i = interaction.customId.split("_")[1];

      button.execute(interaction, client, Discord, l, i);
    }
  },
};
