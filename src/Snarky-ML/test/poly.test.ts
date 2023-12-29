import { Field } from 'o1js';
import { poly } from '../src/libs/poly.js';

describe('poly function', () => {
    it('calculates constant polynomial correctly', () => {
        const input = new Field(5);
        const coefficients = [new Field(3)]; // 3
        const result = poly(input, coefficients);
        expect(result).toEqual(new Field(3));
    });

    it('calculates linear polynomial correctly', () => {
        const input = new Field(2);
        const coefficients = [new Field(3), new Field(4)]; // 3 + 4x
        const result = poly(input, coefficients);
        expect(result).toEqual(new Field(11)); // 3 + 4*2
    });

    it('calculates quadratic polynomial correctly', () => {
        const input = new Field(3);
        const coefficients = [new Field(1), new Field(2), new Field(3)]; // 1 + 2x + 3x^2
        const result = poly(input, coefficients);
        expect(result).toEqual(new Field(34)); // 1 + 2*3 + 3*3^2
    });
});

