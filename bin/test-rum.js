#!/usr/bin/env node

console.log('@test-rum')

require("@babel/register")({
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  //exclude: ["node_modules"],
  //ignore: [],
  only: ["./src/index.js", "test", "./**/node_modules/@rnd7/rum-tester/src/index.js"],
  presets: [
    "@babel/preset-env"
  ],
  //plugins: ["@babel/plugin-transform-runtime"]
})
require('../src/index.js')
