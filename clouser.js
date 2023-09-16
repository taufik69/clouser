var a = 10;

function sum() {
  var a = 10;

  return function () {
    return a + 20;
  };
}

console.log(a);
var result = sum();
console.log(result());
console.log(result() + 1);
console.log(a);
