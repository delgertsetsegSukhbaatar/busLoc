var mongoose = require('mongoose');
var Routes = mongoose.model('Route');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


/* GET list of routes */

module.exports.routesList = function(req, res) {
  Routes
    .find()
    .exec(function(err, routes){
      if(!routes) {
        sendJSONresponse(res, 404, {
          "message": "no routes found"
        })
      } else {
        sendJSONresponse(res, 200, routes);
      }
    });
};


module.exports.routesCreate = function (req, res) {
  console.log(req.body);
  Routes
  .create({
      from: req.body.from,
      to: req.body.to,
      departures: [{
        date: new Date(),
        bus: {
          licenseNumber: req.body.bus.licenseNumber;
          driver: req.body.bus.driver;
        }
      }]
  }, function(err, route) {
    if(err) {
      sendJSONresponse(res, 400, err);
    } else {
      sendJSONresponse(res, 201, route);
    }
  });
};


module.export.routesUpdateOne = function(req, res) {
  if(!req.params.routeid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, routeid is required"
    });
    return;
  }
  Routes
    .findById(req.params.routeid)
    .exec( function(err, route) {
      if(!route) {
        sendJSONresponse(res, 404, {
          "message": "routeid not found"
        });
        return;
      } else if(err) {
        sendJSONresponse(res, 404, err);
        return;
      }
      route.from = req.body.from;
      route.to = req.body.to;

      /*
      
      */
      route.save(function(err, route) {
        if(err) {
          sendJSONresponse(res, 404, err);
        } else {
          sendJSONresponse(res, 200, route);
        }
      });
    });
};

/* DELETE /api/route/:routeid */
module.exports.routesDeleteOne = function(req, res) {
  var routeid = req.params.routeid;
  if (routeid) {
    Routes
      .findByIdAndRemove(routeid)
      .exec(
        function(err, route) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("Route id " + routeid + " deleted");
          sendJSONresponse(res, 204, null);
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "No routeid"
    });
  }
};