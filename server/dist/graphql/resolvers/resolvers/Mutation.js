"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Mutation=void 0;var _nanoid=require("nanoid");function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _defineProperty(obj,key,value){key=_toPropertyKey(key);if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return _typeof(key)==="symbol"?key:String(key)}function _toPrimitive(input,hint){if(_typeof(input)!=="object"||input===null)return input;var prim=input[Symbol.toPrimitive];if(prim!==undefined){var res=prim.call(input,hint||"default");if(_typeof(res)!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return(hint==="string"?String:Number)(input)}var Mutation={// User
createUser:function createUser(_,args,_ref){var pubSub=_ref.pubSub,db=_ref.db;var user={id:(0,_nanoid.nanoid)(),fullName:args.data.fullName,age:args.data.age};db.users.push(user);pubSub.publish("userCreated",{userCreated:user});return user},updateUser:function updateUser(_,_ref2,_ref3){var id=_ref2.id,data=_ref2.data;var pubSub=_ref3.pubSub,db=_ref3.db;var user_index=db.users.findIndex(function(user){return user.id===id});if(user_index===-1){throw new Error("User not found.")}var update_user=db.users[user_index]=_objectSpread(_objectSpread({},db.users[user_index]),data);pubSub.publish("userUpdated",{userUpdated:update_user});return update_user},deleteUser:function deleteUser(_,__,_ref4){var pubSub=_ref4.pubSub,db=_ref4.db;var user_index=db.users.findIndex(function(user){return user.id===id});if(user_index===-1){throw new Error("User not found.")}var deleted_user=db.users[user_index];db.users.splice(user_index,1);pubSub.publish("userDeleted",{userDeleted:deleted_user});return deleted_user},deleteAllUsers:function deleteAllUsers(_,__,_ref5){var db=_ref5.db;var length=db.users.length;db.users.splice(0,length);return{count:length}},// Post
createPost:function createPost(_,_ref6,_ref7){var _ref6$data=_ref6.data,title=_ref6$data.title,user_id=_ref6$data.user_id;var pubSub=_ref7.pubSub,db=_ref7.db;var post={id:(0,_nanoid.nanoid)(),title:title,user_id:user_id};db.posts.push(post);pubSub.publish("postCreated",{postCreated:post});pubSub.publish("postsCount",{postsCount:db.posts.length});return post},updatePost:function updatePost(_,_ref8,_ref9){var id=_ref8.id,data=_ref8.data;var pubSub=_ref9.pubSub,db=_ref9.db;var post_index=db.posts.findIndex(function(post){return post.id===id});if(post_index===-1){throw new Error("Post not found.")}var updated_post=db.posts[post_index]=_objectSpread(_objectSpread({},db.posts[post_index]),data);pubSub.publish("postUpdated",{postUpdated:updated_post});return updated_post},deletePost:function deletePost(_,_ref10,_ref11){var id=_ref10.id;var pubSub=_ref11.pubSub,db=_ref11.db;var post_index=db.posts.findIndex(function(post){return post.id===id});if(post_index===-1){throw new Error("Post not found.")}var deleted_post=db.posts[post_index];db.posts.splice(post_index,1);pubSub.publish("postDeleted",{postDeleted:deleted_post});pubSub.publish("postsCount",{postsCount:posts.length});return deleted_post},deleteAllPosts:function deleteAllPosts(_,__,_ref12){var pubSub=_ref12.pubSub,db=_ref12.db;var length=db.posts.length;db.posts.splice(0,length);pubSub.publish("postsCount",{postsCount:db.posts.length});return{count:length}},// Comment
createComment:function createComment(_,_ref13,_ref14){var data=_ref13.data;var pubSub=_ref14.pubSub,db=_ref14.db;var comment=_objectSpread({id:(0,_nanoid.nanoid)()},data);db.comments.push(comment);pubSub.publish("commentCreated",{commentCreated:comment});return comment},updateComment:function updateComment(_,_ref15,_ref16){var id=_ref15.id,data=_ref15.data;var pubSub=_ref16.pubSub,db=_ref16.db;var comment_index=db.comments.findIndex(function(comment){return comment.id===id});if(comment_index===-1){throw new Error("Comment not found.")}var updated_comment=db.comments[comment_index]=_objectSpread(_objectSpread({},db.comments[comment_index]),data);pubSub.publish("commentUpdated",{commentUpdated:updated_comment});return updated_comment},deleteComment:function deleteComment(_,_ref17,_ref18){var id=_ref17.id;var pubSub=_ref18.pubSub,db=_ref18.db;var comment_index=db.comments.findIndex(function(comment){return comment.id===id});if(comment_index===-1){throw new Error("Comment not found")}var deleted_comment=db.comments[comment_index];db.comments.splice(comment_index,1);pubSub.publish("commentDeleted",{commentDeleted:deleted_comment});return deleted_comment},deleteAllComments:function deleteAllComments(_,__,_ref19){var db=_ref19.db;var length=db.comments.length;db.comments.splice(0,length);return{count:length}}};exports.Mutation=Mutation;