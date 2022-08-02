import { compute } from './compute';

describe('compute', () => {
    it('should return 0 if number is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('should increment number if input is positve', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
})