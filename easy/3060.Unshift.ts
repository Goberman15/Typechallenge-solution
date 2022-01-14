/*
  3060 - Unshift
  -------
  by jiangshan (@jiangshanmeta) #easy #array
  
  ### Question
  
  Implement the type version of ```Array.unshift```
*/

/* __________________ Answer __________________ */

type Unshift<T extends any[], U> = [U, ...T]