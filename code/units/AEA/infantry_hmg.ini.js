exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'machinegunner') { 
              if(message.author.bot) return; 
              message.channel.send(machineGunner); 
	          }
	  });
const machineGunner = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/machineGunner.png']) 
   //.setImage('attachment://machineGunner.png') 
   .setTitle(' Machine-gunner') 
   .setDescription(' -Moderately armored infantry\n-Machine gun with deployable bipod\n-Damage taken and speed is reduced when prone\n- Can attack ground & air') 
   .addField('Stats','__________________') 
   .addField('Price:  375','__________________')
   .addField('Health:  100','__________________')
   .addField('Range:  200','__________________')
   .addField('Direct Damage:  5','__________________')
   .addField('Move Speed:  1','__________________')
   .addField('Turn Speed:  7.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
