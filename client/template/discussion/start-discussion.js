/**
 * Created by jym on 2015/9/29.
 */

Template.startDiscussion.onRendered( function () {
  $('#content').wysiwyg();
});

//$('#content').wysiwyg();
Template.startDiscussion.helpers({
  errorMessage:function(field){
    var myContext = Discussion.simpleSchema().namedContext("insert");
    return myContext.keyErrorMessage(field);
  }
});

Template.startDiscussion.events({
  "submit form": function (e, template) {
    e.preventDefault();
    var subject = $(e.target).find('[name=subject]').val();
    var content = template.$("#content").html();
    var post ={subject:subject, content: content};
    post= _.extend(post,{
          userId:Meteor.user()._id,
          userName: Meteor.user().profile.name,
          commentCount: 0,
          upVoteCount: 0
        });
   // console.log(post);
    Discussion.insert(post,{ validationContext: "insert"}, function(error, result) {
      var myContext1 = Discussion.simpleSchema().namedContext("insert");
      console.log(myContext1.getErrorObject());
      console.log(result);
      if(result) {
        FlowRouter.go("discussion");
      }
    });
  }
});