//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)

  
client.on("message", message => {

//timer future implementation
function timeup() {
  message.reply('Times Up!')
  clearTimeout(Timer10s, 250);
  clearTimeout(Timer1m, 250);
  clearTimeout(Timer2m, 250);
  clearTimeout(Timer3m, 250);
  clearTimeout(Timer10m, 250);
}





  if(message.content === '10s'){
  var Timer10s = setTimeout(timeup, 10000);
  message.reply('Timer started for 10 seconds')
  Timer10s;
  }
  if(message.content === '1m'){
  var Timer1m = setTimeout(timeup, 60000);
  message.reply('Timer Started for 1 minute')
  Timer1m;
  }
  if(message.content === '2m'){
  var Timer2m = setTimeout(timeup, 80000);
  message.reply('Timer Started for 2 minutes')
  Timer2m;
  }
  if(message.content === '3m'){
  var Timer3m = setTimeout(timeup, 120000);
  message.reply('Timer Started for 3 minutes')
  Timer3m;
  }
  if(message.content === '10m'){
  var Timer10m = setTimeout(timeup, 600000);
  message.reply('Timer Started for 10 minutes')
  Timer10m;
  }
}
if(message.content == '/stopTimer'){
  message.reply('Stopped Timer')
  clearTimeout(Timer10s, 250);
  clearTimeout(Timer1m, 250);
  clearTimeout(Timer2m, 250);
  clearTimeout(Timer3m, 250);
  clearTimeout(Timer10m, 250);
  }


});
  

}
//________________Dont touch Zone end
