/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal
  
  ### Question
  
  Compute the length of a string literal, which behaves like `String#length`.
*/


/* __________________ Answer __________________ */

type LengthOfString<S extends string, Arr extends any[] = []> =
    S extends `${infer First}${infer Tail}`
    ? LengthOfString<Tail, [...Arr, First]>
    : Arr['length'];
