/*
  106 - Trim Left
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.
*/


/* __________________ Answer __________________ */

type Whitespace2 = ' ' | '\n' | '\t';

type TrimLeft<S extends string> =
  S extends `${Whitespace2}${infer Tail}`
  ? TrimLeft<Tail>
  : S