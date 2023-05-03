
const multi = require('./multiply')

test(
    'Caso so um numero passado',
    () => {
        expect(multi.multiply('1')).toBe(1);
    }
);

test(
    'Caso dois numeros sejam passados corretamente',
    () => {
        expect(multi.multiply('5,6')).toBe(30);
    }
);
