/*
  529 - Absolute
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #math #template-literal
  
  ### Question
  
  Implement the `Absolute` type. A type that take string, number or bigint. The output should be a positive number string
*/

/* __________________ Answer __________________ */

type Absolute<T extends number | string | bigint> =
    `${T}` extends `${infer First}${infer Rest}`
    ? First extends '-'
    ? Rest
    : `${T}`
    : never;
