exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'flamespawner') { 
              if(message.author.bot) return; 
              message.channel.send(flameSpawner); 
              }
const flameSpawner = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/flameSpawner.png']) 
   .setImage('attachment://flameSpawner.png') 
   .setTitle(' Firestorm') 
   .setDescription('') 
   .addField('Stats') 
   .addField('Price:  0')
   .addField('Health:  1')
   .addField('Build Speed:  1')
   .addField('Price:  0')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Build Speed:  0s')
   .addField('Range:  100')
   .addField('Area Damage:  70')
   .addField('Area Damage:  80')
   .addField('Area Damage:  90')
   .addField('Area Damage:  100')
   .addField('Area Damage:  110')
   .addField('Move Speed:  0.6')
   .addField('Turn Speed:  5.0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
	  });
}
