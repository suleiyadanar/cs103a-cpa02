# cs103a-cpa02 ToRead App 
Heroku Link : https://still-lowlands-62360.herokuapp.com/

"Proof of Concept" Video : https://brandeis.zoom.us/rec/share/zehseZN3_VTKthYolPDFIZzpYkf6zaM83zrtGq88jFh0__q8uF2YfVBxhYmrssjO.AdsHSIPaQC4r2elc?startTime=1651249895000


This is a project which has a simple authentication module 
and provides access to a mongoose database in the cloud. 
It uses the Google Book API to search for books using a keyword in
book title or author and allows the user to read brief descriptions 
and add them to their reading WishList.


## Installation
Download the project from github and download nodejs and npm from https://nodejs.org
and cd into the folder

Install the packages with
``` bash
npm install
```
Start the project with
``` bash
node app.js
```
or install nodemon (the node monitoring app) with
``` bash
npm install -g nodemon
```
and start the project with
``` bash
nodemon
```

# How To Use

## Landing Home Page
- includes a search form 
<img width="600" alt="Screenshot 2022-04-29 at 9 43 34 AM" src="https://user-images.githubusercontent.com/84138664/165959841-3a82e006-2188-49f2-8a85-dc51892ea492.png">

## Login/SignUp Page
- click login/signup tab in the navigation bar to modify/view personal wishlist
<img width="600" alt="Screenshot 2022-04-29 at 9 45 13 AM" src="https://user-images.githubusercontent.com/84138664/165960449-e9f1cc5c-7485-4693-94da-1097c00b1ecd.png">

## Search
- enter ONE keyword in either title or author input fields
<img width="700" alt="Screenshot 2022-04-29 at 9 52 11 AM" src="https://user-images.githubusercontent.com/84138664/165960675-fd055e15-e21e-46a5-9a09-253d988e2e97.png">
- This will show the search results
<img width="700" alt="Screenshot 2022-04-29 at 9 52 29 AM" src="https://user-images.githubusercontent.com/84138664/165962028-bb40b0b1-d99c-4fc5-9230-10f2e249f404.png">
- click Read More>> under each book card to read more details
<img width="700" alt="Screenshot 2022-04-29 at 9 56 22 AM" src="https://user-images.githubusercontent.com/84138664/165962751-3c47f892-cc3c-4957-b285-ac05ca173981.png">

## Adding to ToRead WishList
- Click the red '+' button
<img width="250" alt="Screenshot 2022-04-29 at 10 20 03 AM" src="https://user-images.githubusercontent.com/84138664/165963070-9b8e03fb-12b8-4fd4-8fc3-7821be30a192.png">
OR 
- Click Read More>> and click "+ Add to WishList "
<img width="245" alt="Screenshot 2022-04-29 at 10 19 44 AM" src="https://user-images.githubusercontent.com/84138664/165963245-99319ab6-6d23-4bde-9f2e-c0623c254c24.png">

## Access WishList
- Click "WishList" tab in the navigation bar
<img width="700" alt="Screenshot 2022-04-29 at 10 26 00 AM" src="https://user-images.githubusercontent.com/84138664/165964035-b6bb600e-e1c9-4ac7-9e8a-821957340871.png">

## Delete book from WishList
- Click the yellow "-" at the right bottom of button 

