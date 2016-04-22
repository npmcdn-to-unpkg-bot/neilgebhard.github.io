# grunt-shell
A frontend architecture for developing web applications

#### Commands

Launch local server with livereload, jshint, and browserify

`grunt server`


 Bundle and minify

`grunt`


Bundle without minification
 
`grunt build`

Compile react

`browserify -t [ babelify --presets [ react ] ] main.js -o bundle.js`