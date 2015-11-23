import babel from "rollup-plugin-babel";


export default {
  entry: "lib/index.js",
  plugins: [babel()],
  format: "cjs",
  dest: "dist/index.js"
};
