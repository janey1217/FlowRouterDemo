/**
 * Created by jym on 2015/10/10.
 */
Template.manageDiscussionItem.events({
  "click button.viewBtn ": function (e, template) {
   console.log(template.data._id);
   // e.preventDefault();
    console.log("hello viewBtn");
  },

  "click button.editorBtn ": function (e, template) {
    // console.log(template.data._id);
     // e.preventDefault();
     // console.log("hello");
    template.$(".viewBtn").click();
    },

  "click button.deleteBtn ": function (e, template) {
     console.log(template.data._id);
     // e.preventDefault();
      console.log("hello");
    },

  "click button.topBtn ": function (e, template) {
       console.log(template.data._id);
       // e.preventDefault();
        console.log("hello");
      },
});
