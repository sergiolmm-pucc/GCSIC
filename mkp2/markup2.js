// -------------------------------------------- //
// ******************************************** //
// * DAVID MEGUIMI CINJO PRODUÇÕES E MIXAGENS * //
// ******************************************** //
// -------------------------------------------- //

/**
 * Calcular valor de markup de um produto
 * @param {number} custo Custo do produto
 * @param {number} preçoVenda Preço de venda do produto
 * @returns Valor de markup real (não percentual) 
 */
const markup = (custo, preçoVenda) => {
    if(isNaN(custo))
        throw new Error('Valor de custo inválido')

    if(isNaN(preçoVenda))
        throw new Error('Valor de preço de venda inválido')

    return (preçoVenda - custo) / custo
}

try {
module.exports = { markup }
} catch {}