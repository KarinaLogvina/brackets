module.exports = function check(str, bracketsConfig) {
  var bracketsConfig = bracketsConfig.map(function(bracketarr) {
    return bracketarr.join('');
  });
    while (str.length>0) {
      var stop = true;
      for (var i=0; i<bracketsConfig.length; i++) {
       var item = bracketsConfig[i];
      if (str.includes(item)) {
        str =  str.replace(item, ''); 
          if (str.length == 0) {
            return true;
          }
        stop=false;
      } 
    }  
    if (stop) {
      return false;
    }
  }
}
