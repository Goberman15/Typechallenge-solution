/*
  4179 - Flip
  -------
  by Farhan Kathawala (@kathawala) #medium #object
  
  ### Question
  
  Implement the type of `just-flip-object`. Examples:
*/


/* __________________ Answer __________________ */

type Flip<T> = {
    [P in keyof T as T[P] extends PropertyKey
    ? T[P]
    : T[P] extends boolean
    ? `${T[P]}`
    : never
    ]: P
};