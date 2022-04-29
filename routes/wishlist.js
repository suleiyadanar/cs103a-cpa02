/*
  wishlist.js 

  This router defines the following routes
  /wishlist (get)
  /wishlist/add (post)
  /wishlist/delete (get)

  Allows the user adds/delete or access their wishlist, for use in the app.js controller
  and it sets the res.locals items for use in the view

*/

const express = require('express');
const router = express.Router();
const WishList = require('../models/WishList')
const axios = require("axios");
const API_KEY = process.env.API_KEY;

// middleware to test is the user is logged in, and if not, send them to the login page

const isLoggedIn = (req,res,next) => {
    if (res.locals.loggedIn) {
      next()
    }
    else res.redirect('/login')
  }
/*
    WishList routes
*/
router.get('/wishlist',
  isLoggedIn,   // redirect to /login if user is not logged in
  async (req,res,next) => {
    try{
      let userId = res.locals.user._id;  // get the user's id
      let items = await WishList.find({userId:userId}); // lookup the user's wishlist 
      res.locals.items = items;  //make the items available in the view
      res.render('wishlist');  // render to the wishList page
    } catch (e){
      next(e);
    }
  }
  )
  router.post('/wishlist/add',
  isLoggedIn,
  async (req,res,next) => {
    try{
      const {isbnRes} = req.body; // get title and description from the body
      const userId = res.locals.user._id; // get the user's id
      const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q="+isbnRes+"&maxResults=20&key="+API_KEY)
      const title = response.data.items[0]['volumeInfo']['title']
      const author =JSON.stringify(response.data.items[0]['volumeInfo']['authors']).replace(/^\[(.+)\]$/,'$1')
      const isbn = isbnRes
      const image=response.data.items[0]['volumeInfo']['imageLinks']['thumbnail']
      const book = WishList.findOne({ isbn: isbn})
  
      if(!book.data){
        let data = {userId, title, author, image, isbn}
        let items = new WishList(data) 
        await items.save() 
      }
      res.redirect('/wishlist')  // go back to the todo page
    } catch (e){
      next(e);
    }
  }
  )
  router.get("/wishlist/delete/:itemId",
    isLoggedIn,
    async (req,res,next) => {
      try{
        const itemId=req.params.itemId; // get the id of the item to delete
        await WishList.deleteOne({_id:itemId}) // remove that item from the database
        res.redirect('/wishlist') // go back to the todo page
      } catch (e){
        next(e);
      }
    }
  )

module.exports = router;
