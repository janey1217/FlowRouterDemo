/**
 * Created by jym on 2015/10/9.
 */

Template.manageDiscussionList.onRendered( function () {
  $('#content').wysiwyg();
});

Template.manageDiscussionList.onCreated( function(){
  Session.set('editDisc',{});
});

Template.manageDiscussionList.helpers({
  discussionList: function () {
    return Discussion.find();
  },

  editDisc: function (field) {
    return Session.get('editDisc')[field];
  }
});

Template.manageDiscussionList.events({
  "submit form": function (e, template) {
    e.preventDefault();
    var  id = template.$("#id").val();
    var subject = template.$("#subject").val();
    var content = template.$("#content").html();
    var post = {subject: subject, content: content};
    Discussion.update(id, {$set: post}, function (error, result) {
      if(result)
      {
        console.log(result);
       // FlowRouter.go("discussion");
        window.location.reload();
      }
    });
  },
});
