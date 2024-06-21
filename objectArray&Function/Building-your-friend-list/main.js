//Task No 1 ;
//  ----~Assignment 1: Building Your Friend List-----
/*Task: Create a program that manages a simple friend list.

1. Define an object named people containing an empty array called friends.

2. Create three separate objects, each representing a friend, with properties like firstName,

lastName, and optionally id.

3. Add these friend objects to the friends array within the people object.

4. Output the entire people object to the console, displaying your information and your

friend list.*/
var people = {
    friends: [],
};
var friend1 = {
    firstName: "Komal",
    lastName: "Jaffar",
    id: 22567
};
var friend2 = {
    firstName: "Muskan",
    lastName: "khan",
    id: 22768
};
var friend3 = {
    firstName: "Mirha",
    lastName: "Rao",
    id: 22792
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
