'use strict';

var provide = function provide(options) {

  if (!options) {
    throw new Error("Missing options");
  }

  var optionsStr = JSON.stringify(options);

  return {
    intro: function intro() {
      return "\n        var rollupEnv = " + optionsStr + ";\n        var process = process || {};\n        process.env = process.env || {};\n        Object.keys(rollupEnv).forEach(function (prop) {\n          process.env[prop] = rollupEnv[prop];\n        });\n      ";
    }
  };
};

module.exports = provide;