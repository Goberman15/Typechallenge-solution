/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #easy #promise #built-in
  
  ### Question
  
  If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have `Promise<ExampleType>` how to get ExampleType?
*/

/* __________________ Answer __________________ */

type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? (U extends Promise<any> ? MyAwaited<U> : U) : T;