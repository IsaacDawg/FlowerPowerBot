const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>{

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.memebers.get(args[0]));
  if(!bUser) message.channel.send("Can't find User!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You are not a Moderator / Permission Denied")
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invaild Permission")

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Banned Info~")
  .setcolor("#e60000")
  .addField("Banned User", `${bUser} with ID $${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let banChannel = message.guild.channels.find(`name`, "kicks-bans");
  if(!banChannel) return message.channel.send("Can't Find Channel.");


  message.guild.member(bUser).ban(bReason);
  banchannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
