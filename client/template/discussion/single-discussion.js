/**
 * Created by jym on 2015/9/30.
 */
Template.singleDiscussion.onCreated(function () {
  var openPageTime = new Date();
  Session.set('setPageTime', openPageTime);
  this.subscribe('singleDiscussion', FlowRouter.getParam("discId"));
  this.subscribe('commentItem', FlowRouter.getParam("discId") , parseInt(FlowRouter.getQueryParam("limitNum"))+1, Session.get('setPageTime'));
  this.subscribe('commentItemAfter', FlowRouter.getParam("discId") , Session.get('setPageTime'));
  //console.log("时间"+Session.get('setPageTime'));
});

Template.singleDiscussion.helpers({
  discussions: function () {
    //console.log(FlowRouter.getParam("discId"));
    return Discussion.findOne({_id: FlowRouter.getParam("discId")});
  },

});

Template.singleDiscussion.events({
  "click a .replyBtn": function () {

  },
})
