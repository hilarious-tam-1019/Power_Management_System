# Power management system project

## Description
This is an IOT project for power management in houses.
The data value is pickup by sensors and send to Raspberry Pi 3 by MQTT protocol. 
The Pi will then generate Json files to send to the database (MongoDB).
The above code is the implementation to query the data and put it to display.

## Tech stack
The front-end is written in basic HTML, SCSS/CSS, Javascript.

The back-end is written using Express.js.

## Code base structure
```js
+-- auth // authentication on the front end
|   +-- loginform.js
|   +-- resform.js
+-- model // base user model
|   +-- user.js
+-- public // public files like images, css, front-end scripts
|   +-- css // styling of the project
|   |   +-- globals.css
|   |   +-- globals.css.map
|   |   +-- style.css
|   |   +-- style.css.map
|   |   +-- ...
|   +-- images // icludes images of the site
|   |   +-- logopng
|   |   +-- orange-background.jpg
|   |   +-- shake-hand.jpg
|   +-- chartscript.js
|   +-- charscript1.js
|   +-- script.js
+-- routes // contains all the routes 
|   +-- web_routes.js
+-- scss // contains all scss files
|   +-- _animations.scss
|   +-- _globals.scss
|   +-- _header.scss
|   +-- ...
+-- views // contains ejs files for the app
|   +-- partials // includes header, footer, ...
|   |   +-- head.ejs
|   |   +-- nav.ejs
|   +-- 404.ejs
|   +-- about.ejs
|   +-- home.ejs
|   +-- ...
+-- other files
+-- .env 
+-- website.js // running the web app
```


## Features to implement
Using a front-end framework.
Testing.
Displaying in a variety of charts for better viewing.


