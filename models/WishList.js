'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var wishlistSchema = Schema( {
  userId: ObjectId,
  title: Mixed,
  author: Mixed,
  image:Mixed,
  isbn:Mixed
} );

module.exports = mongoose.model( 'WishList', wishlistSchema );
