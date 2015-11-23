const provide = function (options) {

  if (!options) {
    throw new Error("Missing options");
  }

  const processStr = JSON.stringify({ env: options });

  return {
    intro() {
      return `var process = ${processStr};`;
    }
  };
};

export default provide;
