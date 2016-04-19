function collect_same_elements(collection_a, object_b) {
  var newArray = [];
  var collection = object_b['value'];

  for(var a = 0; a < collection_a.length; a ++){
    var element = collection_a[a].key;
    
    if(isExist(element,collection))
      newArray.push(element);

  }
  return newArray;
}

function isExist(element,collection){

  for(var i = 0; i < collection.length; i ++) {

    if (collection[i] === element) return true;

    // collection.forEach(function (array_value) {
    //  if (array_value === element) return true;
    // });

  }
  return false;


}

