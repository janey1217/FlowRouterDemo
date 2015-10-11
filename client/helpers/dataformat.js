/**
 * Created by jym on 2015/9/29.
 */

UI.registerHelper('dateFormate', function(thing) {
  var str=new Date(thing);
  //str=thing;
  //return str;
  return moment(str).format("YYYY-MM-DD  HH:mm:ss");
  //return  str.toLocaleDateString()+" "+str.toLocaleTimeString();
});

UI.registerHelper("userIdFormate", function (userId) {

});
