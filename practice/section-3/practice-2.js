function create_updated_collection(collection_a, object_b) {
  var newArray = [];
  var collection_result = {};

  for(var i = 0; i < collection_a.length; i ++){
    var count = collection_a[i].count;
    if(isEqual(collection_a[i].key,object_b))
      count -= parseInt(collection_a[i].count/3);

    collection_result = {key:collection_a[i].key,count:count};
    newArray.push(collection_result);

  }
  return newArray;
}

function isEqual(element,object_b){
  for(var i = 0;i < object_b.value.length;i ++){
    if(element === object_b.value[i])
      return true;
  }
  return false;
}
