function compareTriplets(a, b) {
  let tally = [0, 0];
  function weigh(count) {
    if (count > 2) return tally;
    let dif = a[count] - b[count];
    if (dif > 0) {
      tally[0]++;
    } else if (dif < 0) {
      tally[1]++;
    }
    const newCount = count + 1;
    weigh(newCount);
  }
  weigh(0);
  return tally;
}

console.log(
  JSON.stringify(compareTriplets([17, 28, 30], [99, 16, 8])) ===
    JSON.stringify([2, 1])
);
