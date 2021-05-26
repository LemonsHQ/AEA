exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'jetpack') { 
              if(message.author.bot) return; 
              message.channel.send(jetpack); 
	          }
	  });
const jetpack = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/jetpack.png']) 
   //.setImage('attachment://jetpack.png') 
   .setTitle(' Pegasus') 
   .setDescription(' -Advanced armored infantry\n-Light plasma rifles\n-Short-range jetpack') 
   .addField('Stats','__________________') 
   .addField('Price:  1500','__________________')
   .addField('Health:  150','__________________')
   .addField('Range:  250','__________________')
   .addField('Direct Damage:  11','__________________')
   .addField('Move Speed:  0.8','__________________')
   .addField('Turn Speed:  7.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
