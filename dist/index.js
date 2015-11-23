'use strict';

var provide = function provide(options) {

  if (!options) {
    throw new Error("Missing options");
  }

  var processStr = JSON.stringify({ env: options });

  return {
    intro: function intro() {
      return "var process = " + processStr + ";";
    }
  };
};

module.exports = provide;