/*
  3312 - Parameters
  -------
  
  ### Question
  
  Implement the built-in `ReturnType<T>` generic without using it.
*/

/* __________________ Answer __________________ */

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Args) => any ? [...Args] : []