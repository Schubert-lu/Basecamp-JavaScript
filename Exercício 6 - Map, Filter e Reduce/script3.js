const meuArray = [2,5,3,439,25,98,4,6]



function filtraPares(arr){
    return arr.filter(callBack);
}

function callBack(item){
    return item % 2 === 0;
}
// % = significa módulo
console.log(filtraPares(meuArray));

