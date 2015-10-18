/**
 * Created by jym on 2015/9/29.
 */

var PAGE_SIZE = 5;

Template.listDiscussion.onCreated(function () {
 // var nowdatetime = new Date();
 // console.log(moment(nowdatetime).format("YYYY-MM-DD  HH:mm:ss"));
});

Template.listDiscussion.helpers({
  listDiscussions: function () {
    //console.log(parseInt(FlowRouter.getParam("limitNum")));
    //console.log(parseInt("显示数量"+(parseInt(FlowRouter.getParam("limitNum"))-1)));
    //return Discussion.find({},{sort: {setTop :-1,createdAt: -1}});
    return Discussion.find({}, {
      sort: {setTop: -1, createdAt: -1},
      limit: (parseInt(FlowRouter.getParam("limitNum")))
    });
  },
  discussionCount: function () {
    var limit = parseInt(FlowRouter.getParam("limitNum"));
    var count = Discussion.find().count();
    console.log(count);
    return count == limit + 1;

/*    var currentPage = Session.get('currentPage');
    console.log("请求总数量" + count);
    if (count > (currentPage * 5)) {
      console.log("hello");
      return true;
    } else {
      return false;
    }*/
  }
});

Template.listDiscussion.events({
  "click .load-more": function (e, template) {
    e.preventDefault();
    var pages = parseInt(FlowRouter.getParam("limitNum")) + PAGE_SIZE;
    FlowRouter.go("discussion", {limitNum: pages});
  }
});
