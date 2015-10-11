/**
 * Created by jym on 2015/9/26.
 */
mySchema = new SimpleSchema({
  name: {
    type: String,
    label: "姓名",
   /* custom: function () {
      if (this.value.indexOf("Jane") < 0) return "noJane";
    }*/
    index: true,
    unique: true
  },
  count: {
    type: Number,
    label: "计数"
  }
});

/*
mySchema.addValidator(function () {

});
SimpleSchema.addValidator(function () {

});
*/

mySchema.messages({noJane: "姓名必须要有Jane，当前值：[value]", "required password": "密码必须要填", "notUnique name": "姓名 [value] 已经存在！"});

mySchemaContext = mySchema.namedContext("1");
