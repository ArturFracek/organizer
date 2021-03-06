/* eslint-disable prettier/prettier */
process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;
module.exports = {
  verbose: true,
  maxWorkers: 1,
  preset: "@vue/cli-plugin-unit-jest",
  setupFiles: ["./tests/unit/setup.js"],
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transformIgnorePatterns: [ "/node_modules/(?!vue2-timepicker)"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
  rootDir: '..',
  moduleNameMapper: {
    // eslint-disable-next-line no-useless-escape
    "^@/(.*)$": "<rootDir>/client/src/$1",
    "^@root/(.*)$": "<rootDir>/$1"
  },
  "moduleDirectories": [
    "node_modules",
    "client/src"
  ],
};
