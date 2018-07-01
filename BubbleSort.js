bubblesort = function(array){
  do{
    var sorted = false;
    var i = 0;
    
    do{
      var moved = false
      
      if(i<array.length && array[i]>array[i+1])
         {
         array.splice(i+1, 0, array.splice(i, 1));
           moved = true;
           sorted = true;
         }
      
      if(i>0 && array[i]<array[i-1])
         {
         array.splice(i-1, 0, array.splice(i, 1));
           moved = true;
           sorted = true;
           
         }
      
      if(!moved)
      {
       i++;
      }
    }while(i<array.length)
    
  }while(sorted)

  return array;
};
