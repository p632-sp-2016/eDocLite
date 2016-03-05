var testContext = require.context('../test', true, /-test\.js$/);
testContext.keys().forEach(testContext);

/**
* Import all source files to make them considered for test coverage.
*/
var srcContext = require.context('../src', true, /^((?!index).)*\.js$/);
srcContext.keys().forEach(srcContext);
