function forEach(callback, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    callback(theArray[i]);
  }
}

function map(mappingFunction, theArray) {
  var newMap=[];
  for (var i = 0; i < theArray.length; i++) {
    newMap.push(mappingFunction(theArray[i]));
  }
  return newMap;
}


// map using forEach function 

/* function map(mappingFunction, theArray){
      var newArray = [];
      
      forEach(function(element)){
        newArray.push(mappingFunction(element))
      }, theArray);
      
      return newArray;
}

*/

function filter(predicate, theArray) {
  var filtered=[];
  for (var i = 0; i < theArray.length; i++) {
    if (predicate(theArray[i])){
      filtered.push(theArray[i]);
    }
  }
    return filtered;
}

function every(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++) { // run through the function 
    if  (!predicate(theArray[i])){ // if one of the elements is false
       return false; // return false
    }
  }   return true;
}

function some(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++) { // run through the function 
    if  (predicate(theArray[i]) || !predicate(theArray[i])){ // if one of the elements is true or some are false
       return true; // return true
    }
  }   return false;
}


function indexOf(item, theArray) {
  for (var i = 0; i < theArray.length; i++) { // run through the function 
    if (item === theArray[i]){  // is item = to the item at the index position in the array
      return i; // return the index position
    }
  }   return -1; // otherwise return -1 
}


function findIndex(predicate, theArray) {
for (var i = 0; i < theArray.length; i++) { // run through the function 
    if (predicate(theArray[i])){  // call the predicate function on the array position i  
      return theArray[i]; // if array [i]if true 
    }
  }   return -1; // otherwise return -1 
}


function first(n, theArray) {

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
