module.exports = function solveEquation(equation) {
  // your implementation

  var numbers = equation.match(/(\-?|\+\s|\-\s)[0-9]+/g).map(item => Number(item.replace(/\s/g, '')));
  
  var a = numbers[0];
  var b = numbers[2];
  var c = numbers[3];

  var D = (b * b) - 4 * a * c;
  var x1 = (-b + Math.sqrt(D)) / (2 * a);
  var x2 = (-b - Math.sqrt(D)) / (2 * a);

  return [
      Math.round(x1),
      Math.round(x2)
  ].sort((a, b) => a - b)

}
