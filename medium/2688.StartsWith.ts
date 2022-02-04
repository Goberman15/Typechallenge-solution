/*
  2688 - StartsWith
  -------
  by jiangshan (@jiangshanmeta) #medium #template-literal
  
  ### Question
  
  Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`
*/


/* __________________ Answer __________________ */

type StartsWith<T extends string, U extends string> = T extends `${U}${infer _}` ? true : false;