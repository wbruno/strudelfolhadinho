exports.locate = function(req, res) {
  var pos = encodeURI(req.params.pos),
    options = {
      host: "maps.google.com",
      port: 80,
      path: "/maps/api/geocode/json?address=" + pos + "&sensor=true"
    };


  var request = http.request(options, function (response) {
    var data = "";

    response.setEncoding('utf8');
    response.on('data', function (chunck) {
      data += chunck;
    });
    response.on('end', function(){
      res.writeHead(200, {'Content-Type': 'application/json'});

      try {
        var json = JSON.parse(data),
          obj = json.results[0],
          ret = {
            address: obj.formatted_address.replace(/([^,]+)(.*)/, '$1'),
            cep: obj.address_components[obj.address_components.length - 1].long_name
          };

        res.write(JSON.stringify(ret));

      } catch(e) {
        res.write(JSON.stringify({ address: "not_found" }));
      }
      res.end();
    });

  });
  request.on('error', function(e) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({ address: "not_found" }));
    res.end();
  });

  request.end();
};
