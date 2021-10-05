# Kanga SDK

In-depth documentation on this SDK is available at [uniswap.org](https://uniswap.org/docs/v2/SDK/getting-started/).

This modifies uniswap-sdk's UniswapV2Factory address. The new address for kanga on harmony-testnet is  `0xFc92cD6E5c40B8AdEd835bA9AD937B29255E9c14`.

**Note:** the latest address can be found [here](https://github.com/KangaFinance/kanga/blob/canary/docs/DEPLOYMENT.md#harmony-testnet). If deploying new contracts then need to update [addresses.ts](./src/constants/addresses.ts).

## Running tests

To run the tests, follow these steps. You must have at least node v10 and [yarn](https://yarnpkg.com/) installed.

First clone the repository:

```sh
git clone git@github.com:KangaFinance/kanga-sdk.git
```

Move into the kanga-sdk working directory

```sh
cd kanga-sdk/
```

Install dependencies

```sh
yarn install
```

Run tests

```sh
yarn test
```

You should see output like the following:

```sh
yarn run v1.22.4
$ tsdx test
 PASS  test/constants.test.ts
 PASS  test/pair.test.ts
 PASS  test/fraction.test.ts
 PASS  test/miscellaneous.test.ts
 PASS  test/entities.test.ts
 PASS  test/trade.test.ts

Test Suites: 1 skipped, 6 passed, 6 of 7 total
Tests:       3 skipped, 82 passed, 85 total
Snapshots:   0 total
Time:        5.091s
Ran all test suites.
✨  Done in 6.61s.
```
