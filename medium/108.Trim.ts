/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.
*/


/* __________________ Answer __________________ */

type Whitespace1 = ' ' | '\n' | '\t';

type Trim<S extends string> =
    S extends `${Whitespace1}${infer Rest}`
    ? Trim<Rest>
    : S extends `${infer Rest}${Whitespace1}`
    ? Trim<Rest>
    : S;