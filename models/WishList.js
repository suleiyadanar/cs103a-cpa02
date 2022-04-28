'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var wishlistSchema = Schema( {
  userId: ObjectId,
  _id: Number,
} );

module.exports = mongoose.model( 'WishList', wishlistSchema );
