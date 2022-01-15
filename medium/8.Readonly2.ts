/*
  8 - Readonly 2
  -------
  by Anthony Fu (@antfu) #medium #readonly #object-keys
  
  ### Question
  
  Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.
  
  `K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.
*/

/* __________________ Answer __________________ */

type MyReadonly2<T, K extends keyof T = keyof T> = T & { readonly [Prop in K]: T[Prop] } 