exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'rocketmech') { 
              if(message.author.bot) return; 
              message.channel.send(rocketMech); 
	          }
	  });
const rocketMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/rocketMech.png']) 
   //.setImage('attachment://rocketMech.png') 
   .setTitle(' Rocket Mech') 
   .setDescription(' -Medium armor\n-Heavily armed\n-Can attack ground and air\n-Strong vs. multiple units\n-Can overcharge itself to increase firepower and movement speed') 
   .addField('Stats','__________________') 
   .addField('Price:  6500','__________________')
   .addField('Health:  1100','__________________')
   .addField('Range:  265','__________________')
   .addField('Area Damage:  65','__________________')
   .addField('Direct Damage:  40','__________________')
   .addField('Area Damage:  40','__________________')
   .addField('Move Speed:  2','__________________')
   .addField('Turn Speed:  3','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
