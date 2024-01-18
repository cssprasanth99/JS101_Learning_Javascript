function slice(arr, start, end) {

    if(start===undefined && end===undefined){
       return arr;
     }
      else if(start<0 && end==undefined){
        start = arr.length + start;
        return slicetwo(arr, start);
      }
       else if(end==undefined){
           return sliceOne(arr, start);
       }
         else if(end<0) {
           end = arr.length + end;
           return slicethree(arr, start, end);
         }
      else{
        return slicethree(arr, start, end);
    }
  }
  
  function sliceOne(arr, start) {
    let newArr = [];
    for (let i = start; i <arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  function slicetwo(arr, start){
    var newArr = [];
    for(let i = start; i < arr.length; i++){
      newArr.push(arr[i]);
    }
    return newArr;
  }
  function slicethree(arr, start, end){
    let newArr = [];
    for(let i = start; i < end; i++){
      newArr.push(arr[i]);
    }
    return newArr;
  }
  
  var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];;
  console.log(slice(animals, 2));
  console.log(slice(animals,2, 4));
  console.log(slice(animals,1, 5));
  console.log(slice(animals,-2));
  console.log(slice(animals,2, -1));