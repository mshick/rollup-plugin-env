'use strict';

var provide = function provide(options) {

  if (!options) {
    throw new Error("Missing options");
  }

  var optionsStr = JSON.stringify(options);

  return {
    intro: function intro() {
      return "\nvar rollupEnv = " + optionsStr + ";\nif (window && !window.process) {\n  window.process = {};\n} else if (!process) {\n  var process = {};\n}\nprocess.env = process.env || {};\nObject.keys(rollupEnv).forEach(function (prop) {\n  process.env[prop] = rollupEnv[prop];\n});";
    }
  };
};

module.exports = provide;