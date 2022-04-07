var numberarray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function removeEvens (numberarray){
    return numberarray.filter (e=> e % 2!==0);// if a number is even remove it

}
const oddNumbers =removeEvens([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
console.log(oddNumbers);
