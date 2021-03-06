'use strict';

const tests = [
  [2147483648, [128, 128, 128, 128, 8]],
  [2147483649, [129, 128, 128, 128, 8]],
  [4294967295, [255, 255, 255, 255, 15]],
  [0, [0]],
  [1, [1]],
  [2, [2]],
  [10, [10]],
  [20, [20]],
  [63, [63]],
  [64, [64]],
  [65, [65]],
  [127, [127]],
  [128, [128, 1]],
  [129, [129, 1]],
  [255, [255, 1]],
  [256, [128, 2]],
  [257, [129, 2]],
  [2147483647, [255, 255, 255, 255, 7]],
];

module.exports = tests;
