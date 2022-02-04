/*
  3062 - Shift
  -------
  by jiangshan (@jiangshanmeta) #medium #array
  
  ### Question
  
  Implement the type version of ```Array.shift```
*/


/* __________________ Answer __________________ */

type Shift<T extends any[]> = T extends [infer _, ...infer Tail] ? Tail : T;