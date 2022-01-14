/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in
*/

/* __________________ Answer __________________ */

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Args) => any ? [...Args] : []