 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("517788981979774977")
setInterval(function() {
channel.send(`Hello Guys I Want Credits Please Give Me Some Credits`);
}, 30)
})


client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "c1s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.login(process.env.BOT_TOKEN); 
