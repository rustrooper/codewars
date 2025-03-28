function positiveSum(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      summ = summ + arr[i];
    }
  }
  return summ;
}