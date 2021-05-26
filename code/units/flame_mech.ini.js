exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'flamemech') { 
              if(message.author.bot) return; 
              message.channel.send(flameMech); 
	          }
	 });

const flameMech = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   .attachFiles(['./code/units/resources/124.png']) 
   .setImage('attachment://124.png') 
   .setTitle(' Flame Mech') 
   .setDescription(' -Area effect flamethrower\n-Can attack land only\n-High HP with self-repair\n-Can fire an underground incendiary shell') 
   .addField('Price:  11000','\u2800')
   .addField('Health:  5000','\u2800')
   .addField('Range:  190','\u2800')
   .addField('Area Damage:  19','\u2800')
   .addField('Area Damage:  0','\u2800')
   .addField('Move Speed:  0.6','\u2800')
   .addField('Turn Speed:  5.0','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'flamemech') { 
              if(message.author.bot) return; 
              message.channel.send(flameMech); 
	          }
	  });
const flameMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/flameMech.png']) 
   //.setImage('attachment://flameMech.png') 
   .setTitle(' Flame Mech') 
   .setDescription(' -Area effect flamethrower\n-Can attack land only\n-High HP with self-repair\n-Can fire an underground incendiary shell') 
   .addField('Stats','__________________') 
   .addField('Price:  11000','__________________')
   .addField('Health:  5000','__________________')
   .addField('Range:  190','__________________')
   .addField('Area Damage:  19','__________________')
   .addField('Area Damage:  0','__________________')
   .addField('Move Speed:  0.6','__________________')
   .addField('Turn Speed:  5.0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
