function arrayJoin(array, separator) {
    bag=" ";
    for(i=0;i<array.length;i++){
      if(i<array.length - 1 && separator !== undefined){
        bag = bag + array[i] + separator;
      }
        else if(i<array.length - 1 && separator==undefined){
          bag = bag + array[i] + ",";
        }
      else{
      bag = bag + array[i];
    }
  }
    return bag;
  }
  var array = ["hello", "world", "bye"];
  var newString = arrayJoin(array,"*");
  console.log(newString);