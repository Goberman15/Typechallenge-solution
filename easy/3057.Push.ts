/*
  3057 - Push
  -------
  by jiangshan (@jiangshanmeta) #easy #array
  
  ### Question
  
  Implement the generic version of ```Array.push```
*/

/* __________________ Answer __________________ */

type Push<T extends any[], U> = [...T, U]