var a = 10;

function sum() {
  var b = 20;
  return function () {
    return a + b;
  };
}

var result = sum();
console.dir(result);
