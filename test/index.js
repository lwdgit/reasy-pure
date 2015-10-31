"use strict";
var child_process = require('child_process');

function test(command, output) {
    child_process.exec('node ./bin/reasy.js ' + command, function(err, stdout, stderr) {
        if (err || stderr || stdout.toLowerCase().indexOf('error') > -1) {
            var error = 'Command=> reasy ' + command + '\r\n' + stdout;
            throw new Error(err + '\r\n---------------------------\r\n' + error);
        }
        if (output) {
            console.log(stdout);
        }
    });
}

test('-v', true);
test('release -r ./example/demo -d ./example/dist_demo -R parse,compress,relative,md5,autoprefix,sprite');
test('release -r ./example/use-mod -d ./example/dist_use-mod -R parse,compress,relative,md5,autoprefix,sprite,mod');
test('release -r ./example/use-less -d ./example/dist_use-less -R compress');
test('release -r ./example/use-amd -d ./example/dist_use-amd');