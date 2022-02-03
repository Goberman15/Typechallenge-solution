/*
  116 - Replace
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`
*/


/* __________________ Answer __________________ */

type Replace<S extends string, From extends string, To extends string> =
    From extends ''
    ? S
    : S extends `${infer Head}${From}${infer Tail}`
    ? `${Head}${To}${Tail}`
    : S;