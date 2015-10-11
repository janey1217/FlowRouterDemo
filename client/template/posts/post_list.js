/**
 * Created by jym on 2015/9/9.
 */

Template.postList.helpers({
  postLists: function () {
    return Article.find();
  }
});
