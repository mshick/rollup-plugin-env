const provide = function (options) {

  if (!options) {
    throw new Error("Missing options");
  }

  const optionsStr = JSON.stringify(options);

  return {
    intro() {
      return `
var rollupEnv = ${optionsStr};
if (window && !window.process) {
  window.process = {};
}
if (!process) {
  var process = window.process;
}
process.env = process.env || {};
Object.keys(rollupEnv).forEach(function (prop) {
  process.env[prop] = rollupEnv[prop];
});`;
    }
  };
};

export default provide;
