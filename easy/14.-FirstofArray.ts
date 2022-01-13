/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #easy #array
  
  ### Question
  
  Implement a generic `First<T>` that takes an Array `T` and returns it's first element's type.
*/


/* __________________ Answer __________________ */

type First<T extends any[]> = T extends never[] ? never : T[0];