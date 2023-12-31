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

// import { ArgMax } from '.Snarky-ML/ArgMax.js';

async function main() {

    console.log('o1js loaded');

    // console.log('compiling...');

    // const { verificationKey } = await ArgMax.compile();

    // console.log('making proof 0')

    // let arr = [Field(1), Field(2), Field(3), Field(4), Field(5)];
    // const proof = await ArgMax.argMax(arr);

    // console.log('verifying proof 0');

    // console.log('proof 0 data', proof.publicOutput.toString());
    // const ok = await verify(proof.toJSON(), verificationKey);
    // console.log('ok', ok);

    // console.log('compiling...');
    // const { verificationKey: verificationKey2 } = await Relu.compile();

    // console.log('making proof 2')
    // let input = Field(1);
    // const proof2 = await Relu.argMax(input);

    // console.log('verifying proof 2');
    // console.log('proof 2 data', proof2.publicOutput.toString());

    // const ok2 = await verify(proof2.toJSON(), verificationKey2);
    // console.log('ok', ok2);

    // console.log('compiling...');
    // const { verificationKey: verificationKey3 } = await Poly.compile();

    // console.log('making proof 3')
    // // y = 1 + 2x + 3x^2 + 4x^3 + 5x^4
    // input = Field(2);
    // let coefficients = [Field(1), Field(2), Field(3), Field(4), Field(5)];
    // const proof3 = await Poly.poly(input, coefficients);

    // console.log('verifying proof 3');
    // console.log('proof 3 data', proof3.publicOutput.toString());

    // const ok3 = await verify(proof3.toJSON(), verificationKey3);
    // console.log('ok', ok3);

    // let input = Field(123456789);
    // let remainder = Field(750190521);
    // const { verificationKey: verificationKey4 } = await Zelu.compile();

    // console.log('making proof 4')
    // const proof4 = await Zelu.zelu(input, remainder);

    // console.log('verifying proof 4');
    // console.log('proof 4 data', proof4.publicOutput.toString());

    // let output = Field(138698367);
    // proof4.publicOutput.assertEquals(output);

    // const ok4 = await verify(proof4.toJSON(), verificationKey4);
    // console.log('ok', ok4);

    /* INPUT = {
    "in":  "123456789",
    "out": "526571833",
    "remainder": "686713237479944887069368574"
} */

    // let input = Field(123456789);
    // let remainder = Field(686713237479944887069368574);
    // const { verificationKey: verificationKey5 } = await Zigmoid.compile();

    // console.log('making proof 5')
    // const proof5 = await Zigmoid.zigmoid(input, remainder);

    // console.log('verifying proof 5');
    // console.log('proof 5 data', proof5.publicOutput.toString());

    // let output = Field(526571833);
    // proof5.publicOutput.assertEquals(output);

    // const ok5 = await verify(proof5.toJSON(), verificationKey5);
    // console.log('ok', ok5);

    // let sepal_length = Field(500);
    // let sepal_width = Field(500);
    // let petal_length = Field(500);
    // let petal_width = Field(500);
    // const { verificationKey: verificationKey6 } = await DecisionTree.compile();

    // console.log('making proof 6')
    // const proof6 = await DecisionTree.predict(sepal_length, sepal_width, petal_length, petal_width);

    // console.log('verifying proof 6');
    // console.log('proof 6 data', proof6.publicOutput.toString());

    // let output6 = Field(2);
    // proof6.publicOutput.assertEquals(output6);

    // const ok6 = await verify(proof6.toJSON(), verificationKey6);
    // console.log('ok', ok6);

    // let input = [Field(1), Field(2), Field(3), Field(4), Field(5)];
    // let coefficients = [Field(1), Field(2), Field(3), Field(4), Field(5)];
    // const { verificationKey: verificationKey7 } = await Dense.compile();

    // console.log('making proof 7')
    // const proof7 = await Dense.dense(input, coefficients);

    // console.log('verifying proof 7');

    // let output7 = Field(175964519);
    // proof7.publicOutput.assertEquals(output7);

    // const ok7 = await verify(proof7.toJSON(), verificationKey7);
    // console.log('ok', ok7);

    let input = [Field(2), Field(3)];
    const { verificationKey: verificationKey8 } = await LogisticRegression.compile();

    console.log('making proof 8')
    const proof8 = await LogisticRegression.predict(input);

    console.log('verifying proof 8');

    let output8 = Field(0);
    proof8.publicOutput.assertEquals(output8);

    const ok8 = await verify(proof8.toJSON(), verificationKey8);
    console.log('ok', ok8);




    console.log('Shutting down');

}




const Relu = ZkProgram({
    name: 'Relu',
    publicOutput: Field,
  methods: {
    argMax: {
      privateInputs: [Field],

      method(input): Field {
        return Provable.if(input.greaterThan(Field(0)), input , Field(0));
    },
  },
},
});

const Poly = ZkProgram({
    name: 'Poly',
    publicOutput: Field,
  methods: {
    poly: {
      privateInputs: [Field, Provable.Array(Field, 5)],

      method(input: Field, coefficients: Field[]): Field {
        let result = new Field(0);
        let power = new Field(1);

        for (let i = 0; i < coefficients.length; i++) {
            const term = coefficients[i].mul(power);
            result = result.add(term);
            power = power.mul(input);
        }  
        return result;
    },
  },
},
});

