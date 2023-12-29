import {
    Field,
    Mina,
    PrivateKey,
    AccountUpdate,
    SelfProof,
    ZkProgram,
    Struct,
    Bool,
    Circuit,
    Poseidon,
    MerkleMap,
    MerkleTree,
    MerkleWitness,
    MerkleMapWitness,
    verify,
    Provable,
  } from 'o1js';

// const Relu = ZkProgram({
//     name: 'Relu',
//     publicOutput: Field,
//   methods: {
//     relu: {
//       privateInputs: [Field],

//       method(input): Field {
//         return Provable.if(input.greaterThan(Field(0)), input , Field(0));
//     },
//   },
// },
// });

export const relu = (input: Field): Field => {
      return Provable.if(input.greaterThan(Field(0)), input , Field(0));
};