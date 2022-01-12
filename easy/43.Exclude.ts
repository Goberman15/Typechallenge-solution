/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in
  
  ### Question
  
  Implement the built-in Exclude<T, U>
  > Exclude from T those types that are assignable to U
*/

/* __________________ Answer __________________ */

type MyExclude<T, U> = T extends U ? never : T 