//Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)
//Dont touch Zone end
// units
const lynx = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Lynx')
	.setURL('')
	.attachFiles(['./resources/lynx.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Very fast \n- Low armor \n- Ground attack")
	.addBlankField()
	.addField("Stats", "Price $275 \n Health 120 \n Attack Range 130 \n Move Speed 1.60 \n Build Speed 3.3s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://lynx.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const lightgunship = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Light Gun Ship')
	.setURL('')
	.attachFiles(['./resources/light_gunship.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Very weak \n- Light ground attack only \n- Slow")
	.addBlankField()
	.addField("Stats", "Price $250 \n Health 50 \n Attack Range 120 \n Move Speed 1.10 \n Build Speed 5.6s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://light_gunship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
client.on('message', message => {
//units
    if (message.content === 'Light gun ship' ||  message.content === 'Light gun ship' || message.content === 'light gun ship') {
	    message.channel.send(lynx);
    }
 
 //commands   
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }
    if (message.content.includes('/flipcoin')) {
        var flip = getRandomInt(1, 20);
        if (flip >= 10) {
        message.reply('Tails')
            } 
        if (flip <= 10){
        message.reply('Heads')
            }
    }

    if (message.content.includes('fuck') ||  message.content.includes('shit') || message.content.includes('nigger')) {
        const attachment = new Attachment('./resources/language.png');
        message.channel.send(attachment);

    }

    if (!message.content.includes(',') && !message.content.includes('bad') && !message.content.includes('person') && message.content.includes('rape') && message.content.includes('good') ||  message.content.includes('child porn')) {
        const attachment = new Attachment('./resources/download.jpg');
        message.channel.send(attachment);

    }
           if(message.content.includes('/random')) {
           if(message.content.includes('2v2')) {
           var x = getRandomInt(1, 4);
           }
           if(message.content.includes('2v3')) {
           var x = getRandomInt(5, 8);
           }
           if(message.content.includes('3v3')) {
           var x = getRandomInt(9, 21);
           }
           if(message.content.includes('4v4')) {
           var x = getRandomInt(22, 24);
           }
           
           if (x===1) {
               const attachment = new Attachment('./resources/map/[p4]Cold Corners (4p)_map.png');
               message.channel.send(attachment);
               message.reply('Cold Corners');
           }
           if (x===2) {
               const attachment = new Attachment('./resources/map/[p4]Convergence (4p)_map.png');
               message.channel.send(attachment);
               message.reply('Convergence');
           }
            if (x===3) {
               const attachment = new Attachment('./resources/map/[p4]Desert Battle (4p)_map.PNG');
               message.channel.send(attachment);
                message.reply('Desert Battle');
           }
             if (x===4) {
               const attachment = new Attachment('./resources/map/[p4]Dual Commanders (4p)_map.png');
               message.channel.send(attachment);
                 message.reply('Dual Commanders');
           }
             if (x===5) {
               const attachment = new Attachment('./resources/map/[p5]Bottom Heavy (2v3)_map.png');
               message.channel.send(attachment);
                 message.reply('Bottom Heavy');
           
           }
              if (x===6) {
               const attachment = new Attachment('./resources/map/[p5]Eye of Magma (2v3)_map.PNG');
               message.channel.send(attachment);
                  message.reply('Eye of Magma');
           
           }
              if (x===7) {
               const attachment = new Attachment('./resources/map/[p5]Hourglass (2v3)_map.png');
               message.channel.send(attachment);
                  message.reply('Hourglass');
           
       }
              if (x===8) {
               const attachment = new Attachment('./resources/map/[p5]Kratos and Hercules (2v3)_map.png');
               message.channel.send(attachment);
                  message.reply('Kratos and Hercules');
           
              }
              if (x===9) {
               const attachment = new Attachment('./resources/map/[p6] RoundaBout (6p)_map.PNG');
               message.channel.send(attachment);
                  message.reply('RoundaBout');
           
       }
              if (x===10) {
               const attachment = new Attachment('./resources/map/[p6]Beach Landing mrhidihoEdit (6p)_map.png');
               message.channel.send(attachment);
                  message.reply('Beach Landing');
           
       }
                  if (x===11) {
               const attachment = new Attachment('./resources/map/[p6]Bridge of Hell (6p)_map.png');
               message.channel.send(attachment);
                      message.reply('Bridge of Hell');
           
       }
               
              if (x===12) {
               const attachment = new Attachment('./resources/map/[p6]Burning Beaches (6p)_map.png');
               message.channel.send(attachment);
                  message.reply('Burning Beaches');
           
       }
               if (x===13) {
               const attachment = new Attachment('./resources/map/[p6]Crossing (6p) mrhidihoEdit_map.png');
               message.channel.send(attachment);
                   message.reply('Crossing');
           
       }
               if (x===14) {
               const attachment = new Attachment('./resources/map/[p6]Desert Crossing (6p)_map.PNG');
               message.channel.send(attachment);
                   message.reply('Dessert Crossing');
           
       }
               if (x===15) {
               const attachment = new Attachment('./resources/map/[p6]Divided Islands (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Divided Islands');
           
       }
               if (x===16) {
               const attachment = new Attachment('./resources/map/[p6]Igneous-small (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Igneous Small');
           
       }
               if (x===17) {
               const attachment = new Attachment('./resources/map/[p6]Magma Island mrhidihoEdit (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Magma Island');
           
       }
               if (x===18) {
               const attachment = new Attachment('./resources/map/[p6]Serpents Pass (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Serpents Pass');
           
       }
               if (x===19) {
               const attachment = new Attachment('./resources/map/[p6]Tundra (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Tundra');
           
       }
               if (x===20) {
               const attachment = new Attachment('./resources/map/[p6]Weddell Isles (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Weddell Isles');
           
       }
               if (x===21) {
               const attachment = new Attachment('./resources/map/[p6]X-Path (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('X-Path');
           
       }
               if (x===22) {
               const attachment = new Attachment('./resources/map/[p8]Darklord-Egypt (8p)_map.png');
               message.channel.send(attachment);
                   message.reply('Darklord Egypt');
           
       }
               if (x===23) {
               const attachment = new Attachment('./resources/map/[p8]Igneous (8p)_map.png');
               message.channel.send(attachment);
                   message.reply('Igneous');
           
       }
               if (x===24) {
               const attachment = new Attachment('./resources/map/[p8]Many Islands mrhidihoEdit (8p)_map.PNG');
               message.channel.send(attachment);
                   message.reply('Many Islands');
           
       }
               if (x===25) {
               const attachment = new Attachment('./resources/map/[p9]Coliding Powers (4v5)_map.png');
               message.channel.send(attachment);
                   message.reply('Coliding Powers');
           
       }
               if (x===26) {
               const attachment = new Attachment('./resources/map/[p9]Kings of the Hills (9p)_map.png');
               message.channel.send(attachment);
                   message.reply('Kings of the Hills');
           
       }
               if (x===27) {
               const attachment = new Attachment('./resources/map/[p9]No-Mans Valley (3v4)_map.png');
               message.channel.send(attachment);
                   message.reply('NO-Mans Valley');
           
       }
               if (x===28) {
               const attachment = new Attachment('./resources/map/[p10] Napali Warfare (10p)_map.PNG');
               message.channel.send(attachment);
                   message.reply('Napali Warfare');
           
       }
               if (x===29) {
               const attachment = new Attachment('./resources/map/[p10] Ultimate Crossing (10p)_map.png');
               message.channel.send(attachment);
                   message.reply('Ultimate Crossing');
           
       }
               if (x===30) {
               const attachment = new Attachment('./resources/map/[p10]Crossing Large mrhidihoEdit (10p)_map.png');
               message.channel.send(attachment);
                   message.reply('Crossing Large');
           
       }
               if (x===31) {
               const attachment = new Attachment('./resources/map/[p10]Huge Subdivide mrhidihoEdit(10p)_map.png');
               message.channel.send(attachment);
                   message.reply('Huge Subdivide');
           
       }
               if (x===32) {
               const attachment = new Attachment('./resources/map/[p10]Island Warfare (10p)_map.png');
               message.channel.send(attachment);
                   message.reply('Island Warfare');
           
       }
                if (x===33) {
               const attachment = new Attachment('./resources/map/[p10]Land Mountains (10p)_map.png');
               message.channel.send(attachment);
                    message.reply('Land Mountains');
           
       }
                if (x===34) {
               const attachment = new Attachment('./resources/map/[p10]Lava Bio-grid mrhidihoEdit (10p)_map.png');
               message.channel.send(attachment);
                    message.reply('Lava Bio-Grid');
           
       }
                if (x===35) {
               const attachment = new Attachment('./resources/map/[p10]Setons Clutch (10p)_map.png');
               message.channel.send(attachment);
                    message.reply('Setons Clutch');
           
       }
                if (x===36) {
               const attachment = new Attachment('./resources/map/[p10]The Final Campaign (10p)_map.png');
               message.channel.send(attachment);
                    message.reply('The Final Campaign');
           
       }

    }
});
//Dont touch Zone start
}
//Dont touch Zone end
