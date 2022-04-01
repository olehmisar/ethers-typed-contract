/**
 * Generated using:
```solidity
contract TestAbi {
    event NoArgs();
    event OneArg(address a);
    event TwoArgs(address a, uint256 u);
    event Indexed(address indexed a, uint256 u, bool indexed b);

    function noArgsNoReturn() external {}
    function argsNoReturn(uint256 a, address b) external {}
    function argsOneReturn(uint256 a, address b) external returns (uint256) {}
    function argsTupleReturn(uint256 a, address b) external returns (uint256, address) {}

    function payableNoArgsNoReturn() external payable {}
    function payableArgsNoReturn(uint256 a, address b) external payable {}
    function payableArgsOneReturn(uint256 a, address b) external payable returns (uint256) {}
    function payableArgsTupleReturn(uint256 a, address b) external payable returns (uint256, address) {}

    function viewNoArgsNoReturn() external view {}
    function viewArgsNoReturn(uint256 a, address b) external view {}
    function viewArgsOneReturn(uint256 a, address b) external view returns (uint256) {}
    function viewArgsTupleReturn(uint256 a, address b) external view returns (uint256, address) {}

    function pureNoArgsNoReturn() external pure {}
    function pureArgsNoReturn(uint256 a, address b) external pure {}
    function pureArgsOneReturn(uint256 a, address b) external pure returns (uint256) {}
    function pureArgsTupleReturn(uint256 a, address b) external pure returns (uint256, address) {}

    function differentTypes(address a, uint256 u, int256 i, bool b, string memory s) external {}
}
```
*/

export const TestAbi = <const>[
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "a",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "u",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "b",
        type: "bool",
      },
    ],
    name: "Indexed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "NoArgs",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "OneArg",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "a",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "u",
        type: "uint256",
      },
    ],
    name: "TwoArgs",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "argsNoReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "argsOneReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "argsTupleReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "u",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "i",
        type: "int256",
      },
      {
        internalType: "bool",
        name: "b",
        type: "bool",
      },
      {
        internalType: "string",
        name: "s",
        type: "string",
      },
    ],
    name: "differentTypes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "noArgsNoReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "payableArgsNoReturn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "payableArgsOneReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "payableArgsTupleReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "payableNoArgsNoReturn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "pureArgsNoReturn",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "pureArgsOneReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "pureArgsTupleReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "pureNoArgsNoReturn",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "viewArgsNoReturn",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "viewArgsOneReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "b",
        type: "address",
      },
    ],
    name: "viewArgsTupleReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "viewNoArgsNoReturn",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];
