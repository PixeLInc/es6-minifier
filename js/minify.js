const { minify } = require('terser');
const fs = require('fs');

process.argv.forEach(function(path) {
  if(path != "/snapshot/js/minify.js" && path.endsWith(".js")) {
    var options = { mangle: false }
    var data = fs.readFileSync(path, 'utf8').toString();
    minify(data, options).then((result) => {
      if(result.error)
        throw result.error;

      console.log(`Minified ${path}`);
      fs.writeFileSync(path, result.code);
    });
  }
});
