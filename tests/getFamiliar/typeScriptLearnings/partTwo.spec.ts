import {test} from "@playwright/test"
import { validateHeaderName, validateHeaderValue } from "node:http"

test('asynchronous flow' , ()=>{

console.log("Video Recording")
console.log("Video Editing")

setTimeout(()=>{
console.log("Video uploading takes some time")
},15)

console.log("Video publishing")
})

test('callback', ()=>{

//    So is this example clearly explains my understanding with callback?
// not only passing function as a  parameter but also when to call it back?

// Without callback:
// function fetchData() {
//     setTimeout(()=>{
//         console.log("Data fetching... takes 2 minutes")
//     }, 2000)
// }

// function processData() {
//     console.log("...Processing Data")
// }

// fetchData();
// processData();

// output:
// [LOG]: "...Processing Data" 
// [LOG]: "Data fetching... takes 2 minutes" 

// Using call back:
// function fetchData(callbackfn:()=>void) {
//     setTimeout(()=>{
//         console.log("Data fetching... takes 2 minutes")
//         callbackfn()
//     }, 2000)
// }

// function processData() {
//     console.log("...Processing Data")
// }

// fetchData(process
// Data);

// output:
// [LOG]: "Data fetching... takes 2 minutes" 
// [LOG]: "...Processing Data"


/**
 * Using Promise and Await
 * 
 * function fetchData():Promise<void> {
   return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("Data is Fetching...")
        resolve()
    }, 5000)
   })
}

function processData() {
    console.log("...Processing Data")
}

const value =  async()=>{
await fetchData();
processData()
}

value()
 * 
 * 
 */
})

test('== and ====', ()=>{

    const a:any = 10;
    console.log(a==='10'); //false
    console.log(a==10); //true

    let num = null
    console.log(typeof num) //object
    console.log(num) //null

    
    let num3 ;
    console.log(typeof num3) //undefined
    console.log(num3) //undefined
})

test('array methods map, filter, reduce', ()=>{

  //declare an array of objects with name and student marks for 5 students
  const students = [
    {name: "Alice", marks: 85},
    {name: "Bob", marks: 92},
    {name: "Charlie", marks: 78},
    {name: "paulo", marks: 78},
    {name: "coehlo", marks: 20},
    {name: "David", marks: 90},
    {name: "Eve", marks: 35}
  ]     

//find the student that score more than 36
console.log( 
    students.filter(stud=>stud.marks >36)
)


//update the names to upper case of the students who scored more than 36
console.log(
    students.filter(student => student.marks > 36)
    .map(students=> students.name.toUpperCase())
)

//find the students with same marks

//Find the student with highest marks

    // console.log(
    //     students.reduce((acc,student)=>{
    //         if(!acc[student.marks]){        
    //             acc[student.marks] = [student.name]
    //         }   else {          
    //             acc[student.marks].push(student.name)
    //         }
    //         return acc
    //     }   ,{})    
    // )




//Find the student with highest marks
 students.sort((stu1,stu2) => stu2.marks-stu1.marks)
 console.log("After Sorting by maximum marks in Desc", students[0])

 


})