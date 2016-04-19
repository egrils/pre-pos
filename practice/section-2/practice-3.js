function count_same_elements(collection) {
  var array = [];
  var collection_result = {};
  var count = 1;
  for(var i = 1;i < collection.length;i ++){

    if(collection[i].length == 1){

      if(collection[i-1].length != 1)
        collection[i-1] = collection[i-1].charAt(0);

      if(collection[i-1] == collection[i]){

        count ++;
      }
      else{
        collection_result = {name:collection[i-1],summary:count};
        array.push(collection_result);
        count = 1;
      }
    }

    else {

      if (collection[i-1]== collection[i].charAt(0)){
        var num = parseInt(collection[i].substr(2,2));
        count += num;

      }

      else {
        collection_result = {name:collection[i-1],summary:count};
        array.push(collection_result);
        count = parseInt(collection[i].substr(2,2));

        if(i == collection.length-1){
          collection_result = {name:collection[i].charAt(0),summary:count};
          array.push(collection_result);
        }

      }

    }

  }
  return array;
}
