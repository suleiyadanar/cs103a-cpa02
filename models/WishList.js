'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var wishlistSchema = Schema( {
  userId: ObjectId,
  title: String,
  author: Mixed,
  image:String,
  isbn:Number
} );

module.exports = mongoose.model( 'WishList', wishlistSchema );
