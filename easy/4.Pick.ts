/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in
  
  ### Question
  
  Implement the built-in `Pick<T, K>` generic without using it.
  
  Constructs a type by picking the set of properties `K` from `T`
*/


/* __________________ Answer __________________ */

type MyPick<T, K extends keyof T> = {
    [key in keyof T as key extends K ? key : never]: T[key]
}