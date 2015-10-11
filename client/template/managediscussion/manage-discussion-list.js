/**
 * Created by jym on 2015/10/9.
 */
Template.manageDiscussionList.helpers({
  discussionList: function () {
    return Discussion.find();
  },
});
