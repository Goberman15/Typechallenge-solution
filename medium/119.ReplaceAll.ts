/*
  119 - ReplaceAll
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`
*/


/* __________________ Answer __________________ */

type ReplaceAll<S extends string, From extends string, To extends string> =
    From extends ''
    ? S
    : S extends `${From}${infer Tail}`
    ? `${To}${ReplaceAll<Tail, From, To>}`
    : S extends `${infer First}${infer Tail}`
    ? `${First}${ReplaceAll<Tail, From, To>}`
    : S;