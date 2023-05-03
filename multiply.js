
function multiply(numbres){

    return numbres
        .split(',')
        .map( x => parseInt(x) )
        .reduce( (a,b) => a * b )

}

exports.multiply = multiply