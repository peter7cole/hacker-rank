// Project Euler #254: Sums of Digit Factorials
// https://www.hackerrank.com/contests/projecteuler/challenges/euler254/problem

function processData(input) {
  const factorialize = (num) => {
    if (num <= 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  };

  const f = (n) => {
    console.log('passed f:', n);
    let string = n.toString();
    let ans = 0;
    for (let i = string.length; i > 0; i--) {
      ans += factorialize(string[i - 1]);
    }
    console.log('f out:', ans);
    return ans;
  };

  const sf = (n) => {
    console.log('passed sf:', n);
    let string = n.toString();
    let ans = 0;
    for (let i = 0; i < string.length; i++) {
      ans += parseInt(string[i]);
    }
    console.log('sf out:', ans);
    return ans;
  };

  const g = sf();

  return sf(f(input));
}

console.log('sf(f(input)', processData(342));
