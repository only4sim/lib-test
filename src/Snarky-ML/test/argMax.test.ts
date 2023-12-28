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
import { assert } from 'chai';
import { argMax } from '../src/libs/argMax.js';

function test_argMax() {
    const arr1 = [new Field(5), new Field(8), new Field(2), new Field(10)];
    const arr2 = [new Field(1), new Field(3), new Field(5), new Field(7)];

    const maxIndex1 = argMax(arr1);
    const maxIndex2 = argMax(arr2);

    assert(maxIndex1 === Field(3), "Test case 1 failed: Expected index 3, but got " + maxIndex1);
    assert(maxIndex2 === Field(3), "Test case 2 failed: Expected index 3, but got " + maxIndex2);
}

test_argMax();
