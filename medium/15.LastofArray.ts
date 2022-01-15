/*
  15 - Last of Array
  -------
  by Anthony Fu (@antfu) #medium #array
  
  ### Question
  
  > TypeScript 4.0 is recommended in this challenge
  
  Implement a generic `Last<T>` that takes an Array `T` and returns its last element.
*/

/* __________________ Answer __________________ */

type Last<T extends any[]> = T extends [...any[], infer Last] ? Last : never;