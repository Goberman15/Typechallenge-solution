/*
  9 - Deep Readonly
  -------
  by Anthony Fu (@antfu) #medium #readonly #object-keys #deep
  
  ### Question
  
  Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.
  
  You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on are no need to take into consideration. However, you can still challenge your self by covering different cases as many as possible.
*/


/* _____________ Your Code Here _____________ */

type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends Function ? T[K] : DeepReadonly<T[K]>
}