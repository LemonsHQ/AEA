exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentalsamtank') { 
              if(message.author.bot) return; 
              message.channel.send(experimentalSamTank); 
	          }
	 });

const experimentalSamTank = new Discord.MessageEmbed()
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://camo.githubusercontent.com/7203f752f0f936475f4ac41dcd3ef9d93af9c2452176a05a1e2b081d1a255ef1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3630363538363230323934323037393031372f34323362346662626563663162626164353566653631343638303337623334642e776562703f73697a653d313238')
   .attachFiles(['./code/units/resources/142.png']) 
   .setImage('attachment://142.png') 
   .setTitle(' Experimental SAM Tank') 
   .setDescription(' -Very heavily armed and armored\n-Armed with anti-air missles and flak turret\n-Can attack air only') 
   .addField('Price:  28000, uranium=1500','\u2800')
   .addField('Health:  6000','\u2800')
   .addField('Range:  350','\u2800')
   .addField('Direct Damage:  110','\u2800')
   .addField('Area Damage:  50','\u2800')
   .addField('Direct Damage:  140','\u2800')
   .addField('Area Damage:  160','\u2800')
   .addField('Move Speed:  0.35','\u2800')
   .addField('Turn Speed:  0.7','\u2800')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://imgur.com/QMVH0Hq.png');
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'experimentalsamtank') { 
              if(message.author.bot) return; 
              message.channel.send(experimentalSamTank); 
	          }
	  });
const experimentalSamTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/experimentalSamTank.png']) 
   //.setImage('attachment://experimentalSamTank.png') 
   .setTitle(' Experimental SAM Tank') 
   .setDescription(' -Very heavily armed and armored\n-Armed with anti-air missles and flak turret\n-Can attack air only') 
   .addField('Stats','__________________') 
   .addField('Price:  28000, uranium=1500','__________________')
   .addField('Health:  6000','__________________')
   .addField('Range:  350','__________________')
   .addField('Direct Damage:  110','__________________')
   .addField('Area Damage:  50','__________________')
   .addField('Direct Damage:  140','__________________')
   .addField('Area Damage:  160','__________________')
   .addField('Move Speed:  0.35','__________________')
   .addField('Turn Speed:  0.7','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
