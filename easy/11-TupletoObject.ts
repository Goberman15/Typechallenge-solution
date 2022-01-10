/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy 
  
  ### Question
  
  Give an array, transform into an object type and the key/value must in the given array.
*/


/* __________________ Answer __________________ */

type TupleToObject<T extends readonly (number | string)[]> = {
    [K in T[number]]: K
}
