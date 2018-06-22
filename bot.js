const Discord = require('discord.js');
const client = new Discord.Client();



client.login('NDU5NTk0NjE4MjIxMTAxMDU2.Dg4esQ.MuLvW5Ds4_YYQePn-eXjBLz49LU'); 


client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by Hmam');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(`NDhelp By Hmam`,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`NDhelp | Thanks for inv`,'https://www.twitch.tv/hmamkhalid');
});          



client.on('message', message => {
    const prefix = 'ND'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(': 🔱 | اسمك',`**<@` + `${z.id}` + `>**`, true)
.addField(': 🛡 | ايديك', "**"+ `${z.id}` +"**",true)
.addField(': ♨ | Playing','**'+y+'**' , true)
.addField(': 📛 | تاق حق حسابك',"**#" +  `${z.discriminator}**`,true)
.addField('**: 📆 | التاريح الذي انشئ فيه حسابك**', message.author.createdAt.toLocaleString())
.addField("**: ⌚ | تاريخ دخولك للسيرفر**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

  
  client.on('message', function(msg) {
    const prefix = 'ND'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  

  
    client.on("message", message => {
    var prefix = "ND";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "©zabhm"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 
  
  
  
  
  
  
  


client.on('message', message => {
     if (message.content === "NDhelp") {
message.author.send("**اوامر البوت**" + `  **

 شكرا لإستعمالكم البوت
الأوامر الشخصية 
```
 |NDid لمعرفة المعلومات الشخصية
```
أوامر السيرفر
```
 |NDserver لمعرفة حالة السيرفر
``` 
أوامر المدراء
```
 |NDclear لمسح الرسائل
```

 |هذه البوت قيد التطوير سيتم اضافة المزيد من الاوامر
 
 
**`);
    }
});     


