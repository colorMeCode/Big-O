//Devise an experiment to verify that the list index operator is O(1)

function list() {
  var n = 0;
  var array = [];
  while (n < 100000) {
    n++;
    array.push(n);
  };
  console.time('list index operator run-time');
  console.log(array[Math.floor(Math.random() * 10000)]);
  console.timeEnd('list index operator run-time'); //~.300ms
  return array;
}
