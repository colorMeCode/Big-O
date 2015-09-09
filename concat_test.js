//test the run-time for concatenating two arrays together to form one new array

function concat_test(arraySize) {
  var i = 0;
  var j = 0;
  var array;
  var array1 = [];
  var array2 = [];
  
  while (i < arraySize) {
    array1.push(Math.floor(Math.random() * 100));
    i++;
  };
  while (j < arraySize) {
    array2.push(Math.floor(Math.random() * 100));
    j++;
  };

  console.time('concat');
  array = array1.concat(array2);
  console.timeEnd('concat');
  return array;
}

concat_test(1000); //run-time: .044ms
concat_test(10000); //run-time: .090ms
concat_test(100000); //run-time: .879ms
concat_test(1000000); //run-time: 7.174ms
concat_test(10000000); //run-time: 80.084ms
