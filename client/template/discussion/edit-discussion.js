/**
 * Created by jym on 2015/9/29.
 */

Template.editDiscussion.onRendered( function () {
  $('#content').wysiwyg();
});

Template.editDiscussion.helpers({
  errorMessage:function(field){
    myContext = Discussion.simpleSchema().namedContext("update");
    return myContext.keyErrorMessage(field);
  },
  discussions: function () {
    return  Discussion.findOne({_id: FlowRouter.getParam("discId")});
  },
});

Template.editDiscussion.events({
  "submit form": function (e, params) {
    e.preventDefault();
    var subject = $(e.target).find('[name=subject]').val();
    var content = params.$("#content").html();
    var post ={subject:subject, content: content};
    var updateId=this._id;
    Discussion.update(updateId, {$set: post}, function (error, result) {
      if(result)
      {
        console.log(result);
        FlowRouter.go("discussion");
      }
    });
  },
});
