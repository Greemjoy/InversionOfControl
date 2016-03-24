// Example showing us how the framework creates an environment (sandbox) for
// appication runtime, load an application code and passes a sandbox into app
// as a global context and receives exported application interface

// The framework can require core libraries
var fs = require('fs'),
    vm = require('vm');

// Create a hash and turn it into the sandboxed context which will be
// the global context of an application
var context = { module: {}, console: console };
context.global = context;
var sandbox = vm.createContext(context);

// Read an application source code from the file
var fileName = './application.js';
fs.readFile(fileName, function(err, src) {
  // We need to handle errors here
  
  // Run an application in sandboxed context
  var script = vm.createScript(src, fileName);
  script.runInNewContext(sandbox);
  // Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

// Подключение зависимостей
var application2 = require('./application2.js');

// Вывод из глобального контекста модуля
console.log('From application global context');

module.exports = function() {
  // Вывод из контекста экспортируемой функции
  console.log('From application exported function');
};
module.exports.print = function(text) {
  console.log(text);
}
module.exports.variable = 42;
// Немного таймеров
var timeout_log = function() {
  console.log('Timeout: 1 second');
};

var interval_log = function() {
  console.log('Interval: 2 second');
};

var timeout_id = setTimeout(timeout_log, 1000);
var interval_id = setInterval(interval_log, 2000);
// Убираем таймер
var clear_interval = function() {
  clearInterval(interval_id);
  console.log('Timer cleared');
};

setTimeout(clear_interval, 10100);
// Робота с Util
util.log('Printed by util.log()');
console.log(util.format('%s, %s', 'Hello', 'console!'));
// Вызов супер функции из стороннего файла
application2.superFunction();

for(var key in global){
  console.log(key + ' ' + typeof (global[key]));
}
  // We can access a link to exported interface from sandbox.module.exports
  // to execute, save to the cache, print to console, etc.
});
