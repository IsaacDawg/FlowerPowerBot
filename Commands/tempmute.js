const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async(bot, message,args) => {

let tomute = message.guild.member(message.mentions.users.first() || message.guild.memebers.get(args[0]));
if(!tomute) return message.reply(" Could Not Find User.");
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(" Invaild Permissions.");
let muterole = message.guild.roles.find(`name`, "Muted");

// start of creating of role
if(!muterole){
  try {
muterole = await message.guild.createRole({
name: "Muted",
color: "#ff0000",
permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
  }catch(e){
    cosole.log(e.stack);
  }
}

  // end of create code

  // timer for role
let mutetime = args[1];
if(!mutetime) return message.reply("You Did Not Specify A Time!");


await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

setTimeout(function(){
tomute.removeRole(muterole.id)
message.channel.send(`<@${tomute.id}> Has been unmuted`);
}, ms(mutetime));

}



module.exports.help = {
name: "mute"
}
