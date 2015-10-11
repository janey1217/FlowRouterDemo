/**
 * Created by jym on 2015/9/9.
 */
Meteor.publish('allPostList', function () {
  return Article.find();
});

Meteor.publish('singlePost', function(postId) {
  return Article.find({_id: postId});
});

//社群论坛
Meteor.publish('listDiscussion', function () {
  return Discussion.find();
});

Meteor.publish('singleDiscussion', function (discId) {
  return Discussion.find({_id: discId});
});

Meteor.publish('comment', function () {
  return Discussion.find();
});

Meteor.publish('commentItem', function (discId) {
  return Comments.find({discussionId: discId});
});

