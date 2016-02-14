var context = require.context('../src/app/test', true, /-test\.js$/);
context.keys().forEach(context);