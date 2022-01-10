/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #easy #built-in #readonly #object-keys
  
  ### Question
  
  Implement the built-in `Readonly<T>` generic without using it.
  
  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
*/


/* __________________ Answer __________________ */

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}