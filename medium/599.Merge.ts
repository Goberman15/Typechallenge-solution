/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Merge two types into a new type. Keys of the second type overrides keys of the first type.
*/

/* __________________ Answer __________________ */

type Merge<F extends {}, S extends {}> = {
    [P in keyof (F & S)]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never;
};