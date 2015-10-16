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
  if(content.indexOf('<img')>=0)
  {
    return  (content.substring(0, content.indexOf('<img'))).replace(/<[^>]+>/g,"").substring(0,150) ;
  }
  else
  {
    return content.replace(/<[^>]+>/g,"").substring(0,150) ;
  }

});

UI.registerHelper("userIdFormate", function (userId) {

});

UI.registerHelper("topFormate", function (setTop) {
  if (setTop!=null&& setTop==1) {
    return "顶";
  } else {
    return "";
  }

});

UI.registerHelper("setTopFormate", function (setTop) {
  if (setTop!=null&& setTop==1) {
    return '<button class="btn btn-xs btn-warning cancelTopBtn"  style=" margin-left: 5px;"> <i class="glyphicon glyphicon-flag">取消</i> </button>';
  } else {
    return '<button class="btn btn-xs btn-warning topBtn"  style=" margin-left: 5px;"> <i class="glyphicon glyphicon-flag">置顶</i> </button>';
  }

});

