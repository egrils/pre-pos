function collect_same_elements(collection_a, object_b) {
    var newArray = [];
    var collection = object_b.value;

    collection_a.forEach(function (object) {
        var element = object.key;

        if(isExist(element,collection))
            newArray.push(element);
    });
    return newArray;
}

function isExist(element,collection){
    var boolean = false;
    collection.forEach(function (array_value) {
        if (array_value === element)
            boolean = true;
    });

    return boolean;
}
