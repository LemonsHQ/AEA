exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'credit_factoryt2') { 
              if(message.author.bot) return; 
              message.channel.send(credit_factoryt2); 
	          }
	  });
const credit_factoryt2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/credit_factoryt2.png']) 
   //.setImage('attachment://credit_factoryt2.png') 
   .addField('Price:  45000','__________________')
   .addField('Health:  500','__________________')
   .setTitle(' Credit Factory T2') 
   .setDescription(' -Generates credits at a high rate\n -Fragile\n-Goes nuclear on death') 
   .addField('Stats','__________________') 
   .addField('Range:  320','__________________')
   .addField('Move Speed:  0','__________________')
   .addField('Turn Speed:  0','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
