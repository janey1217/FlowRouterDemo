/**
 * Created by jym on 2015/9/30.
 */

Template.singleDiscussion.helpers({
  discussions: function () {
    //console.log(FlowRouter.getParam("discId"));
    return  Discussion.findOne({_id: FlowRouter.getParam("discId")});
  }
});

Template.singleDiscussion.events({
  "click a .replyBtn": function () {

  },
})
