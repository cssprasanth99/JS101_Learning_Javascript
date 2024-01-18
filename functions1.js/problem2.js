function difference(a,b){
    return a-b;
  }
  
  function absolute(a){
    if(a<0){
      return a*(-1);
    }
    else{
      return a;
    }
  }
  
  var x=difference(9,14);
  var y=absolute(x);
  console.log(y)