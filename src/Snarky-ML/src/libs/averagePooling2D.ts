// Creation Date: 2023-10-15
// Last Update: 2023-12-30
// Creator: only4sim
// averagePooling2D function for Snarky-ML
// 


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


export const averagePooling2D = (input: Field [][], poolSize: Field [], strides : Field []): Field [][] => {
    const inputHeight = input.length;
    const inputWidth = input[0].length;
    const [poolHeight, poolWidth] = poolSize;
    const [strideY, strideX] = strides;

    const outputHeight = Math.floor((inputHeight.sub(poolHeight) / strideY) + 1;
    const outputWidth = Math.floor((inputWidth - poolWidth) / strideX) + 1;

    const output = new Field(outputHeight, outputWidth);

    for (let y = 0; y < outputHeight; y++) {
        for (let x = 0; x < outputWidth; x++) {
            let sum = new Field(0);
            for (let j = 0; j < poolHeight; j++) {
                for (let i = 0; i < poolWidth; i++) {
                    const inputY = y * strideY + j;
                    const inputX = x * strideX + i;
                    sum = sum.add(input.get(inputY, inputX));
                }
            }
            output.set(y, x, sum.div(poolHeight * poolWidth));
        }
    }

    return output;
}
