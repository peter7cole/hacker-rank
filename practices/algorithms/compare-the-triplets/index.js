/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTwo(index, a, b, arr) {
  if (index > 2) return arr;

  let dif = a[index] - b[index];

  if (dif != 0) dif > 0 ? (arr[0] += 1) : (arr[1] += 1);

  compareTwo(index + 1, a, b, arr);
}

function compareTriplets(a, b) {
  let tally = [0, 0];

  compareTwo(0, a, b, tally);

  return tally;
}

// Expect: [1, 1]
console.log(compareTriplets([2, 1, 3], [2, 2, 2]));
