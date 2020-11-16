# Project Euler #235: An Arithmetic Geometric sequence

Given is the arithmetic-geometric sequence `u(k) = (a - d x k)r^(k-1)`.
Let `s(n) = ⁿΣk=1 u(k)`.

Find the value of `r` for which `s(n) = -x`.

Give your answer rounded to `12` places behind the decimal point.

## Input Format

First line of each test file contains a single integer `q` which is the number of queries per test file. `q` lines follow, each containing exactly four integers separated by single spaces which are `a`, `d`, `n` and `x`.

## Constraints

- `1 ≤ q ≤ 1000`
- `1 ≤ a ≤ 1000`
- `1 ≤ d ≤ 10`
- `d ≤ a`
- `3000 ≤ n ≤ 4000`
- `1 < x ≤ 10¹⁵`

## Output Format

Print exactly `q` numbers on the separate lines that are the `r`'s for the corresponding tests. Your answers will be considered as correct if they coincide with the author's ones in `12` digits after the decimal point.

## Sample Input 0

```
1
1 1 3000 100000000
```

## Sample Output 0

```
1.00136521495144
```
