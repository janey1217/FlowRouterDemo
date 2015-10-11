/**
 * Created by jym on 2015/10/10.
 */
Template.manageDiscussionItem.events({
  "click button.viewBtn ": function (e, template) {
   console.log(template.data._id);
   // e.preventDefault();
    //console.log("hello viewBtn");
      FlowRouter.go("singleDisc", {discId : template.data._id});

  },

  "click button.editorBtn ": function (e, template) {
     console.log(template.data._id+"  "+ template.data.subject+" "+template.data.content);
     // e.preventDefault();
     // console.log("hello");
      var editDisc={_id:template.data._id, subject:template.data.subject, content:template.data.content };
      console.log(editDisc);
      Session.set("editDisc",editDisc);

      $(".modalBtn").click();
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
