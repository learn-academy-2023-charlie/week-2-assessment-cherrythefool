//Taking a break from the 3rd coding challenge! That one's a doozy

// --------------------1) What will this log?

const cohort = "Charlie 2023"
console.log(cohort.split(""))

// a) Your answer: ['C', 'h', 'a', 'r', 'l', 'i', 'e', ' ', '2', '0', '2', '3']
// b) Verify and explain: Yep! cohort holds a string, and .split splits a string into an array. Since the split contained "" with no space, it split at each character (including space) and input each character as an individual value into an array

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student!"
// b) Verify and explain: undefined - this did not contain a return so it did not return anything

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: This creates a new array which takes the input array, and maps it so that for each number in the original array the new array will contain the value of (number * 2), or in other words doubles each value in the input array.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: yep! This creates a new array, onlyOdds, which is a subset of a given array. It filters through a given array to return a subset. So for each number in the original array, if the number when divided by two has a remainder it will be returned in the subset

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: This logged the value held at the 0th index for the values held in the key "languages" in the object myCodingSkills"

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:Hmmmmmm 

//okay so this is making a new object from a class template (Learn) and passing through the name George...
// maybe learnStudent { student: "George", cohort: "Charlie", year: 2023}

// b) Verify and explain: Learn { student: 'George', cohort: 'Charlie', year: 2023 }. I'm honestly not sure why it would be Learn and not learnStudent, and also not sure why it would have 'single quotes' instead of "double quotes" for Goerge and Charlie. But basically you're using the class of Learn as a template for a new object for learnStudent with that new student of George being passed through as an argument for the name parameter into the this.student value. 