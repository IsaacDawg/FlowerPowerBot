const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(" Invaild Permissions ");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.get(args[0]);
  if(!rMember) return message.reply(" Could Not Find The User Your Looking For");
  let role = args.join(" ").slice(22);
  if(!role) return mesasge.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Could Not Find The Role Your Looking For");


  if(rMember.roles.has(gRole.id)) return message.reply("They Already Have that Role");
  await(rMember.addRole(gRole.id));

  try{
  await rMebmer.send(`Congrats, You Have Been Given The Role ${gRole.name}`)
  }catch(e){
  message.channel.send(`Congrats, To <@${rMember.id}>, They Have Been Given The Role ${gRole.name} We Tried To Message You But Your Private Messages Are Blocking us :(`)
 }
}

module.exports.help = {
  name: "addrole"
}
