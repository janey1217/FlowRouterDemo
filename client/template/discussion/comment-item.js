/**
 * Created by jianyanmin on 15/10/6.
 */

Template.commentItem.helpers({
  myComment: function () {
    console.log(this.userId);
    if(this.userId==Meteor.userId()){
      return false;
    } else {
      return true;
    }
  }

});
