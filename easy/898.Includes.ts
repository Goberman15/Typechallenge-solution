/*
  898 - Includes
  -------
  by null (@kynefuk) #easy #array
  
  ### Question
  
  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.
*/

/* __________________ Answer __________________ */

type MyEqual<T, U> = (<V>() => V extends T ? 0 : 1) extends (<V>() => V extends U ? 0 : 1) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? (MyEqual<U, First> extends true ? true : Includes<Rest, U>) : false
