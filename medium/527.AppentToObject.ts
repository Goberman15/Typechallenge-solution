/*
  527 - Append to object
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #object-keys
  
  ### Question
  
  Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.
*/

/* __________________ Answer __________________ */

type AppendToObject<T, U extends string, V> = { [K in keyof T | U]: K extends keyof T ? T[K] : V };