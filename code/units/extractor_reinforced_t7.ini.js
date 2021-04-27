exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'extractor_reinforced_t7') { 
              if(message.author.bot) return; 
              message.channel.send(extractor_reinforced_t7); 
	          }
	  });
const extractor_reinforced_t7 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/extractor_reinforced_t7.png']) 
   //.setImage('attachment://extractor_reinforced_t7.png') 
   .addField('Health:  6500','__________________')
   .addField('Shield:  2500','__________________')
   .setTitle('  Armored Extractor T7') 
   .setDescription(' - Arms extractor with tesla attack \n- Extractor shield \n- Increased HP \n- Keeps current Income Generations \n- Passive Area Healing') 
   .addField('Stats','__________________') 
   .addField('Price:  credits=-5500','__________________')
   .addField('Direct Damage:  200','__________________')
   .addField('Area Damage:  -60','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
