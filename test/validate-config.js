'use strict';

var eslint = require('eslint');
var test = require('tape');

test('load config in eslint to validate all rule syntax is correct', function (t) {
  var CLIEngine = eslint.CLIEngine;
  var code = 'var foo = 1;\nvar bar = function() {};\nbar(foo);\n';

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  });


  t.ok(cli.executeOnText(code).errorCount === 0);
  t.end();
})
