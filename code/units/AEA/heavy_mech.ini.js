exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'heavymech') { 
              if(message.author.bot) return; 
              message.channel.send(heavyMech); 
	          }
	  });
const heavyMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/heavyMech.png']) 
   //.setImage('attachment://heavyMech.png') 
   .setTitle(' Heavy Mech') 
   .setDescription(' -Heavily armored\n-Ground attack\n-Moderate damage and range\n-Can disable weapon to activate a temporary shield and self-repair') 
   .addField('Stats','__________________') 
   .addField('Price:  5000','__________________')
   .addField('Health:  1800','__________________')
   .addField('Range:  250','__________________')
   .addField('Direct Damage:  125','__________________')
   .addField('Direct Damage:  0','__________________')
   .addField('Move Speed:  2.1','__________________')
   .addField('Turn Speed:  4','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