const Zelu = ZkProgram({
  name: 'Zelu',
  publicOutput: Field,
methods: {
  zelu: {
    privateInputs: [Field, Field],

    method(input, remainder): Field {
      const n = Field(1000000000); // Assuming n is 10^9
      remainder.assertLessThan(n);
      let tmp = input.square().add(input.mul(n));
      return tmp.sub(remainder).div(n);
  },
},
},
});

// const Zigmoid = ZkProgram({
//   name: 'Zigmoid',
//   publicOutput: Field,
// methods: {
//   zigmoid: {
//     privateInputs: [Field, Field],

//     method(input, remainder): Field {
//       const n = Field(1000000000); // Assuming n is 10^9
//       remainder.assertLessThan(n.square().mul(1000000000));
//       // 198695283 * n**2 - 1570683 * n * in - 4001354 * in * in;
//       let tmp = n.square().mul(198695283).sub(input.mul(n).mul(1570683)).sub(input.square().mul(4001354));
//       // return (502073021 * n**3 + in * tmp - remainder)/((n**2) * (10**9))
//       return Field(502073021).mul(n).mul(n).mul(n).add(input.mul(tmp)).sub(remainder).div(n.square().mul(1000000000));
//   },
// },
// },
// });

//Zigmoid 0.502073021 + 0.198695283 * x - 0.001570683 * x**2 - 0.004001354 * x**3
// const Zigmoid = ZkProgram({
//   name: 'Zigmoid',
//   publicOutput: Field,
// methods: {
//   zigmoid: {
//     privateInputs: [Field],

//     method(input): Field {
//       return Field(502073021).add(Field(198695283).mul(input)).sub(Field(1570683).mul(input.square())).sub(Field(4001354).mul(input.sqrt().mul(input)));
//   },
// },
// },
// });

const zigmoid = (input: Field, n: Field): Field => {
  // tmp = 198695283 * n**2 - 1570683 * n * input - 4001354 * input * input;
  let tmp = n.square().mul(199).sub(input.mul(n).mul(2)).sub(input.square().mul(4));
  // out * (n**2) * (10**9) + remainder === 502073021 * n**3 + in * tmp;
  let dividend = Field(502).mul(n).mul(n).mul(n).add(input.mul(tmp));
  let divisor = n.square().mul(1000);
  let remainder = dividend;
  let quotient = new Field(0);
  Provable.log(input);
  Provable.log(n);
  Provable.log(tmp);
  Provable.log(dividend);
  Provable.log(divisor);
  Provable.log(remainder);
  Provable.log(quotient);

  // while (remainder.greaterThan(divisor)) {
  //     remainder = remainder.sub(divisor);
  //     quotient = quotient.add(Field(1));
  // }

  let round = 100;

  for (let i = 0; i<round && remainder.greaterThan(divisor); i++) {
      remainder = remainder.sub(divisor);
      quotient = quotient.add(Field(1));
  }
  //assert(remainder < divisor);
  remainder.assertLessThan(divisor);
  //assert(quotient*divisor + remainder === dividend);
  quotient.mul(divisor).add(remainder).assertEquals(dividend);
  return quotient;
}

const DecisionTree = ZkProgram({
  name: 'DecisionTree',
  publicOutput: Field,
methods: {
  predict: {
      privateInputs: [Field, Field, Field, Field],
      method(sepal_length, sepal_width, petal_length, petal_width): Field {
          return Provable.if(petal_width.lessThan(Field(80)), 
              Field(0)
          , 
              Provable.if(petal_width.lessThan(Field(175)), 
                  Provable.if(petal_length.lessThan(Field(495)), 
                      Provable.if(petal_width.lessThan(Field(165)), 
                          Field(1)
                      , 
                          Field(2)
                      )
                  , 
                      Provable.if(petal_width.lessThan(Field(155)), 
                          Field(2)
                      , 
                          Provable.if(petal_length.lessThan(Field(545)), 
                              Field(1)
                          , 
                              Field(2)
                          )
                      )
                  )
              , 
                  Provable.if(petal_length.lessThan(Field(485)), 
                      Provable.if(sepal_width.lessThan(Field(310)), 
                          Field(2)
                      , 
                          Field(1)
                      )
                  , 
                      Field(2)
                  )
              )
          );
      },
  },
},
});
// const Dense = ZkProgram({
//     name: 'Dense',
//     publicOutput: Field,
//   methods: {
//     dense: {
//       privateInputs: [Provable.Array(Field, 5), Provable.Array(Field, 5)],

//       method(input: Field[], coefficients: Field[]): Field {
//         let result = new Field(0);
//         let power = new Field(1);

//         for (let i = 0; i < coefficients.length; i++) {
//             const term = coefficients[i].mul(power);
//             result = result.add(term);
//             power = power.mul(input);
//         }  
//         return result;
//     },
//   },
// },
// });



const LogisticRegression = ZkProgram({
    name: 'LogisticRegression',
    publicOutput: Field,
  methods: {
    predict: {
      //The quantized input is scaled by sqrt of the n of the zigmoid, because the coefficients*input is scaled by n
      privateInputs: [Provable.Array(Field, 2)],

      method(input: Field[]): Field {
        const coefficients = [Field(175), Field(203)];
        // Negative of the prediction may cause issues
        const intercept = new Field(693);
        let dotProduct = new Field(0);

        for (let i = 0; i < coefficients.length; i++) {
          dotProduct = dotProduct.add(coefficients[i].mul(input[i]));
        }

        const z = dotProduct.add(intercept);
        // Provable.log(z);
        // const sigmoid = zigmoid(z, Field(1000000000));
        return z;
    },
  },
},
});

main();