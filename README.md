# TypedContract

`TypedContract` - ethers.js `Contract` with type definitions inferred from the ABI.

```sh
npm install ethers-typed-contract
# or
yarn add ethers-typed-contract
```

```ts
import TypedContract from "ethers-typed-contract";

// Get the ABI
const ABI = <const>[
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
];

// Create a contract instance, providing the `ABI`
const token = new TypedContract(erc20Address, ABI);

// method name, arguments and return types are inferred from the `ABI`
await token.transfer("0x0000000000000000000000000000000000000123", 100);

await token.transfer(1, 2); // compile error: `1` is not assignable to address
await token.unknownMethod(123); // compile error: Property 'unknownMethod' does not exist
```

## Known limitations

- Only a small number of solidity types are supported. See more in [TODO section](#todo)
- It's impossible to use JSON ABI files because typescript does not allow importing JSON files `as const`. [Typescript issue](https://github.com/microsoft/TypeScript/issues/32063).
  To work this around:

  1. Rename your `.json` file to `.ts`
  2. Insert `export default <const>` at the beginning of the ABI file, so the abi looks like this:

     ```ts
     export default <const>[
       // ABI
     ];
     ```

## TODO

- [ ] Support more data types:
  - [ ] all primitive types
  - [ ] `struct`
  - [ ] arrays
- [ ] Support for `contract.interface`
- [ ] Support for functions:
  - [ ] overloaded functions, e.g., `contract['fn()']` and `contract['fn(uint256)']`
  - [x] methods directly on a contract. E.g., `contract.transfer`
  - [x] `.functions`, `.callStatic`, `.estimateGas`, and `.populateTransaction` buckets. E.g., `contract.functions.transfer`
- [x] Support for events\*:
  - [x] `filters`
  - [x] `queryFilter`, `on`, `once`, `off`, `listeners`, `removeListener`, `removeAllListeners` \*

\* `queryFilter`, `on`, `once`, `off`, `listeners`, `removeListener`, `removeAllListeners` have full type safety but I couldn't make them match the typechain typings.
