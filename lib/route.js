/**
 * Created by jym on 2015/9/8.
 */

FlowRouter.route('/', {
  subscriptions: function (params, queryParams) {
    this.register('posts', Meteor.subscribe("allPostList"));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {top: 'header', main: 'firstPage'});
  },
  name: "home"
});

FlowRouter.route('/post', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {top: 'header', main: 'postContent'});
  },
  name: "post"
});

FlowRouter.route('/articleList', {
  subscriptions: function (params, queryParams) {
    this.register('posts', Meteor.subscribe("allPostList"));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {top: 'header', main: 'postList'});
  },
  name: "articleList"
});

FlowRouter.route('/singlePage/:postId', {
  subscriptions: function (params, queryparams) {
    this.register("singlePost", Meteor.subscribe("singlePost", params.postId));
  },
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {top: "header", main: "singlePage"})
  },
  name: "singlePage"
});

FlowRouter.route('/editor/:postId', {
  subscriptions: function (params, queryParams) {
    this.register('editorPost', Meteor.subscribe('singlePost', params.postId));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('layout',{top: "header", main: "editorPost"});
  },
  name: "editorPost"
});


FlowRouter.route('/lesspage', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { main: 'lessPage'});
  },
  name: "lessPage"
});


FlowRouter.route('/page2', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {top: 'header', main: 'insertBookForm'});
  },
  name: "page2"
});

FlowRouter.route('/blog/:postId', {
  action: function (params, queryParams) {
    console.log("Yeah! We are on the post:", params.postId);
  }
});

//FlowRouter.route('/discussion', {
//  subscriptions: function (params, queryParams) {
//    console.log(params.limitNum );
//    this.register('discussionList',Meteor.subscribe("listDiscussion" ));
//  },
//  action: function (params, queryParams) {
//    BlazeLayout.render("layout", { top: 'header', part: 'discussionLayout',discussionMain: 'listDiscussion'})
//  },
//  name: 'discussion'
//});

//分页测试
FlowRouter.route('/discussion/:limitNum', {
  subscriptions: function (params, queryParams) {
    //console.log("请求数据"+params.limitNum );
    this.register('discussionList',Meteor.subscribe("listDiscussion", parseInt(params.limitNum)+1));
  },
  action: function (params, queryParams) {
    BlazeLayout.render("layout", { top: 'header', part: 'discussionLayout',discussionMain: 'listDiscussion'})
  },
  name: 'discussion'
});

FlowRouter.route('/start', {
  action: function (params, queryParams) {
    BlazeLayout.render("layout", { top: 'header',  part: 'discussionLayout',discussionMain: 'startDiscussion'})
  },
  name: 'start'
});

//讨论单页
FlowRouter.route('/singlediscussion/:discId', {
  /*subscriptions: function (params, queryParams) {
    this.register('singleDisc', Meteor.subscribe('singleDiscussion', params.discId));
        this.register('commentItem', Meteor.subscribe('commentItem', params.discId));
  },*/
  action: function(params, queryParams) {
    BlazeLayout.render('layout',{ top: 'header',  part: 'discussionLayout',discussionMain: 'singleDiscussion'});
  },
  name: "singleDisc"
});

//编辑单页
FlowRouter.route('/discussion/edit/:discId', {
  subscriptions: function (params, queryParams) {
    this.register('singleDisc', Meteor.subscribe('singleDiscussion', params.discId));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('layout',{ top: 'header',  part: 'discussionLayout',discussionMain: 'editDiscussion'});
  },
  name: "editDisc"
});

//讨论单页
FlowRouter.route('/manageDiscussion', {
  subscriptions: function () {
      this.register('discussionList',Meteor.subscribe("listDiscussion"));
    },
  action: function(params, queryParams) {
    BlazeLayout.render('layout',{ top: 'header',  part: 'discussionLayout',discussionMain: 'manageDiscussionList'});
  },
  name: "manageDiscussion"
});
