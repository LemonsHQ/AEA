exports.code = function(){
    const fs = require('fs');
    //Units
    obj = fs.readdirSync(__dirname); 
    obj.forEach(file => { 
        var units = require('./' + file);
        units.code()
      }); 
      
}