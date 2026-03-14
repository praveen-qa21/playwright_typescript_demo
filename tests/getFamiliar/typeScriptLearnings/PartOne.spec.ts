import { test } from "@playwright/test";


test('Can a js/ts object hold a function as a property, explain with example..', () => {

    /*
Yes, absolutely. In JavaScript and TypeScript, 
functions are first-class citizens, 
meaning they can be treated like any other value (like a string or a number) and assigned to object properties
    */


//Function as a variable
const drop = (num: number) => `he will drop u in ${num} km/hr`

//Object means {} so
//Driver object has a drop function property,
    const Driver = {
        name: 'Shiv Nadar',
        EOY: 5,
        drop: (num: number) => `${Driver.name} will drop u in ${num} km/hr`,
          
    }

    console.log(Driver.drop(60))

    //Encapsulation: You can group data (properties) and behavior (functions) together.
    const calculator = {
        label: "My Calculator",
        // Function as a property
        addTwo: (num: number): number => {
            return num + 2;
        },
        // Shorthand syntax
        multiply(a: number, b: number): number {
            return a * b;
        }
    };

    console.log(calculator.addTwo(5));   // Output: 7
    console.log(calculator.multiply(3, 4));

})


test('What is Anonymous Function', ()=>{
//1. Implementation via Variable Assignment

    //Function with name
     function addOperate(num1:number, num2:number): number {
            return num1+num2;
      }
      console.log(addOperate(2,5))

//Function without Name are called as Anonymous function
      const addWithoutFunction = function (num1:number, num2:number): number {
            return num1+num2;
      }
      console.log(addWithoutFunction(2,5))

      const addwithoutNameAsArrowFunction = (a:number, b:number):number => a+b;

      console.log(addwithoutNameAsArrowFunction(5,2))

//1. Implementation via callback,

const nameArray = ["uni","bi", "tri", "qua", "fy"]
/*
(method) Array<string>.map<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any): U[]
*/

//map is function which takes another annonyms FUNCTION AS A PARAMETER thats called as callback

nameArray.map((name) => name.toUpperCase())

//user defined callback
    const numberProcessor = (a: number, b: number, operatorfn: (a: number, b: number) => number) => {

        console.log("within Callback")
        return operatorfn(a, b)

    } 

console.log("add", numberProcessor(5,2, (a:number, b:number) => a+b ) )
console.log("mul",  numberProcessor(5,2, (a:number, b:number) => a-b ) )
console.log("div",  numberProcessor ( 9,0,  (a,b)=>a/b   )   )  //In typescript divide by Zero gives Infinity as output

})

test("Explain var,const,let", ()=>{

    let num1;
    console.log("let undefined", num1)

    let num2 = 20;
    num2 = 2;
    console.log("value of let can be changed in run time", num2)

    const num3:number = 66 ;
    console.log('const should be initialized', num3)

   // num3 = 66 ;
    console.log('constant shouldnt be reinitialized/reAssigned', num3)

    var num4 = 44
    num4 = 55
   // num4 = "changed";
    var num5 = "d"
    console.log("type inference in var", num4 )
    console.log("type inference in var", num5 )
})

test('array methods', ()=>{

    const fixedArray = Array.of(10,9,5,4,7,2,1,1,2,3,4,5,6);
    const newLength =  fixedArray.push(100);
    console.log("New Length ", newLength)
    console.log(fixedArray)

    const removed  =  fixedArray.pop() 
    console.log("Removed last value: ", removed)
     console.log("after removal ", fixedArray)
     console.log("New Length ", fixedArray.length)

     console.log("Inserts new elements at the start of an array, and returns the new length of the array",
                 fixedArray.unshift(200))

     console.log(fixedArray[0])  
     
     console.log("Removes the first element from an array and returns it", fixedArray.shift())
     console.log(fixedArray[0])  

     console.log("Returns the index of the first occurrence ", fixedArray.indexOf(5,3))

    const deletedElements =  fixedArray.splice(6,2);
     console.log("", deletedElements)

    fixedArray.forEach((value,index)=> {
        console.log(`value ${value} is present at index ${index}`)
    })

})
