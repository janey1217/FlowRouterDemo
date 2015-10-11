/**
 * Created by jym on 2015/9/29.
 */

UI.registerHelper('dateFormate', function(thing) {
  var str=new Date();
  str=thing;
  //return str;
  return  str.toLocaleDateString()+" "+str.toLocaleTimeString();
});

UI.registerHelper("userIdFormate", function (userId) {

});
