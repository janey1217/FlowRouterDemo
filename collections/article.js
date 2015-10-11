/**
 * Created by jym on 2015/9/24.
 */
Article = new  Mongo.Collection("article");
var schema = {};
schema.Article =new SimpleSchema({
  title: {
    type: String,
    label: " Title",
    max:200
  },
  content: {
    type: String,
    label:" 内容"
  },

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
});

Article.attachSchema(schema.Article);




