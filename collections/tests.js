/**
 * Created by jym on 2015/9/17.
 */

MySchema = new SimpleSchema({
    "mailingAddress.street": {
        type: String
    },
    "mailingAddress.city": {
        type: String
    }
});
check({}, MySchema);
if (Meteor.isClient) {
  Meteor.startup(function() {
    Tracker.autorun(function() {
      var context = MySchema.namedContext("myContext");
      if (!context.isValid()) {
        console.log(context.invalidKeys());
      }
    });
  });
}
