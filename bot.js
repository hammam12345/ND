const Discord = require('discord.js');
 const client = new Discord.Client();
 
-client.on('ready', () => {
-    console.log('I am ready!');
+
+
+client.login('NDU5NTk0NjE4MjIxMTAxMDU2.Dg4esQ.MuLvW5Ds4_YYQePn-eXjBLz49LU'); 
+
+
+client.on('ready',  () => {
+  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
+  console.log('by Hmam');
+  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
+  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
+  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
+  console.log('is online')
+client.user.setStatus("dnd");
 });
 
+// playing
+client.on('ready', () => {                           
+client.user.setGame(`NDhelp By Hmam`,'https://www.twitch.tv/hmamkhalid');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`NDhelp | Thanks for inv`,'https://www.twitch.tv/hmamkhalid');
+});          
+
+
+
 client.on('message', message => {
-    if (message.content === 'ping') {
-    	message.reply('pong');
-  	}
+    const prefix = 'ND'
+var args = message.content.split(" ").slice(1);    
+if(message.content.startsWith(prefix + 'id')) {
+var year = message.author.createdAt.getFullYear()
+var month = message.author.createdAt.getMonth()
+var day = message.author.createdAt.getDate()
+var men = message.mentions.users.first();  
+let args = message.content.split(' ').slice(1).join(' ');
+if (args == '') {
+var z = message.author;
+}else {
+var z = message.mentions.users.first();
+}
+
+let d = z.createdAt;          
+let n = d.toLocaleString();   
+let x;                       
+let y;                        
+
+if (z.presence.game !== null) {
+y = `${z.presence.game.name}`;
+} else {
+y = "No Playing... |💤.";
+}
+let embed = new Discord.RichEmbed()
+.setColor("#502faf")
+.addField(': 🔱 | اسمك',`**<@` + `${z.id}` + `>**`, true)
+.addField(': 🛡 | ايديك', "**"+ `${z.id}` +"**",true)
+.addField(': ♨ | Playing','**'+y+'**' , true)
+.addField(': 📛 | تاق حق حسابك',"**#" +  `${z.discriminator}**`,true)
+.addField('**: 📆 | التاريح الذي انشئ فيه حسابك**', message.author.createdAt.toLocaleString())
+.addField("**: ⌚ | تاريخ دخولك للسيرفر**", message.member.joinedAt.toLocaleString())    
+
+.setThumbnail(`${z.avatarURL}`)
+.setFooter(message.author.username, message.author.avatarURL)
+
+message.channel.send({embed});
+    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);
+
+}
+
 });
 
-// THIS  MUST  BE  THIS  WAY
-client.login(process.env.BOT_TOKEN);
+
+client.on('message', message => {
+     if (message.content === "NDhelp") {
+message.author.send("**اوامر البوت**" + `  **
+
+ شكرا لإستعمالكم البوت
+
+الأوامر الشخصية
+ ```
+ |NDid لمعرفة المعلومات الشخصية
+ ```
+ 
+ |هذه البوت قيد التطوير سيتم اضافة المزيد من الاوامر
+ 
+ 
+**`);
+    }
+});     
+
+
