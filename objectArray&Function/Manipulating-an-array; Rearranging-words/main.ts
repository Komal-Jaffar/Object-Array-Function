//Task 2 ;
// ---- Assignment 2: Manipulating an Array: Rearranging Words ----

/*Objective:

Rearrange an array using array methods to form the sentence "I am a student of GIAIC".

Steps:

1. Scrambled Array:

o Start with an array of elements in a scrambled order, like:

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

• Modify the Array:

Use methods like split(), join(), push(), pop(), shift(), and unshift() to:

o Convert non-strings (booleans, numbers) to strings if needed.

o Split elements into character arrays (optional).

- o Rearrange characters or elements in the desired order (modify original array or create temporary arrays).

Output the Result:

Use join() to combine elements back into a single string: "I am a student of GIAIC".*/

//Define Scramble Array

let scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"]

//Methods

scrambledArray.splice(3,1)

scrambledArray.splice(2,1)

scrambledArray.splice(1,1)

scrambledArray.pop()

scrambledArray.splice(0,1, "I")

scrambledArray.splice(3,1, "student", "of")

scrambledArray.push("GIAIC")

console.log(scrambledArray.join(" "));