var reasy = module.exports = require('fis3'),
    fs = require('fs');

reasy.require.prefixes.unshift('reasy');
reasy.cli.name = 'reasy';
reasy.cli.info = require('./package.json');
reasy.cli.configName = '{reasy,fis}-conf';

require('./libs/logo')(reasy);

// register global variable
Object.defineProperty(global, 'reasy', {
    enumerable: true,
    writable: false,
    value: reasy
});

fis.extend = fis.config.Config.prototype.extend = 
reasy.extend = reasy.config.Config.prototype.extend = 
function(module, args) {
    //if (args && Object.prototype.toString.call(args) !== '[object Array]') {//如果参数不是以数组形式传递进来，则解析arguments
    args = [].slice.call(arguments, 1);
    //}
    try {
        var modules;
        localModule = global.cwd + '/rules/' + module + '.js';
        if (fs.existsSync(localModule)) {
            modules = require(localModule);
        } else {
            modules = require('./rules/' + module);
        }

        return modules.apply(this, args);
    } catch (e) {
        if (e.toString().indexOf('Cannot find module') > -1) {
            fis.log.error('extended rules "' + module + '" not exist!');
        } else {
            fis.log.error('extended rules "' + module + '" has error!!!\r\n' + e.stack);
        }
    }
};

reasy.set('project.ignore', ['node_modules/**', '.svn/**', 'output/**', 'dist/**', '.git/**', 'reasy-conf.js', 'fis-conf.js', 'rules/**']);


/**
 *  针对 fis3语法进行了进一步简化，可以使用reasy.extend继承已经封装好的解析规则，如下
 *  可用规则在rules目录下,你也可以在项目rules目录下添加自己的rules规则
 reasy.extend('base').extend('compress').extend('hash').extend('parse', [{
     define: {
         product: 'mobile'
     }
 }]);
 * 
 */
//reasy.extend('base');
