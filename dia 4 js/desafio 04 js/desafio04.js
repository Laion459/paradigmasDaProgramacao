
// calcula maior valor de um array
function calculateMax(array){
    let maxValue = 0;
    
    for (let i = 0; i < array.length; i++){
        if(array[i] > maxValue){
            maxValue = array[i];
        }
    }
    return maxValue;
}

// calcula menor valor de um array
function calculateMin(array){
    let minValue = 10000;
    
    for (let i = 0; i < array.length; i++){
        if(array[i] < minValue){
            minValue = array[i];
        }
    }
    return minValue;
}

// Busca primeiro elemento de uma array
function primeiroElemento(lista){
    return lista[0];
}

// retorna primeiro
function retornaPrimeiro(array, funcao){
    
    //console.log("dentro test");
    return this.funcao;
}

// TESTES
// Cria e inicializa array com numeros aleatórios
let array = [80,20,3,45,-2,29];

// Imprime retorno das funções 
console.log("- Array aleatório: " + array);
console.log("- Valor máximo da lista: " + calculateMax(array));
console.log("- Valor mínimo da lista: " + calculateMin(array));
console.log("- Primeiro valor da lista: " +  primeiroElemento(array));

// Atribui endereço da função em uma nova variavel
let max = calculateMax(array)
console.log("- Função apontada por variável (ponteiro): " + max);
let min = calculateMin(array);

console.log("- Comparação: ");
console.log("   A) " + max);
console.log("   B) " + min);

//console.log("Retorna primeiro A) " + retornaPrimeiro(max));