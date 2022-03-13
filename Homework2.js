function Sortarray(arr){
    for(let i=0;i<arr.length; i++ ){
        let min=i;
        for(let j= i+1 ;j<arr.length;j++){
        if(arr[j]<arr[min])
           {
               min=j;
           }
    }
    let tmp=arr[i];
        arr[i]=arr[min];
        arr[min]=tmp;
  } 
  return arr;   
};
console.log(Sortarray([-3,8,7,6,5,-4,3,2,1]))