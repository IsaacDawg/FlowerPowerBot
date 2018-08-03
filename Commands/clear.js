const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" Invaild Permissions .");
if(!args[0]) return message.channel.send(" oof ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} Messages.`).then(msg => msg.delete(5000));
});

}

module.exports.help = {
    name: "clear"
}
