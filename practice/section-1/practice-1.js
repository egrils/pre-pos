function collect_same_elements(collection_a, collection_b) {
  var newArray = [];

  for(var a = 0; a < collection_a.length; a ++){

    if(isExist(collection_a[a],collection_b))
      newArray.push(collection_a[a]);
    

  }
  return newArray;
}

function isExist(element,collection){

  for(var i = 0; i < collection.length; i ++) {
    if (collection[i] === element)
      return true;
  }
  return false;

}
