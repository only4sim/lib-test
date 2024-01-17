import {
    Int64,
    prop,
    Field,
    UInt64, 
    UInt32, 
    Sign, 
    Provable
  } from 'o1js';

// external API
export { Int64_s };

class Int64_s extends Int64 {
    // * in the range [-2^64+1, 2^64-1], unlike a normal int64
    // * under- and overflowing is disallowed, similar to UInt64, unlike a normal int64+

    constructor(magnitude:  UInt32 | UInt64 | Field | number | string | bigint, sgn = Sign.one) {
      super(UInt64.from(magnitude), sgn);
    }

    // sqrt(): Int64_s {
    //     if (this.sgn === Sign.minusOne) {
    //         throw new Error('Cannot take square root of negative number');
    //     }

    //     if (this.magnitude === UInt64.zero) {
    //         return new Int64_s(0);
    //     }
    
    //     let x = this.magnitude;
    //     let y = new UInt64(1);
    
    //     // Using bit shifting by 1 place to divide by 2, for faster convergence
    //     while (x.greaterThan(y)) {
    //         x = x.add(y).div(2);
    //         y = this.magnitude.div(x);
    //     }
    
    //     return new Int64_s(x);
    // }

}