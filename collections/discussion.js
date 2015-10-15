/**
 * Created by jym on 2015/9/28.
 */

Discussion = new  Mongo.Collection("discussion");
var schema = {};
schema.Discussion =new SimpleSchema({
  subject: {
    type: String,
    label: " subject",
    max:200
  },
  content: {
    type: String,
    label:" content",
    min: 20
  },
  userId: {
    type: String,
  },
  userName: {
    type: String,
    optional: true
  },
  commentCount: {
    type: Number,
    optional: true
   },
   upVote: {
     type: [String],
     optional: true
   },
  upVoteCount: {
    type: Number,
    optional: true
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

  lastReplyAt: {
    type: Date,
    optional: true
  },
  lastReplyUser: {
    type: String,
    optional: true
  },
  imgPath: {
    type: [String],
    optional: true
  }
});

Discussion.attachSchema(schema.Discussion);
