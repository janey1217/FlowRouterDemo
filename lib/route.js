/**
 * Created by jym on 2015/9/8.
 */

//��Ŀ¼���
FlowRouter.route('/', {
  subscriptions: function (params, queryParams) {
    this.register('posts', Meteor.subscribe("allPostList"));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {top: 'header', main: 'firstPage'});
  },
  name: "home"
});

//�ύ����
FlowRouter.route('/post', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {top: 'header', main: 'postContent'});
  },
  name: "post"
});

//�б���ʾ
FlowRouter.route('/articleList', {
  subscriptions: function (params, queryParams) {
    this.register('posts', Meteor.subscribe("allPostList"));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {top: 'header', main: 'postList'});
  },
  name: "articleList"
});
//��ʾ��ҳ
FlowRouter.route('/singlePage/:postId', {
  subscriptions: function (params, queryparams) {
    this.register("singlePost", Meteor.subscribe("singlePost", params.postId));
  },
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {top: "header", main: "singlePage"})
  },
  name: "singlePage"
});
//�༭ҳ��
FlowRouter.route('/editor/:postId', {
  subscriptions: function (params, queryParams) {
    this.register('editorPost', Meteor.subscribe('singlePost', params.postId));
  },
  action: function(params, queryParams) {
    BlazeLayout.render('layout',{top: "header", main: "editorPost"});
  },
  name: "editorPost"
});

//lesspage
FlowRouter.route('/lesspage', {
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { main: 'lessPage'});
  },
  name: "lessPage"
});

//����ҳ��
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

FlowRouter.route('/discussion', {
  subscriptions: function () {
    this.register('discussionList',Meteor.subscribe("listDiscussion"));
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
FlowRouter.route('/discussion/:discId', {
  subscriptions: function (params, queryParams) {
    console.log(params.discId);
    this.register('singleDisc', Meteor.subscribe('singleDiscussion', params.discId));
    this.register('commentItem', Meteor.subscribe('commentItem', params.discId));
  },
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
