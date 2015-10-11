/**
 * Created by jym on 2015/9/9.
 */
Posts = new Mongo.Collection('posts');
var Schema = {};
Schema.Post = new SimpleSchema({
  title : {
    type :String,
    label:"title",
  },
  content : {
    type : String,
    label : "content",
  }
});
Posts.attachSchema(Schema.Post);


validatePost = function (post) {
  var errors = {};
  if (!post.title)
    errors.title = "请填写标题";
  if (!post.content)
    errors.content =  "请填写内容";
  return errors;
};
