// Coding Practical Questions with Jest

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code: Use the red green refactor format to set up a test and a function.
//in - object
//out - string interpolated statement with yes/no determination in full sentence
//process - write a test and get a good fail, write a function which takes an object, accesses the value, determines if the value is divisible by three, and returns a statement based on the determination. Refactor.

// a) Create a test with expect statements for each of the variables provided.
describe("divisibleByThree", () => {
    it("returns a statement of whether or not the input is divisible by three", () => {
      expect(divisibleByThree(object1)).toEqual(`${object1.number} is divisible by three`)
      expect(divisibleByThree(object2)).toEqual(`${object2.number} is divisible by three`)
      expect(divisibleByThree(object3)).toEqual(`${object3.number} is not divisible by three`)
    })
  })

//failed:     ReferenceError: divisibleByThree is not defined
//this is a good fail so I'll move on to creating the code.
const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
const divisibleByThree = (object) => {
//access the value of the key value pair, return different statements for the cases of yes div by 3 and no not div by 3. For edge cases, added additional statement - if data stored is not a number for example
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else if (object.number % 3 !== 0){
        return `${object.number} is not divisible by three`
    } else {
        return`you found an edge case! your input of ${object} bypassed conditions of both returning and not returning 0 when divided by three. is the value of your input a datatype number?`
    }
}
//pass! green complete:   ✓ returns a statement of whether or not the input is divisible by three (2 ms)

//refactor - could consider a ternary operator if I need to keep it as a standalone function, could also build a method in which does this

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code: Use the red green refactor format to set up a test and a function.
//in - array of datatype strings with each string being an individual word
//out - array of same length as original, first character in each word capitalized
//process - write a test and get a good fail, write a function which takes an array and iterates through it, capitalizes the first letter of each word and returns the result. Refactor.

// a) Create a test with expect statements for each of the variables provided.
describe("capitalizeMeCaptain", () => {
    it("returns a an array with each word Capitalized", () => {
      expect(capitalizeMeCaptain(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalizeMeCaptain(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })
//good fail! red complete     ReferenceError: capitalizeMeCaptain is not defined


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
const capitalizeMeCaptain = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
}
//pass! green complete:     ✓ returns a an array with each word Capitalized (1 ms)
//Refactor: this does what is required, but only if each array value is a string of only one word. To make this more complex/reusable/dynamic, I could refactor this to be able to capitalize every word within one string value of multiple words. I could also cleanup the syntax to shorten it a bit; I wrote it out long form to help think it through


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code: Use the red green refactor format to set up a test and a function.
//in - string
//out - index location of first vowel in the string
//process - write a test and get a good fail, write a function which takes an string, finds and returns the first vowel. edge cases could be "y" or non-English languages which use other than the roman alphabet, or which applies vowel sounds to letters different than aeiouy. Refactor.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("returns the index location of the first value in the input string", () => {
      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
      expect(firstVowel(vowelTester3)).toEqual(2)
    })
  })

//good fail! red complete.     ReferenceError: firstVowel is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

//I tussled with this one for a while! I was trying to return the lowest value of string.indexOf(vowel), and it took three different sets of code to realize that the vowels not in the tested word were returning -1 so the whole thing was giving me -1 back for each tested word

//first attempt
//     let a = string.indexOf('a')
//     let e = string.indexOf('e')
//     let i = string.indexOf('i')
//     let o = string.indexOf('o')
//     let u = string.indexOf('u')

//     return Math.min(a, e, i, o, u)

//second attempt
// return Math.min(string.indexOf("a"), string.indexOf("e"), string.indexOf("i"), string.indexOf("o"), string.indexOf("u"))

//third attempt, with copious console logging - kept getting back "you got an edge case" and finally had an "aha!" moment
    // console.log(string.indexOf("o"));
    // if (string.indexOf("a") < string.indexOf("e") && string.indexOf("a") < string.indexOf("i") && string.indexOf("a") < string.indexOf("o") && string.indexOf("a") < string.indexOf("u")){
    //     return string.indexOf("a")
    // }
    // else if (string.indexOf("e") < string.indexOf("a") && string.indexOf("e") < string.indexOf("i") && string.indexOf("e") < string.indexOf("o") && string.indexOf("e") < string.indexOf("u")){
    //     return string.indexOf("e")
    // }
    
    // else if (string.indexOf("i") < string.indexOf("a") && string.indexOf("i") < string.indexOf("e") && string.indexOf("i") < string.indexOf("o") && string.indexOf("i") < string.indexOf("u")){
    //     return string.indexOf("i")
    // }
    // else if (string.indexOf("o") < string.indexOf("a") && string.indexOf("o") < string.indexOf("i") && string.indexOf("o") < string.indexOf("e") && string.indexOf("o") < string.indexOf("u")){
    //     return string.indexOf("o")
    // }
    // else if (string.indexOf("u") < string.indexOf("a") && string.indexOf("u") < string.indexOf("i") && string.indexOf("u") < string.indexOf("o") && string.indexOf("u") < string.indexOf("e")){
    //     return string.indexOf("u")
    // } else {
    //     return ("You found an edge case!")
    // }

const vowels = ["a", "e", "i", "o", "u"]

const firstVowel =
    vowels.filter(vowels => string.includes(vowels))
    return string.indexOf(firstVowel)


    // return Math.min(string.indexOf(string.includes(value) => value in vowels))
    // }


    // Tried to do this method then went back to above to work on that, I definitelly need to work on my understanding of .filter and .map
    // const vowels = [
    //     { vowel: "a", has: string.includes("a"), first: string.indexOf("a") },
    //     { vowel: "e", has: string.includes("e"), first: string.indexOf("e") },        
    //     { vowel: "i", has: string.includes("i"), first: string.indexOf("i") },        
    //     { vowel: "o", has: string.includes("o"), first: string.indexOf("o") },        { vowel: "u", has: string.includes("u"), first: string.indexOf("u") }
    //   ]
    //   let contains = []
    //   const firstVowel = (string) => {
    //     for (vowels.filter(value => value.has === true)) {
    //         contains.push(vowels.filter(value => value.first))
    //         return Math.min(contains)
    //     }
    //   }

