function areArrayEqual(arrayA,arrayB){
    if(!Array.isArray(arrayA)|| !Array.isArray(arrayB)){
        return false;
    }
    else if(arrayA === arrayB){
        return true;
    }
    else if(arrayA.length !== arrayB.length){
        return false;
    }
    else{
        for (let i = 0; i < arrayA.length; i++) {
            if(arrayA[i] !== arrayB[i]) return false;
            
        }
        return true;
    }
}

// const fruitNamesA =['apple', 'kumquat','grapefruit','kiwi'];
// const fruitNamesB =['apple', 'kumquat', 'grapefruit','kiwi'];
// const fruitNamesC =['avocado', 'squash', 'red pepper', 'cucumber'];

// console.log(areArrayEqual(fruitNamesA,fruitNamesB));
// console.log(areArrayEqual(fruitNamesA,fruitNamesC));


// const fruitNamesD =['apple', 'kiwi', 'grapefruit','kumquat'];

// console.log(areArrayEqual(fruitNamesA.sort(),fruitNamesD.sort()));


const dateA = [new Date(2021,1,1)];
const dateB = [new Date(2021,1,1)];

console.log(areArrayEqual(dateA,dateB));