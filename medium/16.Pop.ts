/*
  16 - Pop
  -------
  by Anthony Fu (@antfu) #medium #array
  
  ### Question
  
  > TypeScript 4.0 is recommended in this challenge
  
  Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.
*/


/* __________________ Answer __________________ */

type Pop<T extends any[]> = T extends [...infer Stay, any] ? Stay : undefined;
