# TypedContract

`TypedContract` - ethers.js `Contract` with type definitions inferred from the ABI.

```ts
// Get the ABI
const ABI = [
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
] as const;

// Create a contract instance, providing the `ABI`
const token = new TypedContract(erc20Address, ABI);

// method name, arguments and return types are inferred from the `ABI`
await token.transfer("0x0000000000000000000000000000000000000123", 100);

await token.transfer(1, 2); // compile error: `1` is not assignable to address
await token.unknownMethod(123); // compile error: Property 'unknownMethod' does not exist
```

## TODO

- [ ] Support for functions:
  - [x] methods directly on a contract. E.g., `token.transfer`
  - [x] `.functions`, `.callStatic`, `.estimateGas`, and `.populateTransaction` buckets. E.g., `token.functions.transfer`
  - [ ] overloaded functions, e.g., `contract['fn()']` and `contract['fn(uint256)']`
- [x] Support for events\*:
  - [x] `filters`
  - [x] `queryFilter`, `on`, `once`, `off`, `listeners`, `removeListener`, `removeAllListeners` \*
- [ ] Support more data types:
  - [ ] all primitive types
  - [ ] `struct`
  - [ ] arrays
