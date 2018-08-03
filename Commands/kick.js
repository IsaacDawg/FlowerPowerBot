const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>{

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.memebers.get(args[0]));
  if(!kUser) message.channel.send("Can't find User!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You are not a Moderator / Permission Denied")
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invaild Permission")

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick Info~")
  .setcolor("#e56b00")
  .addField("Kicked User", `${kUser} with ID $${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "kicks-bans");
  if(!kickChannel) return message.channel.send("Can't Find Channel.");


  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
