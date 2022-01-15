/*
  10 - Tuple to Union
  -------
  by Anthony Fu (@antfu) #medium #infer #tuple #union
  
  ### Question
  
  Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.
*/

/* __________________ Answer __________________ */

type TupleToUnion<T extends readonly any[]> = T[number]