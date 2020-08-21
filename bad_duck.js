const Discord = require("discord.js");
const client = new Discord.Client();
var count = 1
client.on("ready", () => {
  console.log(`[Loading Bot]`);
    client.users.cache.forEach(user => {
    console.log(count+1)
    console.log("[Sending] "+user.username)
          user.send(myArgs[2]).catch(() => console.error);
        });
});
console.log('╔═══════════════════════════════════════╗')
console.log('║                bad_duck               ║')
console.log('╠═══════════════════════════════════════╣')
console.log('║ Best discord message ║       _        ║')
console.log('║     disseminator     ║     =(.)__     ║')
console.log('║                      ║      (___/     ║')
console.log('║                      ║                ║')
console.log('╚══════════════════════╩════════════════╝')
var myArgs = process.argv.slice(2);

switch (myArgs[0]) {
default:
client.on("message", async message => {

client.user.setActivity("Bad_duck 🐤")
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
 if (cmd === ".d") {
 console.log("RECEBIDO")
     client.users.cache.get(myArgs[2]).send(myArgs[3]);
 }
});

client.login(myArgs[0]);

break;
}
