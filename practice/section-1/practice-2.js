function collect_same_elements(collection_a, collection_b) {
  var newArray = [];

  for(var a = 0; a < collection_a.length; a ++){

    if(isExist(collection_a[a],collection_b))
      newArray.push(collection_a[a]);

  }
  return newArray;
}

function isExist(element,arrayCollection){

  for(var i = 0; i < arrayCollection.length; i ++) {

    var array_length = arrayCollection[i].length;

    for(var j = 0; j < array_length; j ++)
      if (arrayCollection[i][j] === element) return true;
    /*
    var array = arrayCollection[i];
    array.forEach(function(array_value){
      if (array_value === element) return true;
    });*/

  }
  return false;

}
