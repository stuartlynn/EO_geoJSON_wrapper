var express = require('express');
var request = require('request')
var app = express();


// respond with "hello world" when a GET request is made to the homepage
app.get('*', function(req, res) {
  fullURL = 'http://eonet.sci.gsfc.nasa.gov'+req.url

  if (req.url.indexOf("favicon.ico")>-1){
    res.send("")
    return
  }
  request.get(fullURL, function(err,reply,body){
    try{
      var data = JSON.parse(body)
    }
    catch(err){
      res.status(404).send('Not found');
    }

    var items = data.item

    var items = items.map(function(item){

      var geom = item.geometry[0]
      var date = item.date
      var ref  = item.reference[0]
      var catagories = item.category.map(function(cat){return cat["#text"] })
      var url = ref ? ref.url : ""

      return({
        type: "Feature",
        geometry:{
          type: geom.type,
          coordinates: geom.coordinates
        },
        properties: {
          date: date,
          id: item.id,
          title: item.title,
          description: item.description,
          url: url,
          link: item.link,
          catagories: catagories
        }
      })
    })
    var result ={
      features: items,
      type: "FeatureCollection"
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result))
  })
});

var port = (process.env.PORT || 5000)

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
