/**
 * Created by jym on 2015/9/29.
 */
Template.listDiscussion.helpers({
  listDiscussions: function () {
   return Discussion.find({},{sort: {createdAt: -1}});
  },
});
