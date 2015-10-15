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

UI.registerHelper('contentFormate', function (content) {
  //content.substring(0,content.lastIndexOf('<img'));
  return (content.substring(0, content.indexOf('<img'))).replace(/<[^>]+>/g,"").substring(0,150) ;
});
UI.registerHelper("userIdFormate", function (userId) {

});
