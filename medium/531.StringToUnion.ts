:w/*
  531 - String to Union
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #union #string
  
  ### Question
  
  Implement the String to Union type. Type take string argument. The output should be a union of input letters
*/

/* __________________ Answer __________________ */

type StringToUnion<T extends string, Arr extends readonly any[] = []> = 
  T extends `${infer First}${infer Tail}`
  ? StringToUnion<Tail, [First, ...Arr]>
  : Arr[number]
