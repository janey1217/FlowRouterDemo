/**
 * Created by jym on 2015/9/29.
 */
Template.listDiscussion.helpers({
  listDiscussions: function (e, template) {
    console.log(FlowRouter.getParam("limitNum"));
    console.log(Discussion.find().count());
    return Discussion.find({},{sort: {createdAt: -1}});
   //return Discussion.find({},{sort: {createdAt: -1}},{limit:FlowRouter.getParam("limitNum")});
  },
});
