const maca = {
    value: 2,
}
// diz qual o valor que deve ser multiplicado para quando o elemento for maçã

const laranja = {
    value: 3,
}
// diz qual o valor que deve ser multiplicado para quando o elemento for laranja

const nums = [1,2];
// diz qual são os valores da array que serão multiplicados com os pesos(values)

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log('this -> maçã',mapComThis(nums, maca));

console.log('this -> laranja',mapComThis(nums, laranja));