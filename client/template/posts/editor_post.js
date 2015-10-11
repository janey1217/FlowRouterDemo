/**
 * Created by jym on 2015/9/11.
 */

Template.editorPost.helpers({
  post: function () {
    return Article.findOne({_id: FlowRouter.getParam("postId")});
  }
});
