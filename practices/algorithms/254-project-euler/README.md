# Project Euler #254: Sums of Digit Factorials

Define `f(n)` as the sum of the factorials of the digits of `n`. For example, `f(342) = 3! + 4! + 2! = 32`.

Define `sf(n)` as the sum of the digits of `f(n)`. So `sf(342) = 3 + 2 = 5`.

Define `g(i)` to be the smallest positive integer `n` such that `sf(n) = i`. Though `sf(342)` is `5`, `sf(25)` is also `5`, and it can be verified that `g(5)` is `25`.

Define `sg(i)` as the sum of the digits of `g(i)`. So `sg(5) = 2 + 5 = 7`.

Further, it can be verified that `g(20)` is `267` and `²⁰Σi=1 sg(i)` is `156`.

What is `ⁿΣi=1 sg(i)`? As the number can be large, print it modulo `m`.

## Input Format

The first line of each test file contains a single integer `q`, which is the number of queries per test file. `q` lines follow, each containing two integers separated by a single space: `n` and `m` of the corresponding query.

## Constraints

- `1 ≤ q ≤ 10⁵`
- `1 ≤ n ≤ 10¹⁸`
- `2 ≤ m ≤ 2³⁰ - 1`

## Output Format

Print exactly `q` lines, each containing a single integer, which is the answer to the corresponding query.

## Sample Input 0

```
2
3 1000000
20 1000000
```

## Sample Output 0

```
8
156
```

## Explanation 0

`g(1) = 1`,`g(2) - 2` and `g(3) = 5`. `1 + 2 + 5 = 8`.
