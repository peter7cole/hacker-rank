// Project Euler #235: An Arithmetic Geometric sequence
// https://www.hackerrank.com/contests/projecteuler/challenges/euler235/problem

// Helper functions
// Random Int 1 to 1000
function getRandomInt(max) {
  return Math.ceil(Math.random() * Math.floor(max));
}
// (Σ)
function mathSigma(startIndex, endIndexInclusive, iteratorFunction) {
  let accumulator = 0;
  for (let i = startIndex; i <= endIndexInclusive; ++i) {
    accumulator += iteratorFunction(i);
  }
  return accumulator;
}

// Set Up Problem

// 1 to 1000 tests happening, labeled as q
const q = getRandomInt(1000);

// get test data a, d, n, x
function getTestNumbers(q) {
  const a = getRandomInt(1000);
  const d = getRandomInt(a > 10 ? 10 : a);
  const n = getRandonInt(1001) + 2999;
  const x = getRandomInt(Math.pow(10, 15) - 1) + 1;
  return { q, a, d, n, x };
}

// define u(k)=(a-d*k)*Math.pow(r, k-1)
function u(k) {
  return (a - d * k) * Math.pow(r, k - 1);
}

function mainU(k, qSet) {
  const { q, a, d, n, x } = qSet;
  let found = false;
  let r = 0;
  while (found === false) {
    r++;
    let uResult = (a - d * k) * Math.pow(r, k - 1);
    if (x === -mathSigma(k, n, uResult)) found = true;
  }
  return { q, r };
}

console.log(getTestNumbers(69));
