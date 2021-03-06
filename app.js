var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./app_api/models/db');
var uglifyJs = require("uglify-js");
var fs = require('fs');

var routesApi = require('./app_api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');


var appClientFiles = {
    "app_client/app.js": fs.readFileSync("app_client/app.js", "utf8"),
    "app_client/home/home.controller.js": fs.readFileSync("app_client/home/home.controller.js", "utf8"),
    "app_client/about/about.controller.js": fs.readFileSync("app_client/about/about.controller.js", "utf8"),
    "app_client/why/why.controller.js": fs.readFileSync("app_client/why/why.controller.js", "utf8"),
    "app_client/route/route.controller.js": fs.readFileSync("app_client/route/route.controller.js", "utf8"),
    "app_client/common/directives/navigation/navigation.directive.js": fs.readFileSync("app_client/common/directives/navigation/navigation.directive.js", "utf8"),
    "app_client/common/directives/timeline/timeline.directive.js": fs.readFileSync("app_client/common/directives/timeline/timeline.directive.js", "utf8"),
    "app_client/common/services/transdepData.service.js": fs.readFileSync("app_client/common/services/transdepData.service.js", "utf8"),
    "app_client/common/filters/dateInMillis.filter.js": fs.readFileSync("app_client/common/filters/dateInMillis.filter.js", "utf8"),
    "app_client/common/filters/dateInHour.filter.js": fs.readFileSync("app_client/common/filters/dateInHour.filter.js", "utf8"),
    "app_client/common/filters/addHtmlLineBreaks.filter.js": fs.readFileSync("app_client/common/filters/addHtmlLineBreaks.filter.js", "utf8"),
    "app_client/common/filters/distanceInKm.filter.js": fs.readFileSync("app_client/common/filters/distanceInKm.filter.js", "utf8")
};


var uglified = uglifyJs.minify(appClientFiles, { compress : false });

fs.writeFile('public/angular/busLoc.min.js', uglified.code, function(err) {
    if(err) {
	console.log(err);
    } else {
	console.log('Script generated and saved: busLoc.min.js');
    }
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

app.use('/api', routesApi);

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
