# multipart form upload app+server 

## how to install
`$ npm install` 
*this will get all dependencies*
`$ grunt`
*this will build the client app and get application dependencies (IMPORTANT!: must run at least once)*

## how to develop
`$ grunt develop` 
*this wil build dev version and watch*
`$ grunt watch`
*this will build and watch*

## how to run
`$ node server.js` 
*this will start the server at localhost://3000*

## known issues
-   photo's get stored but preview does not work
-   when server stores file it does not set the name correctly
-   more unit tests needed