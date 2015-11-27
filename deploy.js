var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '_site'), function(err) {
  if (err) {
    console.log(err);
  }
});
