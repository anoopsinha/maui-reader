function getConfig() {
  return {data:config};
}


exports.getConfig = function(params, callback) {
    console.log('in getConfig with ts:' + Date.now());
    var cfg = require("config.js");
    return callback(null, {data: cfg.config});
};