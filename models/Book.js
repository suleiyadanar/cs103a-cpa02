'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

var bookSchema = Schema( {
    _id:Number,
    title: String,
    author: String,
    rating: Number,
    voters: String,
    price: Number,
    currency: String,
    description: String,
    publisher: String,
    page_count: Number,
    generes: String,
    isbn: String,
    language: String,
    published_date: String,
    image: String
} );

module.exports = mongoose.model( 'Book', bookSchema );
