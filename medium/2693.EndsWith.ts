/*
  2693 - EndsWith
  -------
  by jiangshan (@jiangshanmeta) #medium #template-literal
  
  ### Question
  
  Implement `EndsWith<T, U>` which takes two exact string types and returns whether `T` ends with `U`
*/


/* __________________ Answer __________________ */

type EndsWith<T extends string, U extends string> = T extends `${infer _}${U}` ? true : false;