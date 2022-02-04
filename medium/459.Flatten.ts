/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #medium #array
  
  ### Question
  
  In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
*/


/* _____________ Your Code Here _____________ */

type Flatten<T extends any[]> =
    T extends [infer Head, ...infer Tail]
    ? Head extends any[]
    ? [...Flatten<Head>, ...Flatten<Tail>]
    : [Head, ...Flatten<Tail>]
    : T