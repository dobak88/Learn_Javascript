/*
        Dylan Rossi
        1.26.21
        30 Days of JavaScript: Day 2
        Data Types
 */

/*   Part One */

//  Declaring strings and using string functions
let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log("Length of string: ", challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())

//  Slice out words
console.log(challenge.substr(0, 3))
console.log(challenge.substr(3))
//  Check if the string contains a word Script using includes() method
console.log("Does the string contain the word \\\"Script\\\"?: ", challenge.includes('Script'))
//  Split the string into an array using split() method
console.log(challenge.split())
//  Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))

//  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma
//      and change it to an array
let business = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(business.split())
console.log(business.split(' '))

//  Replace w substring
console.log(challenge.replace('JavaScript', 'Python'))
//  char at
console.log("Char at index 15: ", challenge.charAt(14))
console.log("Char code of J: ", challenge.charCodeAt(11))

//index of
console.log("First instance of 'a': ", challenge.indexOf('a'))
console.log("Last index of 'a': ", challenge.lastIndexOf('a'))
let newString = "You cannot end a sentence with because because because is a conjunction"
console.log("First instance of 'because': ", newString.indexOf('because'))
console.log("Last instance of 'because': ", newString.lastIndexOf('because'))

//  search using regex
console.log("Search for first instance of 'because' using regex: ", newString.search(/because/gi))
// trim whitespace from strings
console.log("Trim Whitespace: ", challenge.trim())
//  Boolean string match
console.log("Does string start with '30'?: ", challenge.startsWith('30'))
console.log("Does string end with 'JavaScript'?: ", challenge.startsWith('JavaScript'))

//  match() concat() repeat()
console.log(challenge.match(/a/gi))
let string_zero = '30 Days Of '
let string_one = 'JavaScript'
console.log(string_zero.concat(string_one))
console.log("String repeated twice: ", challenge.repeat(2))


/*  Part Two */

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.'" +
            " by John Holmes teaches us to help one another.\n")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- " +
            "with charity you give love, so don't just give money but reach out your hand instead.")

//  typeof and casting
console.log(typeof('10'))
console.log(typeof(parseInt('10')))
console.log(.2 + parseFloat('9.8'))
let xString = 'python'
let yString = 'jargon'
console.log("Is on found in python?: ", xString.includes("on"))
console.log("Is on found in jargon?: ", yString.includes("on"))
let jargonString = "I hope this course is not full of jargon. Check if jargon is in the sentence."
console.log("Jargon in string?: ", jargonString.includes('jargon'))

//  Random numbers
//  0-100
let random_100 = Math.floor((Math.random() * 101))
console.log(random_100)
//  50-100
let random_50 = Math.floor(50 + (Math.random() * 51))
console.log(random_50)
//0-255
let random_255 = Math.floor((Math.random() * 256))
console.log(random_255)

//  access a string using random number, first make into c-string with split()
let randomString = 'JavaScript'
console.log(randomString.split())
console.log(randomString.charAt(Math.floor(Math.random() * randomString.length)))

//  print a table using escape characters
console.log("1\\\t1\\\t1\\\t1\\\t1")
console.log("2\\\t1\\\t2\\\t4\\\t8")
console.log("3\\\t1\\\t3\\\t9\\\t27")
console.log("4\\\t1\\\t4\\\t16\\\t64")
console.log("5\\\t1\\\t5\\\t25\\\t125")

//  slice out a substring from string
console.log(newString.substr(31, 23))


/*  Part Three */
let StringX = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let pattern = /love/gi

console.log(StringX.match(pattern))
console.log(newString.match(/because/gi))

//  Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I \$am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re \$is no@th@ing; &as& mo@re rewarding as ' +
                    'educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her ' +
                    '%jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so \$the ' +
                    '\$resu@lt of &love& of tea&ching'

//  Calculate the total annual income of the person by extracting the numbers from the following text.
const newSentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let tempString = newSentence.match(/\d+/g)
console.log(tempString)


let x = parseInt(tempString.substr(0, 4))
let y = parseInt(tempString.substr(4, 5))
let z = parseInt(tempString.substr(9, 5))

let salary = (x * 12) + y + (z * 12)
console.log("Annual salary = $", salary)

