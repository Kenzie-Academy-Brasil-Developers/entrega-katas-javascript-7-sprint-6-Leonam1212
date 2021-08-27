/********* 1º FOREACH **********/
const myCallback = (value) => {
    return(`${value} é legal!`);
}

const newForEach = (array, callback) => {   
    for(let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

let myArray = ["Jogar", "Ler", "Codar"];
let retornoForEach = myArray.forEach(myCallback);
let retornoNewForEach = newForEach(myArray, myCallback);


// console.log(retornoForEach) // Deve retornar Undefined
// console.log(retornoNewForEach) //Deve retornar Undefined


/********* 2º FILL **********/

let myArrayFrutas = ["Banana", "Maçã", "Uva", "Carambola"];

const newFill = (array, valor, inicio, fim) => {

let output = array

if(inicio === undefined && fim === undefined) {
    for (let i = 0; i < output.length; i++) {
        output[i] = valor    
    }
}
if (inicio !== undefined && fim !== undefined) {
    for(let i = inicio; i < output.length; i++ ) {
      
        if (output[i] <= output[fim]) {
            output[i] = valor
        }
    }
}

return output
}

// let retornoFill = myArrayFrutas.fill("Melância")
// console.log(retornoFill)

// let retornoNewFill = newFill(myArrayFrutas, "1" )
// console.log(retornoNewFill)




/********* 3º MAP **********/


let array = [1,2,3,4,5,6]

const exponent = value => Math.pow (value, 3)


const newMap = (array, callback) => {
    let output = []
    for(let i = 0; i < array.length; i++) {
        output.push(callback(array[i]))
    }

    return output
}

// let retornoMap = array.map(exponent)
// console.log(retornoMap)

// let retornoNewMap = newMap(array, exponent)
// console.log(retornoNewMap)



/********* 4º SOME **********/

let myArr = [0,1, 2203, 13, 43, 50, 20, 10, 11]

const doubleTen = (element, index, array) => {
    return element === 10 * 2
}

const newSome = (array, callback) => {

let output = false

for(let i = 0; i < array.length; i++) {
    if(callback(array[i])){
        output = true
    }
}
return output

}

// let retornoNewSome = newSome(myArr, doubleTen)
// console.log(retornoNewSome)

// let retornoSome = myArr.some(doubleTen)
// console.log(retornoSome)


/********* 5º FIND **********/

let arrayFind = [5, 12, 20, 873, 134, 55, 23, 50, 70]

const newFind = (array, callback) => {
let output = 0   

for (let i = 0; i < array.length; i++) {
    if(callback(array[i])){
        output = array[i]
        break
    }
    else {
        output = undefined
    }
}
return output
}

// let retornoNewFind = newFind(arrayFind, element => element > 5)
// console.log(retornoNewFind)

// let retornoFind = arrayFind.find(element => element > 5)
// console.log(retornoFind)



/********* 6º FINDINDEX **********/
let arrFindIndex = [12, 10, 15, 54, 23, 44]

const isPrime = (element, index, array) => {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }


const newFindIndex = (array, callback) => {

    let output = 0
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])){
            output = array.indexOf(array[i])
            break
        }
        else {
            output = -1
        }
    }   
return output
}


// let retornoNewFindIndex = newFindIndex(arrFindIndex, isPrime)
// console.log(retornoNewFindIndex)

// let retornoFindIndex = arrFindIndex.findIndex(isPrime)
// console.log(retornoFindIndex)




/********* 7º EVERY **********/


let arrEvery = [11, 12, 14, 60, 49, 90]
const isBigEnough = (element, index, array) => {
    return element >= 10;
}

const newEvery = (array, callback) => {

let count = 0

    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])){
            count++
        }
    }

return count === array.length ? true : false

}


// let retornoNewEvery = newEvery(arrEvery, isBigEnough)
// console.log(retornoNewEvery)

// let retornoEvery = arrEvery.every(isBigEnough)
// console.log(retornoEvery)



/********* 8º FILTER **********/

let arrFilter = [40, 50, 51, 10, 1, 2, 3]

const callbackTest = (value) => {
    return value < 10
}
const newFilter = (array, callback) => {
let output = [];

for(let i = 0; i < array.length; i++) {
    if(callback(array[i])){
        output.push(array[i])
    }
}


return output
}

// let retornoNewFilter = newFilter(arrFilter, callbackTest)
// console.log(retornoNewFilter)
// let retornoFilter = arrFilter.filter(callbackTest)
// console.log(retornoFilter)




/********* 9º CONCAT **********/
let arrConcat = [1, 2, 3]
let num1 = 50
let num2 = 67
let num3 = 98


const newConcat = (array, ...theArgs) => {
    let output = []
    output.push(...array,...theArgs)
    return output
}

// let retornoNewConcat = newConcat(arrConcat, num1, num2, num3)
// console.log(retornoNewConcat)

// let retornoConcat = arrConcat.concat(num1, num2, num3)
// console.log(retornoConcat)


/********* 10º INCLUDES **********/

let arrIncludes = [0, 1, 2, 3, 50, "20"]

const newIncludes = (array, element, index) => {

let count = 0 

if(index === undefined) {

    for(let i = 0; i < array.length; i++) {
            if(array[i] === element){
                return true
            }
        }
}

if(index !== undefined) {

    for(let i = index; i < array.length; i++) {
        if(array[i] === element){
            return true
        }
    }
}

return false
}


// let retornoNewIncludes = newIncludes(arrIncludes, "20", 6) 
// console.log(retornoNewIncludes)
// let retornoIncludes = arrIncludes.includes(50)
// console.log(retornoIncludes)



/********* 11º INDEXOF **********/

let arrIndexOf = [1,2,3,4]

const newIndexOf = (array, value) => {
let output = 0

for(let i = 0; i < value; i++) {
    if(array[i] === value) {
        output = i
    }
    else {
        output = -1
    }
}
return output

}

// let retornoNewIndexOf = newIndexOf(arrIndexOf, 4)
// console.log(retornoNewIndexOf)

// let retornoIndexOf = arrIndexOf.indexOf(4)
// console.log(retornoIndexOf)





/********* 12º JOIN **********/
let arrJoin = ["Fire", "Water", "Air", 1,2]


const newJoin = (array, separador = ",") => {
let string = ""

for(let i = 0; i < array.length; i++) {
 string += array[i] + separador
}

return string.replace(/[^\d]+$/g,'') //Remove os caracteres do final da string

}

// let retornoNewJoin = newJoin(arrJoin, "-")
// console.log(retornoNewJoin)

// let retornoJoin = arrJoin.join("-")
// console.log(retornoJoin)






/********* 13º REDUCE **********/
let arrReduce = [1,2,3,4,5]
var soma = [{x: 1}, {x: 2}, {x: 3}]

const callbackReduce = (accumulator, current, index, array) => {
    return accumulator + current.x;

}

const newReduce = (array, callback, valorInicial = array[0]) => {
    let accumulator = valorInicial
   

    for(let i = 0; i < array.length; i++) {

        if( accumulator === array[0] && i === 0 ) {
            continue
        }
        let current = array[i]
        accumulator = callback(accumulator, current, i, array)
    }


    
return accumulator

}


let retornoNewReduce = newReduce(soma, callbackReduce, 0)
console.log(retornoNewReduce)

// let retornoReduce = soma.reduce((acc,curr) => acc+curr.x,0)
// console.log(retornoReduce)

