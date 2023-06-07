const {markup} = require('./markup2.js')

describe('Função de cálculo de markup', () => {
    test('Caso custo inválido (não-número)', () => {
        expect(() => markup('seila', 10)).toThrow(new Error('Valor de custo inválido'));
    });
    
    test('Caso preço de venda inválido (não-número)', () => {
        expect(() => markup(10, 'nunsei')).toThrow(new Error('Valor de preço de venda inválido'));
    });
    
    test('Caso preço e custo válidos', () => {
        expect(markup(100, 125)).toBe(0.25)
    })
})
