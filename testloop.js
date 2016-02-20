var loop = require('serial-loop')
 
loop(10, each, function (error) {
  console.log('done, error? ', error)
});
 
function each (next, i) {
  setTimeout(function () {
    console.log(i)
    next()
  }, 1000)
}