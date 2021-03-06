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
Meteor.publish('listDiscussion', function (limitNum) {
  return Discussion.find({},{sort: {setTop: -1, createdAt: -1}, limit: limitNum});
});

//Meteor.publish('listDiscussion1', function (limitNum) {
//  return Discussion.find({},{limit:limitNum});
//});

Meteor.publish('singleDiscussion', function (discId) {
  return Discussion.find({_id: discId});
});

Meteor.publish('comment', function () {
  return Discussion.find();
});

Meteor.publish('commentItemBefore', function (discId, limitNum, setPageTime) {
  //console.log("sassa"+limitNum);
  return Comments.find({discussionId: discId, createdAt: {$lte:setPageTime}},{sort: {createdAt: -1}, limit: limitNum } );
});

Meteor.publish('commentItemAfter', function (discId,setPageTime) {
  //console.log("sassa"+limitNum);
  return Comments.find({discussionId: discId, createdAt: {$gt:setPageTime}});
});


