
const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>{

  let bicon = bot.user.displayAvatarURL;
  let botemed = new Discord.RichEmbed()
  .setDescription("Bots Information")
  .setColor("#42f4d1")
  .setThumbnail(bicon)
  .addField("Bots Name", bot.user.username)
  .addField("Bots Date Of Birth", bot.user.createdAt)
  .addField("Bots Master", "Siege");



    return message.channel.send(botemed);

}

module.exports.help = {
  name: "botinfo"
}
