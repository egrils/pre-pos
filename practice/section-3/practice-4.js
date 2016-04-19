function create_updated_collection(collection_a, object_b) {
  var newArray = [];
  var collection_result = {};
  var array = count_same_elements(collection_a);

  for(var i = 0; i < array.length; i ++){
    var count = array[i].count;
    if(isEqual(array[i].key,object_b))
      count -= parseInt(array[i].count/3);

    collection_result = {key:array[i].key,count:count};
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

function count_same_elements(collection) {
  var array = [];
  var collection_result = {};
  var count = 1;
  for(var i = 0;i < collection.length;i ++){
    if(collection[i].length == 1){

      if(collection[i] == collection[i+1]){

        count ++;
      }
      else{
        collection_result = {key:collection[i],count:count};
        array.push(collection_result);
        count = 1;
      }
    }

    else {

      if (collection[i-1] == collection[i].charAt(0)){
        var num = parseInt(collection[i].substr(2, 1));
        count += num;
        continue;
      }

      else {
        collection_result = {key:collection[i].charAt(0),count:parseInt(collection[i].substr(2, 1))};
        array.push(collection_result);
      }

    }

  }
  return array;
}

