const estudanteReprovou =  (notaFinal, faltas) => { // => = arrow function (funções anônimas tal como as Expressões de funções)
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

const exibeNome = (nome) => nome; //funções mais curtas (1 linha de código) ou funções dentro de funções (mas não substitui as outras)
// nesse exemplo, seria a mesma coisa que "return nome" 

console.log(estudanteReprovou (6, 5));
console.log(estudanteReprovou (10, 2));
console.log(exibeNome ("Caroline"));