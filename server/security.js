/**
 * Created by jym on 2015/9/9.
 */
Article.allow({
  insert: function (userId, doc) {
    return Match.test();
  }
});

//社群论坛区块
Discussion.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

Comments.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});
