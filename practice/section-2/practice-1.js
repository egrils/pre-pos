function count_same_elements(collection) {
  var array = [];
  var collection_result = {};
  var num = 1;
  for(var i = 0;i < collection.length;i ++){

    if(collection[i] == collection[i+1]){

      num ++;
    }
    else{
      collection_result = {key:collection[i],count:num};
      array.push(collection_result);
      num = 1;
    }

  }
  return array;
}
