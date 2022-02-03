/*
  110 - Capitalize
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.

*/


/* __________________ Answer __________________ */
type MyCapitalize<S extends string> =
    S extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : S;