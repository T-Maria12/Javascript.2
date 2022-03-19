//Exercice 1:
//1.defining the objects
let Movie1={
    Genera:"Sci-Fi",
    DateOfRelease:2014,
    Rating:"G",
}
 let Movie2={
     Genera:"Thriller",
     DateOfRelease:2021,
     Rating:"PG-13",
 }
//2.Check function
    function check(Movie1,Movie2){
        return Object
        //Get All the keys in an array
        .keys(Movie2)
        .every(val => Movie1.hasOwnProperty(val) && Movie1[val]===Movie2[val])
    }

console.log(check(Movie1,Movie2))//returns false 

//Exercice 2:

function Intersection(arr1, arr2)
{
    //sorting both arrays
  arr1.sort();
  arr2.sort();
  var common = [];   //array to contain common elements
  var i= 0, j= 0;
  //break if one of them runs out
  while(i<arr1.length && j<arr2.length){
      if(arr1[i] == arr2[j]){
          common.push(arr1[i]);  //if the element is the same add it to the result 
          i++;
          j++;
      }
      else if(arr1[i] < arr2[j]){i++;}  //Increment the smaller valueso that  
      else{j++;}                      //it could be matched with the larger element 
  }
  return common;
}
console.log(Intersection([14, 99, 57, 15, 19, 93],[45, 19, 93, 7, 23, 1, 15])) 
//output [ 15, 19, 93 ]

