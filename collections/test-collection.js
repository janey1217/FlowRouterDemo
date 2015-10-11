/**
 * Created by jym on 2015/9/26.
 */
TestDocs = new Mongo.Collection("test-doc", {
  transform: function (doc) {
    doc.name && (doc.name += "xx");
    doc.updateDate = new Date();
    return doc;
  }
});

TestDocs.attachSchema(mySchema);

TestDocs.simpleSchema().messages({"notUnique": "姓名 [value] 已经存在！"});

TestDocs.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish("allTestDocs", function () {
    return TestDocs.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("allTestDocs");
}
