/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Get an `Object` that is the difference between `O` & `O1`
*/


/* __________________ Answer __________________ */

type DiffUnion<A, B> = A extends B ? never : A;
type Diff<O, O1> = {
    [P in DiffUnion<keyof O | keyof O1, keyof O & keyof O1>]:
    P extends keyof O
    ? O[P]
    : P extends keyof O1
    ? O1[P]
    : never
}