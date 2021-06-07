exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'teslamech') { 
              if(message.author.bot) return; 
              message.channel.send(teslaMech); 
	          }
	  });
const teslaMech = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/teslaMech.png']) 
   //.setImage('attachment://teslaMech.png') 
   .setTitle(' Tesla Mech') 
   .setDescription(' -Land & Air Lightning attack\n- Decent Range and movement speed\n-Very strong vs. shields\n-Reduced damage vs. grounded buildings\n-Can discharge itself and sacrifice HP to deal area damage') 
   .addField('Stats','__________________') 
   .addField('Price:  6500','__________________')
   .addField('Health:  1500','__________________')
   .addField('Range:  250','__________________')
   .addField('Move Speed:  2.4','__________________')
   .addField('Turn Speed:  3','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}