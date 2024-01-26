import {
    Int64,
    prop,
    Field,
    UInt64, 
    UInt32, 
    Bool,
    Sign, 
    Gadgets,
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

      /**
   * Checks if a {@link Int64} is less than or equal to another one.
   */
  // lessThanOrEqual(y: Int64) {
  //   if (this.magnitude.isConstant() && y.magnitude.isConstant()) {
  //     return Bool(this.magnitude.toBigInt() <= y.magnitude.toBigInt());
  //   } else {
  //     let xMinusY = this.magnitude.sub(y.magnitude).seal();
  //     let yMinusX = xMinusY.neg();

  //     let xMinusYFits = Gadgets.isInRangeN(UInt64.NUM_BITS, xMinusY);

  //     let yMinusXFits = RangeCheck.isInRangeN(UInt64.NUM_BITS, yMinusX);

  //     xMinusYFits.or(yMinusXFits).assertEquals(true);
  //     // x <= y if y - x fits in 64 bits
  //     return yMinusXFits;
  //   }
  // }

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