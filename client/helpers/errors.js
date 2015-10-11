/**
 * Created by jym on 2015/9/1.
 */
Errors= new Mongo.Collection(null);
throwError=function(message){
  Errors.insert({message:message});
};


