exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'dreadnoughtcannons') { 
              if(message.author.bot) return; 
              message.channel.send(DreadNoughtCannons); 
	          }
	  });
const DreadNoughtCannons = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/DreadNoughtCannons.png']) 
   //.setImage('attachment://DreadNoughtCannons.png') 
   .addField('Price:  50000','__________________')
   .addField('Health:  12000','__________________')
   .addField('Range:  630','__________________')
   .addField('Direct Damage:  0 #no directDamage with targetGround','__________________')
   .addField('Area Damage:  250','__________________')
   .addField('Direct Damage:  150','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Area Damage:  90','__________________')
   .addField('Direct Damage:  0 #no directDamage with targetGround','__________________')
   .addField('Area Damage:  120','__________________')
   .addField('Direct Damage:  70','__________________')
   .addField('Area Damage:  140','__________________')
   .addField('Move Speed:  0','__________________')
   .addField('Turn Speed:  0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
