
const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>{

  let bicon = bot.user.displayAvatarURL;
  let commandsemed = new Discord.RichEmbed()
  .setDescription(" Available Commands ")
  .setColor("#42f4d1")
  .setThumbnail(bicon)
  .addField("8ball", "Ask A Queston And Get Your Answer.")
  .addField("addrole", "Only For Mods/Admins")
  .addField("ban", "Only For Admins")
  .addField("botinfo", " Information About The Bot")
  .addField("clear", "Only For Mods/Admins")
  .addField("kick", "Only For Mods/Admins")
  .addField("prefix", "SetUp A Custom Prefix For Your Server")
  .addField("randomdog", "Sends In A Random Dog Pic")
  .addField("removerole", "Only For Mods/Admins")
  .addField("report", "!Report @username To Report Abuse On You Discord / ~Owners Make Sure To Make A report Channel~ for this command to work.")
  .addField("say", "Only For Players Trusted")
  .addField("serverinfo", "Information About Your Server")
  .addField("tempmute", "Temp Mutes Only For Mods/Admins")
  .addField("More Coming Soon", "Keep Updated By Joing FlowerPower Offical Discord https://discord.gg/R69C6Ce");



    return message.channel.send(commandsemed);

}

module.exports.help = {
  name: "commands"
}



//    let commandsemed = new Discord.RichEmbed()
// .setDescription("test")
// message.channel.send({commandsemed});
// embed.setDescription("test")
// message.channel.send({commandsemed});
