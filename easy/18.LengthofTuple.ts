/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #easy #tuple
  
  ### Question
  
  For given a tuple, you need create a generic `Length`, pick the length of the tuple
*/


/* __________________ Answer __________________ */

type Length<T extends readonly any[]> = T['length'];
