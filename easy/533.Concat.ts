/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #easy #array
  
  ### Question
  
  Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order
*/

/* __________________ Answer __________________ */

type Concat<T extends any[], U extends any[]> = [...T, ...U]