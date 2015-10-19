/**
 * Created by jym on 2015/9/30.
 */

Template.singleDiscussion.onCreated(function () {
   openPageTime = new Date();
  //this.subscribe('singleDiscussion', FlowRouter.getParam("discId"));
  //this.subscribe('commentItem', FlowRouter.getParam("discId"), parseInt(FlowRouter.getQueryParam("limitNum"))+1);
 // console.log(moment(nowdatetime).format("YYYY-MM-DD  HH:mm:ss"));
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
