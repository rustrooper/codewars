// unique-in-order (6 kyu)
// 28.03.2025

var uniqueInOrder=function(iterable){
  var newArr = [];
  if (iterable == []) {
    return newArr
  }
  newArr.push(iterable[0]);
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] != iterable[i-1]) {
      newArr.push(iterable[i])
    }
  }
  return newArr;