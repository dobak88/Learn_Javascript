// this is your main.js script
/*       30 Days of Javascript

        1.27.21

        Day 3 Exercises: Booleans and Operators
 */

//  PART ONE
//      Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the
//      typeof operator to check different data types.
let firstName = 'Dylan'
let lastName = 'Rossi'
let country = 'USA'
let city = "Laguna Niguel"
let isMarried = false
let age = 32
let year = 2021

console.log(firstName, lastName, country, city, isMarried, age, year)
console.log(firstName, typeof(firstName))
console.log(isMarried, typeof(isMarried))
console.log(age, typeof(age))
console.log(city, typeof(city))

//      Check if type of '10' is equal to 10.  Check if parseInt('9.8') is equal to 10
console.log("Is string '10' equal to int ten?: ", typeof('10') == 10)   //allow the warning
console.log("Is parseInt(9.8) ", parseInt('9.8'), " equal to int ten?: ", parseInt('9.8') === 10)

//      Explore boolean comparisons
console.log("Is 4 > 3? ", 4 > 3)
console.log("Is 4 < 3? ", 4 < 3)
console.log("Is 4 === 3? ", 4 === 3)
console.log("Are Python and Jargon different lengths? ", 'python'.length !== 'jargon'.length)
console.log("Is 5 > 3 and jargon.length is greater than 4? ", 5 > 3 && 'jargon'.length > 4)

//      Use the Date object to do the following activities
//      What is the year today?
year = new Date()
console.log(year.getFullYear())
//      What is the month today as a number?
month = new Date()
console.log(month.getMonth() + 1)
//      What is the date today?
date = new Date()
console.log(date.getDate())
//      What is the day today as a number?
dayAsNum = new Date()
console.log(dayAsNum.getDay())
//What is the hours now?
hours = new Date()
console.log(hours.getHours())
// What is the minutes now?
minutes = new Date()
console.log(minutes.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
since1970 = Date.now()
console.log(since1970)

//      PART TWO
//      Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle
let base = prompt("Enter a base: ")
let height = prompt("Enter a height: ")
alert(.5 * base * height)

//      Write a script that prompt the user to enter side a, side b, and side c of the triangle
//      and calculate the perimeter of triangle
let side1 = prompt("Enter side a:")
let side2 = prompt("Enter side b:")
let side3 = prompt("Enter side c:")
alert((parseInt(side1) + parseInt(side2) + parseInt(side3)))


