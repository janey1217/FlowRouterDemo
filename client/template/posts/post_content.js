/**
 * Created by jym on 2015/9/9.
 */
//var myContext="";
var str="";
Template.postContent.helpers({
  errorMessage:function(field){
    var  myContext = Article.simpleSchema().namedContext("insertData");
    //return myContext.keyErrorMessage()[field];
    //return myContext.keyErrorMessage(field);
    return myContext.keyErrorMessage(field);
  }
});

Template.postContent.events({
  "submit form": function (e, template) {
    e.preventDefault();
    var title = $(e.target).find('[name=title]').val();
    var content = $(e.target).find('[name=content]').val();
    var post ={title:title, content: content};
    Article.insert(post,{ validationContext: "insertData"}, function(error, result) {
      //  str= myContext.keyErrorMessage("title");
      // message.title = myContext.keyErrorMessage("title");
      // message.content = myContext.keyErrorMessage("content");
      //console.log(str);
      //console.log(myContext.keyErrorMessage("title"));
      //console.log(myContext.keyErrorMessage("content"));
      //console.log(error.invalidKeys);
      // console.log(result);
      if(result) {
        FlowRouter.go("articleList");
      }
    });
  }
});
