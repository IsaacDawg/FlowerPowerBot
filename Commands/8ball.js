const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>{

if(!args[2]) return message.reply("Please Ask A Full Question");
let replies = ["Yes.", "No.", "I Don't Know", "Ask Some More"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(1).join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#FF9900")
.addField(" Question ", question)
.addField(" Answer ", replies[result]);


message.channel.send(ballembed);

}

module.exports.help = {
  name: "8ball"
}
