/**
 * Created by jianyanmin on 15/10/7.
 */
var PAGE_SIZE = 5;
Template.discussionItem.helpers({
    commentItems: function () {
        console.log(FlowRouter.getParam("discId"));
        return Comments.find({discussionId: FlowRouter.getParam("discId")});
    },
  canModify: function () {
    return this.userId == Meteor.userId()
  }
});

Template.discussionItem.events({
    /*"click .deleDisc": function (e, template) {
     e.preventDefault();
     if (confirm("Delete this Discussion?")) {
     var updateId = template.data._id;
     console.log(updateId);
     Discussion.remove(updateId);
     Comments.remove({discussionId: updateId});
     }
     },*/
    "click .upVote": function (e, params) {
        e.preventDefault();
        if (confirm("UpVote  this Discussion?")) {
            var updateId = params.data._id;
            var disc = Discussion.findOne({_id: updateId});
            //console.log(disc);
            if (!disc) {
                throw new Meteor.Error('invalid', 'Discussion not found');
            }
            if (_.include(disc.upVote, Meteor.user()._id)) {
                console.log("hello");
                throw new Meteor.Error('invalid', 'User is exist');
            }
            else {
                //console.log(disc._id);
                Discussion.update(disc._id, {
                    $addToSet: {upVote: Meteor.user()._id},
                    $inc: {upVoteCount: 1}
                }, function (error, result) {
                    console.log(result);
                });
                // console.log(updateId);
                //Discussion.remove(updateId);
                //Comments.remove({discussionId: updateId});
            }
        }

    }
});

//upvote: function(postId) {
//    check(this.userId, String);
//    check(postId, String);
//    var post = Posts.findOne(postId);
//    if (!post)
//        throw new Meteor.Error('invalid', 'Post not found');
//    if (_.include(post.upvoters, this.userId))
//        throw new Meteor.Error('invalid', 'Already upvoted this post');
//    Posts.update(post._id, {
//        $addToSet: {upvoters: this.userId},
//        $inc: {votes: 1}
//    });
//}
