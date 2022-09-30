/**
 * Generated using:
```solidity
contract TestAbi {
    event NoArgs();
    event OneArg(address a);
    event TwoArgs(address a, uint256 u);
    event Indexed(address indexed a, uint256 u, bool indexed b);
    // TODO: test all types(bytes, arrays, structs) with events too

    struct RootStruct {
        string name;
        uint256 age;
        uint256[] balances;
        NestedStruct[3][][2][] nestedStruct;
    }

    struct NestedStruct {
        uint256[] nestedBalances;
    }

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

    function overloaded() external {}
    function overloaded(uint256 a) external {}
    function overloaded(uint256 a, address b) external {}

    function primitiveTypes(address, bool) external pure returns (address, bool) {}
    // TODO: pack all available types in a struct(when structs are supported) to test all types (packing into a struct avoids stack too deep error)
    function uintTypes(uint, uint8, uint16, uint32, uint64, uint128, uint256) external pure returns (uint, uint8, uint16, uint32, uint64, uint128, uint256) {}
    // TODO: pack all available types in a struct(when structs are supported) to test all types (packing into a struct avoids stack too deep error)
    function intTypes(int, int8, int16, int32, int64, int128, int256) external pure returns (int, int8, int16, int32, int64, int128, int256) {}
    // TODO: pack all available types in a struct(when structs are supported) to test all types (packing into a struct avoids stack too deep error)
    function bytesTypes(bytes1, bytes2, bytes4, bytes8, bytes16, bytes32) external pure returns (bytes1, bytes2, bytes4, bytes8, bytes16, bytes32) {}
    // TODO: pack all available types in a struct(when structs are supported) to test all types (packing into a struct avoids stack too deep error)
    function dynamicTypes(string memory, bytes memory) external pure returns (string memory, bytes memory) {}
    function arrayTypes(uint256[] memory, uint256[][] memory, uint256[2] memory, uint256[2][3] memory, uint256[][2] memory, uint256[2][] memory)
        external pure returns (uint256[] memory, uint256[][] memory, uint256[2] memory, uint256[2][3] memory, uint256[][2] memory, uint256[2][] memory) {}
    function structTypes(RootStruct memory, RootStruct[][] memory, RootStruct[2][3] memory)
        external pure returns (RootStruct memory, RootStruct[][] memory, RootStruct[2][3] memory) {}
}
```
*/
export default <const>[
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
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[][]",
        name: "",
        type: "uint256[][]",
      },
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][3]",
        name: "",
        type: "uint256[2][3]",
      },
      {
        internalType: "uint256[][2]",
        name: "",
        type: "uint256[][2]",
      },
      {
        internalType: "uint256[2][]",
        name: "",
        type: "uint256[2][]",
      },
    ],
    name: "arrayTypes",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[][]",
        name: "",
        type: "uint256[][]",
      },
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][3]",
        name: "",
        type: "uint256[2][3]",
      },
      {
        internalType: "uint256[][2]",
        name: "",
        type: "uint256[][2]",
      },
      {
        internalType: "uint256[2][]",
        name: "",
        type: "uint256[2][]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
      {
        internalType: "bytes8",
        name: "",
        type: "bytes8",
      },
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "bytesTypes",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
      {
        internalType: "bytes8",
        name: "",
        type: "bytes8",
      },
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "dynamicTypes",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "int8",
        name: "",
        type: "int8",
      },
      {
        internalType: "int16",
        name: "",
        type: "int16",
      },
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
      {
        internalType: "int64",
        name: "",
        type: "int64",
      },
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    name: "intTypes",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "int8",
        name: "",
        type: "int8",
      },
      {
        internalType: "int16",
        name: "",
        type: "int16",
      },
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
      {
        internalType: "int64",
        name: "",
        type: "int64",
      },
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "overloaded",
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
    ],
    name: "overloaded",
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
    name: "overloaded",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "primitiveTypes",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
      // {
      //   components: [
      //     // {
      //     //   internalType: "string",
      //     //   name: "name",
      //     //   type: "string",
      //     // },
      //     // {
      //     //   internalType: "uint256",
      //     //   name: "age",
      //     //   type: "uint256",
      //     // },
      //     // {
      //     //   internalType: "uint256[]",
      //     //   name: "balances",
      //     //   type: "uint256[]",
      //     // },
      //     {
      //       components: [
      //         {
      //           internalType: "uint256[]",
      //           name: "nestedBalances",
      //           type: "uint256[]",
      //         },
      //       ],
      //       internalType: "struct TestAbi.NestedStruct[3][][2][]",
      //       name: "nestedStruct",
      //       type: "tuple[3][][2][]",
      //       // type: "tuple[3][][2][]",
      //     },
      //   ],
      //   internalType: "struct TestAbi.RootStruct",
      //   name: "",
      //   type: "tuple",
      // },
      // {
      //   components: [
      //     {
      //       internalType: "string",
      //       name: "name",
      //       type: "string",
      //     },
      //     {
      //       internalType: "uint256",
      //       name: "age",
      //       type: "uint256",
      //     },
      //     {
      //       internalType: "uint256[]",
      //       name: "balances",
      //       type: "uint256[]",
      //     },
      //     {
      //       components: [
      //         {
      //           internalType: "uint256[]",
      //           name: "nestedBalances",
      //           type: "uint256[]",
      //         },
      //       ],
      //       internalType: "struct TestAbi.NestedStruct[3][][2][]",
      //       name: "nestedStruct",
      //       type: "tuple[3][][2][]",
      //     },
      //   ],
      //   internalType: "struct TestAbi.RootStruct[][]",
      //   name: "",
      //   type: "tuple[][]",
      // },
      // {
      //   components: [
      //     {
      //       internalType: "string",
      //       name: "name",
      //       type: "string",
      //     },
      //     {
      //       internalType: "uint256",
      //       name: "age",
      //       type: "uint256",
      //     },
      //     {
      //       internalType: "uint256[]",
      //       name: "balances",
      //       type: "uint256[]",
      //     },
      //     {
      //       components: [
      //         {
      //           internalType: "uint256[]",
      //           name: "nestedBalances",
      //           type: "uint256[]",
      //         },
      //       ],
      //       internalType: "struct TestAbi.NestedStruct[3][][2][]",
      //       name: "nestedStruct",
      //       type: "tuple[3][][2][]",
      //     },
      //   ],
      //   internalType: "struct TestAbi.RootStruct[2][3]",
      //   name: "",
      //   type: "tuple[2][3]",
      // },
    ],
    name: "structTypes",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "balances",
            type: "uint256[]",
          },
          {
            components: [
              {
                internalType: "uint256[]",
                name: "nestedBalances",
                type: "uint256[]",
              },
            ],
            internalType: "struct TestAbi.NestedStruct[3][][2][]",
            name: "nestedStruct",
            type: "tuple[3][][2][]",
          },
        ],
        internalType: "struct TestAbi.RootStruct",
        name: "",
        type: "tuple",
      },
      // {
      //   components: [
      //     {
      //       internalType: "string",
      //       name: "name",
      //       type: "string",
      //     },
      //     {
      //       internalType: "uint256",
      //       name: "age",
      //       type: "uint256",
      //     },
      //     {
      //       internalType: "uint256[]",
      //       name: "balances",
      //       type: "uint256[]",
      //     },
      //     {
      //       components: [
      //         {
      //           internalType: "uint256[]",
      //           name: "nestedBalances",
      //           type: "uint256[]",
      //         },
      //       ],
      //       internalType: "struct TestAbi.NestedStruct[3][][2][]",
      //       name: "nestedStruct",
      //       type: "tuple[3][][2][]",
      //     },
      //   ],
      //   internalType: "struct TestAbi.RootStruct[][]",
      //   name: "",
      //   type: "tuple[][]",
      // },
      // {
      //   components: [
      //     {
      //       internalType: "string",
      //       name: "name",
      //       type: "string",
      //     },
      //     {
      //       internalType: "uint256",
      //       name: "age",
      //       type: "uint256",
      //     },
      //     {
      //       internalType: "uint256[]",
      //       name: "balances",
      //       type: "uint256[]",
      //     },
      //     {
      //       components: [
      //         {
      //           internalType: "uint256[]",
      //           name: "nestedBalances",
      //           type: "uint256[]",
      //         },
      //       ],
      //       internalType: "struct TestAbi.NestedStruct[3][][2][]",
      //       name: "nestedStruct",
      //       type: "tuple[3][][2][]",
      //     },
      //   ],
      //   internalType: "struct TestAbi.RootStruct[2][3]",
      //   name: "",
      //   type: "tuple[2][3]",
      // },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uintTypes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
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
