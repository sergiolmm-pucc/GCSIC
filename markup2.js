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

exports.markup = markup

exports.markupGet = (req, res) => {
    const custo = Number(req.query.custo)
    const preçoVenda = Number(req.query.preçoVenda)
    const resultado = markup(custo, preçoVenda)

    res.send({
        custo,
        preçoVenda,
        markupPorCento: `${resultado * 100}%`
    })
}